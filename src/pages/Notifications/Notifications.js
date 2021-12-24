import { useSelector } from "react-redux"
import Loading from "components/utility/Loading"
import NotifCard from "components/Notifications/NotifCard"

//ICONS
import { MdOutlineClearAll } from "react-icons/md"
import { useDispatch } from "react-redux"
import { clearNotifications } from "redux/actions/user"
import { BsEmojiSmileUpsideDown } from "react-icons/bs"

const Notifications = () => {
	const { notifications, userLoading } = useSelector((state) => state.user)
	const dispatch = useDispatch()
	const currentUserId = JSON.parse(localStorage.getItem("userId"))?.id

	return (
		<div className='notifications-page'>
			{userLoading ? (
				<div className='empty-wrapper'>
					<Loading />
				</div>
			) : notifications?.length === 0 ? (
				<div className='empty-wrapper'>
					<BsEmojiSmileUpsideDown className='icon' />
					<h1>No notificaions yet!</h1>
				</div>
			) : (
				<div className='wrapper'>
					<div className='clear-all'>
						<button onClick={() => dispatch(clearNotifications(currentUserId))}>
							<p>Clear all</p>
							<MdOutlineClearAll className='icon' />
						</button>
					</div>
					{notifications?.map((item) => (
						<NotifCard
							key={item?.notificationId}
							notificationId={item?.notificationId}
							userId={item?.userId}
							time={item?.createdAt}
							body={item?.body}
							referenceId={item?.referenceId}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default Notifications

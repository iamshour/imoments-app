import { useSelector } from "react-redux"
import Loading from "components/utility/Loading"
import NotifCard from "components/Notifications/NotifCard"
//ICONS
import { MdOutlineClearAll } from "react-icons/md"
import { useDispatch } from "react-redux"
import { clearNotifications } from "redux/actions/user"

const Notifications = () => {
	const { notifications, userLoading } = useSelector((state) => state.user)
	const dispatch = useDispatch()
	const currentUserId = JSON.parse(localStorage.getItem("userId"))?.id

	return (
		<div className='notifications-page'>
			{userLoading ? (
				<Loading />
			) : (
				<div className='wrapper'>
					{notifications?.length > 0 && (
						<button
							className='clear-all'
							onClick={() => dispatch(clearNotifications(currentUserId))}
						>
							<p>Clear all</p>
							<MdOutlineClearAll className='icon' />
						</button>
					)}
					{notifications?.length === 0 ? (
						<h1>No notificaions at the moment!</h1>
					) : (
						notifications?.map((item) => (
							<NotifCard
								key={item?.notificationId}
								notificationId={item?.notificationId}
								userId={item?.userId}
								time={item?.createdAt}
								body={item?.body}
								referenceId={item?.referenceId}
							/>
						))
					)}
				</div>
			)}
		</div>
	)
}

export default Notifications

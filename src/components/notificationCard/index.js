import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getUser } from "api"
import Moment from "react-moment"
import { makeUppercase } from "components/utility"
import { clearSinleNotification } from "redux/actions/user"
//ICONS
import { MdOutlineClear } from "react-icons/md"

const NotificationCard = ({ notificationId, userId, time, body }) => {
	const dispatch = useDispatch()
	const [user, setUser] = useState(null)
	const currentUserId = JSON.parse(localStorage.getItem("userId"))?.id

	useEffect(() => {
		let isMounted = true

		const getNotifUser = async () => {
			try {
				const { data } = await getUser(userId)
				isMounted && setUser(data)
			} catch (error) {
				dispatch({
					type: "ERROR",
					payload: error.response.data.message,
				})
			}
		}
		getNotifUser()

		return () => {
			isMounted = false
			dispatch({
				type: "CLEAR_USER_TAB",
			})
		}
	}, [userId, dispatch])

	return (
		<div className='notif-card'>
			<Link to={`/profile/${userId}`} className='left'>
				<img src={user?.avatar} alt={user?.name} />
			</Link>
			<div className='middle'>
				<h2 className='user-time'>
					<Moment fromNow>{time}</Moment>
				</h2>
				<p>
					<Link to={`/profile/${userId}`} className='user-name'>
						{makeUppercase(user?.name, 0) + " " + makeUppercase(user?.name, 1)}
					</Link>{" "}
					{body}
				</p>
			</div>
			<button
				className='right'
				onClick={() =>
					dispatch(
						clearSinleNotification(currentUserId, {
							notificationId: notificationId,
						})
					)
				}>
				<MdOutlineClear className='icon' />
			</button>
		</div>
	)
}

export default NotificationCard

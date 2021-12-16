import Moment from "react-moment"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getUser } from "api"
import { useDispatch } from "react-redux"
import { makeUppercase } from "components/utility/utilis"
//ICONS
import { MdOutlineClear } from "react-icons/md"
import { clearSinleNotification } from "redux/actions/user"

const NotifCard = ({ notificationId, userId, time, body, referenceId }) => {
	const dispatch = useDispatch()
	const [user, setUser] = useState(null)
	const currentUserId = JSON.parse(localStorage.getItem("userId"))?.id

	useEffect(() => {
		const getNotifUser = async () => {
			try {
				const { data } = await getUser(userId)
				setUser(data)
			} catch (error) {
				dispatch({
					type: "ERROR",
					payload: error.response.data.message,
				})
			}
		}
		getNotifUser()
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
				}
			>
				<MdOutlineClear className='icon' />
			</button>
		</div>
	)
}

export default NotifCard

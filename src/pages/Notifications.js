import { useSelector } from "react-redux"
import Loading from "components/utility/Loading"
import NotificationCard from "components/notifications/NotificationCard"

const Notifications = () => {
	const { notifications, userLoading } = useSelector((state) => state.user)

	return (
		<div className='notifications-page'>
			{userLoading ? (
				<Loading />
			) : (
				<div className='wrapper'>
					{notifications?.length === 0 ? (
						<h1>No notificaions at the moment!</h1>
					) : (
						notifications?.map((n) =>
							console.log(n?.body)
							// <NotificationCard
							// 	key={n?.notificationId}
							// 	body={n?.body}
							// 	notificationId={n?.notificationId}
							// 	referenceId={n?.referenceId}
							// 	userId={n?.userId}
							// 	time={n?.createdAt}
							// />
						)
					)}
				</div>
			)}
		</div>
	)
}

export default Notifications

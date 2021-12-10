import { useSelector } from "react-redux"
import Loading from "components/utility/Loading"
import Card from "components/Notifications/Card"

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
						notifications?.map((item) => {
							return <Card item={item} />
						})
					)}
				</div>
			)}
		</div>
	)
}

export default Notifications

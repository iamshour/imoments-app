import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getUser } from "api"
import { makeUppercase, presets } from "components/utility/utilis"

const Card = (item) => {
	const dispatch = useDispatch()
	const [user, setUser] = useState(null)

	useEffect(() => {
		const getNotifUser = async () => {
			try {
				const { data } = await getUser(item?.item?.userId)
				setUser(data)
			} catch (error) {
				dispatch({
					type: "ERROR",
					payload: error.response.data.message,
				})
			}
		}
		getNotifUser()
	}, [item?.item?.userId, dispatch])

	return (
		<div className='notification-container'>
			<Link to={`/profile/${item?.item?.userId}`} className='left'>
				<img
					src={user?.avatar ? user?.avatar : presets?.avatar}
					alt={user?.name}
				/>
				<div className='info'>
					<h1>
						{makeUppercase(user?.name, 0) + " " + makeUppercase(user?.name, 1)}
					</h1>
				</div>
			</Link>
			<h1>{item?.item?.body}</h1>
		</div>
	)
}

export default Card

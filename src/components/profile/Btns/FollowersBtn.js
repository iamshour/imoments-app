import { useEffect } from "react"
import { FiUsers } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router"
import { getFollowersAction } from "redux/actions/user"

const FollowersBtn = ({ currentUserId, userId }) => {
	const dispatch = useDispatch()
	const location = useLocation()
	const { message } = useSelector((state) => state?.user)
	const { followers } = useSelector((state) => state?.user)

	useEffect(() => {
		dispatch(getFollowersAction(userId))
	}, [message, location, userId, dispatch])

	return (
		<button>
			<FiUsers className='icon' />
			<p>
				{followers?.length === 0 ||
				followers?.length === null ||
				followers?.length === undefined
					? "No Followers yet"
					: followers === 1
					? "1 Follower"
					: followers + "Followers"}
			</p>
		</button>
	)
}

export default FollowersBtn

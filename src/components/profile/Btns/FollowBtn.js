import { FiUserPlus, FiUserCheck } from "react-icons/fi"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { followUnfollow } from "redux/actions/user"
import { useLocation } from "react-router"

const FollowBtn = ({ currentUserId, userId }) => {
	const location = useLocation()
	const dispatch = useDispatch()
	const [followed, setFollowed] = useState(false)

	const { followers, userMessage } = useSelector((state) => state?.user)

	useEffect(() => {
		setFollowed(
			followers?.map((person) => person?._id === userId).length > 0
				? true
				: false
		)
	}, [userId, location, userMessage, followers])

	return (
		<button
			className={`btn-medium follow-btn ${followed && "following-btn"}`}
			onClick={() => dispatch(followUnfollow(userId, currentUserId))}
		>
			<p>{followed ? "Following" : "Follow"}</p>
			{followed ? (
				<FiUserCheck className='icon' />
			) : (
				<FiUserPlus className='icon' />
			)}
		</button>
	)
}

export default FollowBtn

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
			className={`btn-medium ${followed === true && "following-btn"}`}
			onClick={() => dispatch(followUnfollow(userId, currentUserId))}
		>
			{followed === false ? (
				<>
					<p>Follow</p>
					<FiUserPlus className='icon' />
				</>
			) : (
				<>
					<p>Following</p>
					<FiUserCheck className='icon' />
				</>
			)}
		</button>
	)
}

export default FollowBtn

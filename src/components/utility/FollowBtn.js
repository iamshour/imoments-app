import { FiUserPlus, FiUserCheck } from "react-icons/fi"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUserProfile } from "redux/actions/user"
import { useLocation } from "react-router"
import { useEffect } from "react"
import { followUser } from "api"

const FollowBtn = ({ currentUserId, userId }) => {
	const location = useLocation()
	const dispatch = useDispatch()
	const [followed, setFollowed] = useState(false)
	const [message, setMessage] = useState()

	const { currentUserProfile } = useSelector((state) => state?.user)

	const followUnfollow = async () => {
		try {
			const { data } = await followUser(userId, {
				currentUserId: currentUserId,
			})
			setMessage(data)
		} catch (error) {
			dispatch({
				type: "NO_RESULTS",
				payload: error.response.data.message,
			})
		}
	}

	useEffect(() => {
		setFollowed(
			currentUserProfile?.following.find((person) => person?._id === userId)
				? true
				: false
		)
	}, [currentUserProfile, userId, location, message])

	useEffect(() => {
		dispatch(getCurrentUserProfile(currentUserId))
	}, [location, dispatch, currentUserId, message])

	return (
		<button
			className={`btn-medium ${followed === true && "following-btn"}`}
			onClick={followUnfollow}
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

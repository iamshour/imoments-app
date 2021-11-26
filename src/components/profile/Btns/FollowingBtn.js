import { useEffect } from "react"
import { FiUserCheck } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router"
import { getFollowing } from "redux/actions/user"

const FollowingBtn = ({ currentUserId, userId }) => {
	const dispatch = useDispatch()
	const location = useLocation()
	const { message } = useSelector((state) => state?.user)
	const { following } = useSelector((state) => state?.user)

	useEffect(() => {
		dispatch(getFollowing(userId))
	}, [message, location, userId, dispatch])

	return (
		<button>
			<FiUserCheck className='icon' />
			<p>
				{following?.length === 0 ||
				following?.length === null ||
				following?.length === undefined
					? "No Followings yet"
					: following?.length === 1
					? "1 Following"
					: following?.length + "Followings"}
			</p>
		</button>
	)
}

export default FollowingBtn

import { useEffect } from "react"
import { FiUserCheck } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router"
import { getFollowing } from "redux/actions/user"

const FollowingBtn = ({ currentUserId }) => {
	const params = useParams()
	const dispatch = useDispatch()
	const location = useLocation()
	const { following, userMessage } = useSelector((state) => state?.user)

	useEffect(() => {
		dispatch(getFollowing(params?.id))
	}, [location, params?.id, dispatch, userMessage])

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
					: following?.length + " Followings"}
			</p>
		</button>
	)
}

export default FollowingBtn

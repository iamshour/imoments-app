import { useEffect } from "react"
import { FiUsers } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router"
import { getFollowers } from "redux/actions/user"

const FollowersBtn = ({ currentUserId }) => {
	const params = useParams()
	const dispatch = useDispatch()
	const location = useLocation()
	const { message } = useSelector((state) => state?.user)
	const { followers } = useSelector((state) => state?.user)

	useEffect(() => {
		dispatch(getFollowers(params?.id))
	}, [location, dispatch, params?.id, message])

	return (
		<button>
			<FiUsers className='icon' />
			<p>
				{followers?.length === 0 ||
				followers?.length === null ||
				followers?.length === undefined
					? "No Followers yet"
					: followers?.length === 1
					? "1 Follower"
					: followers?.length + " Followers"}
			</p>
		</button>
	)
}

export default FollowersBtn

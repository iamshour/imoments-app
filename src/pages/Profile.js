import Card from "components/card/Card"
import UserCard from "components/profile/UserCard"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getCurrentUserProfile, getUserProfile } from "redux/actions/user"
import { useLocation } from "react-router"

const Profile = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const location = useLocation()
	const currentUser = useSelector((state) => state?.user)?.currentUserProfile
	const otherUser = useSelector((state) => state?.user)?.userProfile
	const user = currentUser?.id === params?.id ? currentUser : otherUser

	//getting this user by id
	const currentUserId = JSON.parse(localStorage.getItem("User"))?.user?._id

	useEffect(() => {
		if (currentUserId === params.id) {
			dispatch(getCurrentUserProfile(params.id))
		} else {
			dispatch(getUserProfile(params.id))
		}

		return () => {
			dispatch({
				type: "CLEAR_USER_TAB",
			})
		}
	}, [location, params.id, currentUserId])

	return (
		<div className='profile-page'>
			<UserCard user={user} currentUserId={currentUserId} />
			{currentUserId === params?.id ? (
				<h5>My Posts</h5>
			) : (
				<h5>
					{user?.name?.split(" ")[0]?.charAt(0)?.toUpperCase() +
						user?.name?.split(" ")[0]?.slice(1)}
					's posts
				</h5>
			)}
			<div className='cards-container'>
				{user?.posts?.map((post) => (
					<Card
						key={post._id}
						creatorId={post?.creatorId}
						img={post?.postImg}
						caption={post?.caption}
						time={new Date(post?.createdAt).toDateString()}
					/>
				))}
			</div>
		</div>
	)
}

export default Profile

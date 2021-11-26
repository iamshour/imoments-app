import Card from "components/card/Card"
import UserCard from "components/profile/UserCard"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router"
import { getUserPosts } from "redux/actions/posts"
import { getSingleUser } from "redux/actions/user"

const Profile = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const location = useLocation()
	// const { message } = useSelector((state) => state?.user)

	//GETTING CURRENT USER ID
	const currentUserId = JSON.parse(localStorage.getItem("User"))?.user?._id

	//GETTING VISITED USER
	const { user } = useSelector((state) => state?.user)

	const { userPosts } = useSelector((state) => state?.posts)

	useEffect(() => {
		dispatch(getSingleUser(params.id))

		// return () => {
		// 	dispatch({
		// 		type: "CLEAR_USER_TAB",
		// 	})
		// }
	}, [params.id, dispatch, location])

	useEffect(() => {
		dispatch(getUserPosts(params.id))

		return () => {
			dispatch({
				type: "CLEAR_POSTS",
			})
		}
	}, [params.id, dispatch])

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
				{userPosts?.map((post) => (
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

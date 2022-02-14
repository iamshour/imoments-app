import { useEffect } from "react"
import { useLocation, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getSingleUser } from "redux/actions/user"
import { getProfilePosts } from "redux/actions/posts"
//COMPS
import Post from "components/post"
import Loading from "components/fragments/Loading"
import UserCard from "components/userCard"
import { makeUppercase } from "components/utility"
import { GoFileMedia } from "react-icons/go"

const Profile = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const location = useLocation()

	//GETTING CURRENT USER ID
	const currentUserId = JSON.parse(localStorage.getItem("userId"))?.id

	//GETTING VISITED USER
	const { user, userMessage } = useSelector((state) => state?.user)

	const { userPosts, postMessage, postLoading } = useSelector((state) => state?.posts)

	useEffect(() => {
		dispatch(getSingleUser(params.id))

		return () => {
			dispatch({
				type: "CLEAR_USER_TAB",
			})
		}
	}, [params.id, dispatch, location, userMessage])

	useEffect(() => {
		dispatch(getProfilePosts(params.id))

		return () => {
			dispatch({
				type: "CLEAR_POSTS",
			})
		}
		//eslint-disable-next-line
	}, [params.id, dispatch, postMessage])

	return (
		<div className='profile-page'>
			<UserCard user={user} currentUserId={currentUserId} />
			{currentUserId === params?.id ? (
				<h5>My Posts</h5>
			) : (
				<h5>
					{makeUppercase(user?.name, 0)}
					's posts
				</h5>
			)}
			<div
				className={`cards-container ${
					(postLoading || userPosts?.length === 0) && "empty-container"
				}`}>
				{postLoading ? (
					<Loading />
				) : userPosts?.length > 0 ? (
					userPosts?.map((post) => (
						<Post
							key={post._id}
							creatorId={post?.creatorId}
							postId={post?._id}
							img={post?.postImg}
							caption={post?.caption}
							time={post?.createdAt}
							likes={post?.likes}
						/>
					))
				) : (
					<div className='empty-wrapper'>
						<GoFileMedia className='icon' />
						<h1>No posts added yet!</h1>
					</div>
				)}
			</div>
		</div>
	)
}

export default Profile

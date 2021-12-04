import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getSingleUser } from "redux/actions/user"
import { getProfilePosts } from "redux/actions/posts"
//COMPS
import Card from "components/card/Card"
import Loading from "components/utility/Loading"
import UserCard from "components/profile/UserCard"

const Profile = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const location = useLocation()
	const [customFetch, setCustomFetch] = useState(true)

	//GETTING CURRENT USER ID
	const currentUserId = JSON.parse(localStorage.getItem("userId"))?.id

	//GETTING VISITED USER
	const { user, userMessage } = useSelector((state) => state?.user)

	const { userPosts, postMessage, postLoading } = useSelector(
		(state) => state?.posts
	)

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
		if (customFetch) {
			setTimeout(() => {
				setCustomFetch(false)
			}, 2000)
		}

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
					{user?.name?.split(" ")[0]?.charAt(0)?.toUpperCase() +
						user?.name?.split(" ")[0]?.slice(1)}
					's posts
				</h5>
			)}
			<div
				className={`cards-container ${
					(postLoading || userPosts?.length === 0) && "empty-container"
				}`}
			>
				{postLoading ? (
					<Loading />
				) : userPosts?.length > 0 ? (
					userPosts?.map((post) => (
						<Card
							key={post._id}
							creatorId={post?.creatorId}
							postId={post?._id}
							img={post?.postImg}
							caption={post?.caption}
							time={new Date(post?.createdAt).toDateString()}
							likes={post?.likes}
						/>
					))
				) : customFetch ? (
					<Loading />
				) : (
					<p>
						{currentUserId === user?._id
							? "No Posts yet. Add your own new posts, or follow some new friends!"
							: "No posts added yet!"}
					</p>
				)}
			</div>
		</div>
	)
}

export default Profile

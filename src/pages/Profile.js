import Card from "components/card/Card"
import UserCard from "components/profile/UserCard"
import Loading from "components/utility/Loading"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router"
import { getProfilePosts } from "redux/actions/posts"
import { getSingleUser } from "redux/actions/user"

const Profile = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const location = useLocation()
	const [customFetch, setCustomFetch] = useState(true)

	//GETTING CURRENT USER ID
	const currentUserId = JSON.parse(localStorage.getItem("User"))?.user?._id

	//GETTING VISITED USER
	const { user } = useSelector((state) => state?.user)

	const { userPosts } = useSelector((state) => state?.posts)
	const { loading, message } = useSelector((state) => state?.utility)

	useEffect(() => {
		dispatch(getSingleUser(params.id))

		return () => {
			dispatch({
				type: "CLEAR_USER_TAB",
			})
		}
	}, [params.id, dispatch, location])

	useEffect(() => {
		dispatch(getProfilePosts(params.id))

		if (customFetch) {
			setTimeout(() => {
				setCustomFetch(false)
			}, 2000)
		}

		return () => {
			dispatch({
				type: "CLEAR_UTILITY",
			})
			dispatch({
				type: "CLEAR_POSTS",
			})
		}
		//eslint-disable-next-line
	}, [params.id, dispatch, message])

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
					(loading || userPosts?.length === 0) && "empty-container"
				}`}
			>
				{loading ? (
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

import Card from "components/card/Card"
import UserCard from "components/profile/UserCard"
import { presets } from "components/utility/utilis"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getSingleUser } from "redux/actions/user"
import { getUserPosts } from "redux/actions/posts"
import { useLocation } from "react-router"

const Profile = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const location = useLocation()

	//getting this user by id
	const user = useSelector((state) => state?.user)?.user
	const { posts } = useSelector((state) => state?.posts)
	const currentUserId = JSON.parse(localStorage.getItem("User"))?.user?._id

	useEffect(() => {
		dispatch(getUserPosts(params.id))

		return () => {
			dispatch(getUserPosts())
		}
	}, [location, dispatch, params.id])

	useEffect(() => {
		dispatch(getSingleUser(params.id))

		return () => {
			dispatch({
				type: "CLEAR_USER_TAB",
			})
		}
	}, [location, dispatch, params.id])

	return (
		<div className='profile-page'>
			<UserCard
				name={user?.name}
				avatar={user?.avatar ? user?.avatar : presets.avatar}
				nb={"3"}
				id={user?._id}
			/>
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
				{posts?.map((post) => (
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

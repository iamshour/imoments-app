import Card from "components/card/Card"
import UserCard from "components/profile/UserCard"
import { presets } from "components/utility/utilis"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getSingleUser } from "redux/actions/user"
import { useLocation } from "react-router"

const Profile = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const location = useLocation()
	const user = useSelector((state) => state?.user)
	const currentUser = JSON.parse(localStorage.getItem("User"))

	const customPost = [
		{
			id: 2,
			name: "Sam Jade",
			time: "45 mins ago",
			avatar: "https://www.w3schools.com/howto/img_avatar.png",
			caption:
				"Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
			img: "https://picsum.photos/536/354",
		},
	]

	useEffect(() => {
		dispatch(getSingleUser(params.id))
	}, [location, dispatch, params.id])

	return (
		<div className='profile-page'>
			<UserCard
				name={user?.user?.name}
				avatar={user?.user?.avatar ? user?.user?.avatar : presets.avatar}
				nb={"3"}
				id={user?.user?._id}
			/>
			{currentUser?.user?._id === params?.id ? (
				<h5>My Posts</h5>
			) : (
				<h5>
					{user?.user?.name?.split(" ")[0]?.charAt(0)?.toUpperCase() +
						user?.user?.name?.split(" ")[0]?.slice(1)}
					's posts
				</h5>
			)}
			<div className='cards-container'>
				{customPost.map((postCreator) => (
					<Card
						key={postCreator.id}
						id={postCreator.id}
						avatar={user?.user?.avatar ? user?.user?.avatar : presets.avatar}
						name={postCreator?.name}
						img={postCreator?.img}
						caption={postCreator.caption}
						time={postCreator.time}
					/>
				))}
			</div>
		</div>
	)
}

export default Profile

import Card from "components/card/Card"
import UserCard from "components/profile/UserCard"
import { presets } from "components/utility/utilis"
import { useHistory, useParams } from "react-router"

const Profile = () => {
	const params = useParams()

	const history = useHistory()
	const user = JSON.parse(localStorage.getItem("User"))

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
	// const filteredUser = customUser.filter(
	// 	(user) => user?.name.caption && .user?.name.img !== null
	// )

	// {user?.user?.name}

	return (
		<div className='profile-page'>
			<UserCard
				name={user?.user?.name}
				avatar={user?.user?.avatar ? user?.user?.avatar : presets.avatar}
				nb={"3"}
			/>
			<h5>My Posts</h5>
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

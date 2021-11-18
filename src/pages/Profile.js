import Card from "components/card/Card"
import UserCard from "components/profile/UserCard"
import { useHistory, useParams } from "react-router"

const Profile = () => {
	const params = useParams()

	const history = useHistory()
	const user = JSON.parse(localStorage.getItem("User"))
	const customUser = [
		{
			id: 2,
			username: "iamshour",
			time: "45 mins ago",
			avatar: "https://www.w3schools.com/howto/img_avatar.png",
			caption:
				"Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
		},
		{
			id: 1,
			username: "iamshour",
			time: "10 mins ago",
			avatar: "https://www.w3schools.com/howto/img_avatar.png",
			img: "https://picsum.photos/536/354",
			caption:
				"Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
		},
		{
			id: 3,
			username: "iamshour",
			time: "1 hour ago",
			avatar: "https://www.w3schools.com/howto/img_avatar.png",
			caption:
				"Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
		},
		{
			id: 4,
			username: "iamshour",
			time: "3 hours ago",
			avatar: "https://www.w3schools.com/howto/img_avatar.png",
			img: "https://i.pravatar.cc/150?img=14",
			caption:
				"Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
		},
	]
	const filteredUser = customUser.filter(
		(user) => user.caption && user.img !== null
	)

	if (!user) {
		history.push("/auth")
	}

	const userInfo = {
		name: params?.id === user?.result?.googleId ? user?.result?.name : null,
		id: params?.id === user?.result?.googleId ? user?.result?.googleId : null,
		avatar:
			params?.id === user?.result?.googleId ? user?.result?.imageUrl : null,
	}

	return (
		<div className='profile-page'>
			<UserCard name={userInfo.name} avatar={userInfo.avatar} nb={"3"} />
			<h5>My Posts</h5>
			<div className='cards-container'>
				{filteredUser.map((user) => (
					<Card
						key={user.id}
						id={userInfo.id}
						avatar={userInfo.avatar}
						name={userInfo.name}
						img={user.img}
						caption={user.caption}
						time={user.time}
					/>
				))}
			</div>
		</div>
	)
}

export default Profile

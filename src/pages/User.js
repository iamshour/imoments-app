import Card from "components/card/Card"
import UserCard from "components/profile/UserCard"

const User = () => {
	return (
		<div className='profile-page'>
			<UserCard
				name={"Test Test"}
				avatar={"https://www.w3schools.com/howto/img_avatar.png"}
				nb={"3"}
			/>
			<h5>My Posts</h5>
			<div className='cards-container'>
				<Card />
				<Card />
			</div>
		</div>
	)
}

export default User

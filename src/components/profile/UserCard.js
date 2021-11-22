import FollowBtn from "components/utility/FollowBtn"
import { FiUserCheck, FiUsers } from "react-icons/fi"

const UserCard = ({ name, avatar, id }) => {
	const currentUser = JSON.parse(localStorage.getItem("User"))

	return (
		<div className='user-card'>
			<div className='left'>
				<img src={avatar} alt={name} />
				<h1>{name}</h1>
			</div>
			<div className='right'>
				<div className='top-btns'>
					<button>
						<FiUserCheck className='icon' />
						<p>192 followings</p>
					</button>
					<button>
						<FiUsers className='icon' />
						<p>234 followers</p>
					</button>
				</div>
				<div className='bio-content'>
					<p>
						Apart from counting words and characters, our online editor can help
						you to improve word choice and writing style, and, optionally, help
						you to deteca
					</p>
				</div>
				{currentUser?.user?._id === id ? (
					<button className='btn-medium'>
						<p>Edit Profile</p>
					</button>
				) : (
					<FollowBtn className='profile-follow' />
				)}
			</div>
		</div>
	)
}

export default UserCard

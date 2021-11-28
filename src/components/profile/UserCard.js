import FollowingBtn from "./Btns/FollowingBtn"
import FollowersBtn from "./Btns/FollowersBtn"
import { presets } from "components/utility/utilis"
import FollowBtn from "components/utility/FollowBtn"

const UserCard = ({ currentUserId, user }) => {
	return (
		<div className='user-card'>
			<div className='left'>
				<img
					src={user?.avatar ? user?.avatar : presets.avatar}
					alt={user?.name}
				/>
				<h1>{user?.name}</h1>
			</div>
			<div className='right'>
				<div className='top-btns'>
					<FollowingBtn currentUserId={currentUserId} />
					<FollowersBtn currentUserId={currentUserId} />
				</div>
				<div className='bio-content'>
					<p>
						Apart from counting words and characters, our online editor can help
						you to improve word choice and writing style, and, optionally, help
						you to deteca
					</p>
				</div>
				{currentUserId === user?._id ? (
					<button className='btn-medium'>
						<p>Edit Profile</p>
					</button>
				) : (
					<FollowBtn
						className='profile-follow'
						userId={user?._id}
						currentUserId={currentUserId}
					/>
				)}
			</div>
		</div>
	)
}

export default UserCard

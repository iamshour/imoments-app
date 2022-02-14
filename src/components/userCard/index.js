import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { makeUppercase } from "components/utility"
//COMPS
import FollowBtn from "./children/FollowBtn"
import FollowingBtn from "./children/FollowingBtn"
import FollowersBtn from "./children/FollowersBtn"
import EditCard from "./EditCard"

const UserCard = ({ currentUserId, user }) => {
	const { userLoading, userMessage } = useSelector((state) => state?.user)
	const myProfile = currentUserId === user?._id ? true : false

	const [editProfile, setEditProfile] = useState(false)

	useEffect(() => {
		setEditProfile(false)
	}, [userMessage])

	if (editProfile) {
		return (
			<EditCard userLoading={userLoading} user={user} setEditProfile={setEditProfile} />
		)
	}

	return (
		<div className='profile-card-wrapper'>
			<div className='user-card'>
				<div className='left'>
					<img src={user?.avatar} alt={user?.name} />
					<h1>{makeUppercase(user?.name, 0) + " " + makeUppercase(user?.name, 1)}</h1>
				</div>
				<div className='right'>
					<div className='top-btns'>
						<FollowingBtn />
						<FollowersBtn />
					</div>
					<div className='bio-content'>
						<p>{user?.bio ? user?.bio : 'Click below to add your own bio here..."'}</p>
					</div>
					{myProfile ? (
						<button
							className='btn-medium edit-profile-btn'
							onClick={() => setEditProfile(true)}>
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
		</div>
	)
}

export default UserCard

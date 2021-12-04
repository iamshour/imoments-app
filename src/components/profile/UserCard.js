import FollowingBtn from "./Btns/FollowingBtn"
import FollowersBtn from "./Btns/FollowersBtn"
import { presets } from "components/utility/utilis"
import FollowBtn from "components/profile/Btns/FollowBtn"
import { useState } from "react"
import Textarea from "components/utility/Textarea"
import { FcAddImage } from "react-icons/fc"
import { useEffect } from "react"
import { useLocation } from "react-router"
import { addProfileInfo, updateProfile } from "redux/actions/user"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Loading from "components/utility/Loading"

const UserCard = ({ currentUserId, user }) => {
	const location = useLocation()
	const dispatch = useDispatch()

	const { userLoading } = useSelector((state) => state?.user)

	const [editProfile, setEditProfile] = useState(false)

	const [firstName, setFirstName] = useState(user?.name?.split(" ")[0])
	const [lastName, setLastName] = useState(user?.name.split(" ")[1])
	const [content, setContent] = useState(user?.bio ? user?.bio : "")
	const [file, setFile] = useState()

	const imgChange = (e) => {
		if (e.target.files[0]) {
			setFile(e.target.files[0])
		}
	}

	useEffect(() => {
		setFirstName(user?.name?.split(" ")[0])
		setLastName(user?.name?.split(" ")[1])
		setContent(user?.bio ? user?.bio : "")
	}, [location, user])

	const handleUpdate = async (e) => {
		e.preventDefault()

		const imgData = new FormData()
		imgData.set("firstName", firstName)
		imgData.set("lastName", lastName)
		imgData.set("bio", content)

		if (file && !user?.avatar) {
			imgData.set("image", file)
			dispatch(addProfileInfo(user?._id, imgData))
		} else if (file && user?.avatar) {
			imgData.set("image", file)
			dispatch(updateProfile(user?._id, imgData))
		} else {
			dispatch(updateProfile(user?._id, imgData))
		}
		setEditProfile(false)
	}

	return (
		<div className='profile-card-wrapper'>
			{userLoading ? (
				<Loading />
			) : (
				<div className='user-card'>
					<div className='left'>
						{editProfile ? (
							<div>
								<label htmlFor='add-img'>
									<FcAddImage className='icon' />
									<img
										style={{ width: "100px", height: "100px" }}
										src={
											file
												? URL.createObjectURL(file)
												: user?.avatar
												? user?.avatar
												: presets.avatar
										}
										alt="user's selection to upload"
									/>
								</label>
								<input
									type='file'
									style={{ display: "none" }}
									id='add-img'
									onChange={imgChange}
									accept='.jpg, .jpeg, .png'
								/>
							</div>
						) : (
							<img
								src={user?.avatar ? user?.avatar : presets.avatar}
								alt={user?.name}
							/>
						)}
						{!editProfile && <h1>{user?.name}</h1>}
					</div>
					<div className='right'>
						{!editProfile ? (
							<div className='top-btns'>
								<FollowingBtn currentUserId={currentUserId} />
								<FollowersBtn currentUserId={currentUserId} />
							</div>
						) : (
							<div className='top-btns'>
								<div className='input-bar'>
									<input
										type='text'
										name='firstName'
										placeholder='First name'
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									/>
								</div>
								<div className='input-bar'>
									<input
										type='text'
										name='lastName'
										placeholder='Last name'
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</div>
							</div>
						)}
						{editProfile ? (
							<Textarea
								content={content}
								setContent={setContent}
								customRows={4}
								name='bio'
								maxCh='220'
								className='bio-content'
							/>
						) : (
							<div className='bio-content'>
								<p>
									{user?.bio
										? user?.bio
										: 'Click below to add your own bio here..."'}
								</p>
							</div>
						)}
						{currentUserId === user?._id ? (
							editProfile ? (
								<div className='edit-btns'>
									<button className='btn-medium' onClick={handleUpdate}>
										<p>Update</p>
									</button>
									<button
										className='btn-medium reverse-btn'
										onClick={() => setEditProfile(false)}
									>
										<p>Cancel</p>
									</button>
								</div>
							) : (
								<button
									className='btn-medium'
									onClick={() => setEditProfile(true)}
								>
									<p>Edit Profile</p>
								</button>
							)
						) : (
							<FollowBtn
								className='profile-follow'
								userId={user?._id}
								currentUserId={currentUserId}
							/>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default UserCard

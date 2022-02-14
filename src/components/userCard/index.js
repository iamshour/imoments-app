import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProfileInfo, updateProfile } from "redux/actions/user"
import { makeUppercase } from "components/utility"
//COMPS
import FollowingBtn from "./children/FollowingBtn"
import FollowersBtn from "./children/FollowersBtn"
import FollowBtn from "./children/FollowBtn"
import Spinner from "components/fragments/Spinner"
import Textarea from "components/fragments/Textarea"
//ICONS
import { FcAddImage } from "react-icons/fc"

const UserCard = ({ currentUserId, user }) => {
	const dispatch = useDispatch()
	const { userLoading, userMessage } = useSelector((state) => state?.user)

	const [editProfile, setEditProfile] = useState(false)

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [content, setContent] = useState(user?.bio ? user?.bio : "")
	const [file, setFile] = useState(null)

	useEffect(() => {
		setFirstName(user?.name?.split(" ")[0])
		setLastName(user?.name.split(" ")[1])
	}, [user?.name, currentUserId])

	const imgChange = (e) => {
		if (e.target.files[0]) {
			setFile(e.target.files[0])
		}
	}

	const handleUpdate = async (e) => {
		e.preventDefault()

		const imgData = new FormData()
		imgData.set("firstName", firstName)
		imgData.set("lastName", lastName)
		imgData.set("bio", content)

		if (file && !user?.cloudinary_id) {
			imgData.set("image", file)
			dispatch(addProfileInfo(user?._id, imgData))
			setFile(null)
		} else if (file && user?.cloudinary_id) {
			imgData.set("image", file)
			dispatch(updateProfile(user?._id, imgData))
			setFile(null)
		} else {
			dispatch(updateProfile(user?._id, imgData))
		}
	}

	useEffect(() => {
		setEditProfile(false)
	}, [userMessage])

	return (
		<div className='profile-card-wrapper'>
			<div className='user-card'>
				<div className='left'>
					{editProfile ? (
						<div className='edit-img'>
							<label htmlFor='add-img' className={!user?.googleUser ? "edit-label" : ""}>
								{!user?.googleUser && <FcAddImage className='icon' />}
								<img
									src={file ? URL.createObjectURL(file) : user?.avatar}
									alt="user's uploaded avatar"
								/>
							</label>
							{!user?.googleUser && (
								<input
									type='file'
									style={{ display: "none" }}
									id='add-img'
									onChange={imgChange}
									accept='.jpg, .jpeg, .png'
								/>
							)}
						</div>
					) : (
						<img src={user?.avatar} alt={user?.name} />
					)}
					{!editProfile && (
						<h1>{makeUppercase(user?.name, 0) + " " + makeUppercase(user?.name, 1)}</h1>
					)}
				</div>
				<div className='right'>
					{!editProfile ? (
						<div className='top-btns'>
							<FollowingBtn />
							<FollowersBtn />
						</div>
					) : !user?.googleUser ? (
						<div className='edit-top'>
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
					) : null}
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
							<p>{user?.bio ? user?.bio : 'Click below to add your own bio here..."'}</p>
						</div>
					)}
					{currentUserId === user?._id ? (
						editProfile ? (
							<div className='edit-btns'>
								<button className='btn-medium' onClick={handleUpdate}>
									{userLoading ? <Spinner /> : <p>Update</p>}
								</button>
								<button
									className='btn-medium reverse-btn'
									onClick={() => setEditProfile(false)}>
									<p>Cancel</p>
								</button>
							</div>
						) : (
							<button
								className='btn-medium edit-profile-btn'
								onClick={() => setEditProfile(true)}>
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
		</div>
	)
}

export default UserCard

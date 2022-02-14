import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addProfileInfo, updateProfile } from "redux/actions/user"
import Spinner from "components/fragments/Spinner"
import Textarea from "components/fragments/Textarea"
//ICONS
import { FcAddImage } from "react-icons/fc"

export default function EditCard({ userLoading, user, setEditProfile }) {
	const dispatch = useDispatch()

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [content, setContent] = useState(user?.bio ? user?.bio : "")
	const [file, setFile] = useState(null)

	useEffect(() => {
		setFirstName(user?.name?.split(" ")[0])
		setLastName(user?.name.split(" ")[1])
	}, [user?.name])

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

	const inputs = [
		{
			name: "firstName",
			placeholder: "First name",
			value: firstName,
			onChange: (e) => setFirstName(e.target.value),
		},
		{
			name: "lastName",
			placeholder: "Last name",
			value: lastName,
			onChange: (e) => setLastName(e.target.value),
		},
	]

	return (
		<div className='profile-card-wrapper'>
			<div className='user-card'>
				<div className='left'>
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
				</div>
				<div className='right'>
					{!user?.googleUser && (
						<div className='edit-top'>
							{inputs.map((input) => (
								<div className='input-bar' key={input.name}>
									<input
										type='text'
										name={input.name}
										placeholder={input.placeholder}
										value={input.value}
										onChange={input.onChange}
									/>
								</div>
							))}
						</div>
					)}
					<Textarea
						content={content}
						setContent={setContent}
						customRows={4}
						name='bio'
						maxCh='220'
						className='bio-content'
					/>
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
				</div>
			</div>
		</div>
	)
}

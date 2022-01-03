import { useState, useEffect } from "react"
import { useHistory } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { signOut } from "redux/actions/auth"
import { changepass, deleteUser } from "redux/actions/user"
//COMPS
import SuccessMessage from "components/utility/SuccessMessage"
//ICONS
import { BsLock } from "react-icons/bs"
import { BiCheck } from "react-icons/bi"
import { IoIosArrowUp } from "react-icons/io"
import { RiDeleteBinLine } from "react-icons/ri"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import Spinner from "components/utility/Spinner"

const Settings = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const currentUser = JSON.parse(localStorage.getItem("User"))

	const { userLoading, userMessage } = useSelector((state) => state?.user)
	const { error } = useSelector((state) => state?.utility)
	const [changePassClicked, setChangePassClicked] = useState(false)
	const [deleteAccClicked, setDeleteAccClicked] = useState(false)
	const [showPass, setShowPass] = useState(false)

	const [formData, setFormData] = useState({
		password: "",
		confirmPassword: "",
	})

	const changeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const changePass = () => {
		dispatch(changepass(currentUser?._id, formData))
	}

	useEffect(() => {
		if (error !== (null || undefined)) return dispatch({ type: "CLEAR_USER_TAB" })

		return () => {
			dispatch({
				type: "CLEAR_USER_TAB",
			})
			dispatch({
				type: "CLEAR_ERROR",
			})
		}
	}, [error, dispatch])

	useEffect(() => {
		if (!userLoading && (userMessage !== null || undefined)) {
			setTimeout(() => {
				history.push("/home")
				dispatch({
					type: "CLEAR_USER_TAB",
				})
			}, 1500)
		}
	}, [userLoading, userMessage, history, dispatch])

	return (
		<div
			className='settings-page'
			style={
				(userLoading || userMessage) && {
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "75vh",
				}
			}>
			{!userLoading && (userMessage !== null || undefined) ? (
				<SuccessMessage style={{ marginTop: "40px" }} message={userMessage?.message} />
			) : (
				<>
					{!currentUser?.googleUser && (
						<div className='upper-container'>
							<button
								className='upper-btn'
								onClick={() => {
									setChangePassClicked(!changePassClicked)
									setDeleteAccClicked(false)
								}}>
								{changePassClicked ? (
									<IoIosArrowUp className='icon' />
								) : (
									<BsLock className='icon' />
								)}
								<h3>Change Password</h3>
							</button>
							{changePassClicked && (
								<div className='wrapper'>
									<p className='wrapper-info'>
										Your password must have a minimum of 8 characters, at least one
										uppercase letter, one lowercase letter and one number.
									</p>
									<div className='input-bar-icon'>
										<input
											type={showPass ? "text" : "password"}
											name='password'
											placeholder='Enter new password'
											onChange={changeHandler}
										/>
										{!showPass ? (
											<AiOutlineEye
												className='icon eye'
												onClick={() => setShowPass(!showPass)}
											/>
										) : (
											<AiOutlineEyeInvisible
												className='icon eye'
												onClick={() => setShowPass(!showPass)}
											/>
										)}
									</div>
									<div className='input-bar'>
										<input
											type={showPass ? "text" : "password"}
											name='confirmPassword'
											placeholder='Confirm new password'
											onChange={changeHandler}
										/>
									</div>
									<button className='btn-medium' onClick={changePass}>
										{userLoading && (userMessage === null || undefined) ? (
											<Spinner />
										) : (
											<p>Confirm</p>
										)}
									</button>
								</div>
							)}
						</div>
					)}
					<div className='bottom-container'>
						<button
							className='upper-btn'
							onClick={() => {
								setDeleteAccClicked(!deleteAccClicked)
								setChangePassClicked(false)
							}}>
							{deleteAccClicked ? (
								<IoIosArrowUp className='icon' />
							) : (
								<RiDeleteBinLine className='icon' />
							)}
							<h3>Delete Account</h3>
						</button>
						{deleteAccClicked && (
							<div className='wrapper'>
								<p className='wrapper-info'>
									Warning: Once your account is deleted, all your data will be lost.
								</p>
								<h3>Are you sure you want to delete your account?</h3>
								<div className='delete-btns'>
									<button
										className='btn-medium'
										onClick={() => {
											dispatch(deleteUser(currentUser?._id))
											setTimeout(() => {
												dispatch(signOut(history))
											}, 1000)
										}}>
										{userLoading && (userMessage === null || undefined) ? (
											<Spinner />
										) : (
											<>
												<p>Confirm</p>
												<BiCheck className='icon' />
											</>
										)}
									</button>
									<button
										className='btn-medium reverse-btn'
										onClick={() => history.push("/home")}>
										Cancel &amp; go back home
									</button>
								</div>
							</div>
						)}
					</div>
				</>
			)}
		</div>
	)
}

export default Settings

import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BsFillLockFill } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { resetPass } from "redux/actions/auth"

const ResetPass = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const [showPass, setShowPass] = useState(false)
	const [data, setData] = useState({
		password: "",
		confirmPassword: "",
	})

	const changeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const handleSubmit = () => {
		dispatch(
			resetPass(params?.resetToken, {
				password: data.password,
				confirmPassword: data.confirmPassword,
			})
		)
	}

	return (
		<div className='reset-pass-page'>
			<div className='input-bar-icon'>
				<BsFillLockFill className='icon' />
				<input
					type={showPass ? "text" : "password"}
					name='password'
					placeholder='Enter your password'
					onChange={changeHandler}
				/>
				{!showPass ? (
					<AiOutlineEye
						className='icon eye'
						onClick={() => setShowPass((prev) => !prev)}
					/>
				) : (
					<AiOutlineEyeInvisible
						className='icon eye'
						onClick={() => setShowPass((prev) => !prev)}
					/>
				)}
			</div>
			<div className='input-bar-icon'>
				<BsFillLockFill className='icon' />
				<input
					type={showPass ? "text" : "password"}
					name='confirmPassword'
					placeholder='Confirm your password'
					onChange={changeHandler}
				/>
			</div>
			<button className='btn-large' onClick={handleSubmit}>
				Confirm
			</button>
		</div>
	)
}

export default ResetPass

import { useState } from "react"
import logo from "images/logo.png"
//icons
import { BsFillLockFill } from "react-icons/bs"
import { IoMailOutline } from "react-icons/io5"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import Notify from "components/utility/Notify"

const Auth = () => {
	const [signIn, setSignIn] = useState(false)
	const [showPass, setShowPass] = useState(false)
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	})

	const switcher = () => {
		setSignIn(!signIn)
	}

	const changeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
		console.log(formData)
	}

	return (
		<div className='auth-page'>
			<Notify message='warning' />
			<img src={logo} alt='logo' className={signIn ? "custom-img" : ""} />
			<div className='credentials'>
				{!signIn && (
					<div className='input-bar'>
						<input
							type='text'
							name='firstName'
							placeholder='First name'
							onChange={changeHandler}
						/>
						<input
							type='text'
							name='lastName'
							placeholder='Last name'
							onChange={changeHandler}
						/>
					</div>
				)}
				<div className='input-bar-icon'>
					<IoMailOutline className='icon' />
					<input
						type='text'
						name='email'
						placeholder='Enter your email'
						onChange={changeHandler}
					/>
				</div>
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
							onClick={() => setShowPass(!showPass)}
						/>
					) : (
						<AiOutlineEyeInvisible
							className='icon eye'
							onClick={() => setShowPass(!showPass)}
						/>
					)}
				</div>
				{!signIn && (
					<div className='input-bar-icon'>
						<BsFillLockFill className='icon' />
						<input
							type='password'
							name='confirmPassword'
							placeholder='Confirm your password'
							onChange={changeHandler}
						/>
					</div>
				)}
			</div>
			<div className='actions'>
				<div className='btns'>
					<button className='btn-large'>Sign {signIn ? "in" : "up"}</button>
					<p className='or'>or</p>
					<button className='btn-google btn-large'>
						<FcGoogle className='icon' />
						<p>Sign {signIn ? "in" : "up"} with Google</p>
					</button>
				</div>
				<div className='bottom-actions'>
					<p>{signIn ? "Don't" : "Already"} have an account?</p>
					<button onClick={switcher}>Sign {!signIn ? "in" : "up"}</button>
				</div>
			</div>
		</div>
	)
}

export default Auth

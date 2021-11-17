import { useState } from "react"
import GoogleLogin from "react-google-login"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
//icons/assets
import logo from "images/logo.png"
import { BsFillLockFill } from "react-icons/bs"
import { IoMailOutline } from "react-icons/io5"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const Auth = () => {
	const dispatch = useDispatch()
	const history = useHistory()
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
		setShowPass(false)
	}

	const changeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
		console.log(formData)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const googleSucccess = async (res) => {
		const result = res?.profileObj
		const token = res?.tokenId

		try {
			dispatch({
				type: "SIGN_IN_SUCCESS",
				payload: { result, token },
			})

			history.push("/")
		} catch (err) {
			dispatch({
				type: "SIGN_IN_FAIL",
				payload: err,
			})
		}
	}
	const googleFailure = (err) => {
		console.log(`Error: ${err}`)
	}

	return (
		<form className='auth-page' onSubmit={(e) => e.preventDefault()}>
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
						type='email'
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
					<button className='btn-large' onClick={handleSubmit}>
						Sign {signIn ? "in" : "up"}
					</button>
					<p className='or'>or</p>
					<GoogleLogin
						// clientId={`${process.env.REACT_APP_CLIENT_ID}`}
						clientId='1062053880590-13hion9ui20mj647tsi5ntdsm2olspcm.apps.googleusercontent.com'
						render={(renderProps) => (
							<button
								className='btn-google btn-large'
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
							>
								<FcGoogle className='icon' />
								<p>Sign {signIn ? "in" : "up"} with Google</p>
							</button>
						)}
						onSuccess={googleSucccess}
						onFailure={googleFailure}
						cookiePolicy='single_host_origin'
					/>
				</div>
				<div className='bottom-actions'>
					<p>{signIn ? "Don't" : "Already"} have an account?</p>
					<button onClick={switcher}>Sign {!signIn ? "in" : "up"}</button>
				</div>
			</div>
		</form>
	)
}

export default Auth

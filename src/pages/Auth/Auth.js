import { useState } from "react"
import GoogleLogin from "react-google-login"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { googleAuth, signIn, signUp } from "redux/actions/auth"
import { useWindowSize } from "components/utility/useWindowSize"
//icons/assets
import logo from "images/logo.png"
import { BsFillLockFill } from "react-icons/bs"
import { IoMailOutline } from "react-icons/io5"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from "react-router-dom"

const Auth = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const [showSignin, setShowSignin] = useState(true)
	const [showPass, setShowPass] = useState(false)
	const [logoDisappear, setLogoDisappear] = useState(false)
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	})

	const switcher = () => {
		setShowSignin(!showSignin)
		setShowPass(false)
	}

	const changeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (showSignin) {
			dispatch(signIn(formData, history))
		} else {
			dispatch(signUp(formData, history))
		}
	}

	const googleSucccess = async (res) => {
		const result = res?.profileObj
		const token = res?.tokenId

		dispatch(googleAuth({ result, token }, history))
	}
	const googleFailure = (err) => {
		console.log(`Error: ${err}`)
	}

	const { width } = useWindowSize()

	const focus = () => {
		return width < 500 && setLogoDisappear(true)
	}
	const focusOut = () => {
		return width < 500 && setLogoDisappear(false)
	}

	return (
		<form
			autoComplete='off'
			className='auth-page'
			onSubmit={(e) => e.preventDefault()}
		>
			<img
				style={logoDisappear ? { opacity: "0" } : { opacity: "1" }}
				src={logo}
				alt='logo'
				className={showSignin ? "custom-img" : ""}
			/>
			<div
				className={`credentials ${!showSignin && "credentials-signup"} ${
					logoDisappear && "logo-dissappear"
				}`}
			>
				{!showSignin && (
					<div className='input-bar'>
						<input
							type='text'
							name='firstName'
							placeholder='First name'
							onChange={changeHandler}
							onFocus={focus}
							onBlur={focusOut}
						/>
						<input
							type='text'
							name='lastName'
							placeholder='Last name'
							onChange={changeHandler}
							onFocus={focus}
							onBlur={focusOut}
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
						onFocus={focus}
						onBlur={focusOut}
					/>
				</div>
				<div className='input-bar-icon'>
					<BsFillLockFill className='icon' />
					<input
						type={showPass ? "text" : "password"}
						name='password'
						placeholder='Enter your password'
						onChange={changeHandler}
						onFocus={focus}
						onBlur={focusOut}
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
				{showSignin && !logoDisappear && (
					<Link to='/forgotpassword' className='forgot-pass'>
						<h1>Forgot your password?</h1>
					</Link>
				)}
				{!showSignin && (
					<div className='input-bar-icon'>
						<BsFillLockFill className='icon' />
						<input
							type='password'
							name='confirmPassword'
							placeholder='Confirm your password'
							onChange={changeHandler}
							onFocus={focus}
							onBlur={focusOut}
						/>
					</div>
				)}
			</div>
			<div className='actions'>
				<div className='btns'>
					<button className='btn-large' onClick={handleSubmit}>
						Sign {showSignin ? "in" : "up"}
					</button>
					<p className='or'>or</p>
					<GoogleLogin
						clientId={`${process.env.REACT_APP_CLIENT_ID}`}
						render={(renderProps) => (
							<button
								className='btn-google btn-large'
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
							>
								<FcGoogle className='icon' />
								<p>Sign {showSignin ? "in" : "up"} with Google</p>
							</button>
						)}
						onSuccess={googleSucccess}
						onFailure={googleFailure}
						cookiePolicy='single_host_origin'
					/>
				</div>
				<div className='bottom-actions'>
					<p>{showSignin ? "Don't" : "Already"} have an account?</p>
					<button onClick={switcher}>Sign {!showSignin ? "in" : "up"}</button>
				</div>
			</div>
		</form>
	)
}

export default Auth

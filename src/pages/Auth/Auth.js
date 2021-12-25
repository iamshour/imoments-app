import { useEffect, useState } from "react"
import GoogleLogin from "react-google-login"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { googleAuth, signIn, signUp } from "redux/actions/auth"
//icons/assets
import { BsFillLockFill } from "react-icons/bs"
import { IoMailOutline } from "react-icons/io5"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from "react-router-dom"
import Spinner from "components/utility/Spinner"
import Person from "images/person.svg"
import { useWindowSize } from "components/utility/useWindowSize"

const Auth = () => {
	const dispatch = useDispatch()
	const { error } = useSelector((state) => state?.utility)
	const { width } = useWindowSize()

	const history = useHistory()
	const [showSignin, setShowSignin] = useState(true)
	const [showPass, setShowPass] = useState(false)
	const [showHeading, setShowHeading] = useState(true)
	const [actionLoading, setActionLoading] = useState(false)
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
		setActionLoading(true)

		if (showSignin) {
			dispatch(signIn(formData, history))
		} else {
			dispatch(signUp(formData, history))
		}
	}

	useEffect(() => {
		setActionLoading(false)
	}, [error])

	const googleSucccess = async (res) => {
		const result = res?.profileObj
		const token = res?.tokenId

		dispatch(googleAuth({ result, token }, history))
	}
	const googleFailure = (err) => {
		console.log(`Error: ${err}`)
		dispatch({
			type: "ERROR",
		})
	}
	const focus = () => {
		width < 550 && setShowHeading(false)
	}
	const blur = () => {
		width < 550 && setShowHeading(true)
	}

	return (
		<div className='auth-page'>
			<div className='auth-left'>
				<div className='logo-section'>
					<img
						src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1640456656/imoments-app/imoments-logo_fexvcu.png'
						alt='imoments app logo'
					/>
				</div>
				<div className='circles'>
					<div className='circle'>
						<img
							src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1640426375/imoments-app/share_zbplud.png'
							alt='share posts'
						/>
					</div>
					<div className='circle'>
						<img
							src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1640426377/imoments-app/update_dgg8zq.png'
							alt='update your profile'
						/>
					</div>
					<div className='circle'>
						<img
							src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1640426377/imoments-app/enjoy_xekcue.png'
							alt='enjoy our service!'
						/>
					</div>
				</div>
				<h1 className='slogan'>
					Share your thoughts <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enjoy
					your moment
				</h1>
			</div>
			<div className='person'>
				<img src={Person} alt='illustration of a person' />
			</div>
			<form id='formm' autoComplete='off' onSubmit={(e) => e.preventDefault()}>
				<div className='heading'>
					{showHeading && <h4>{showSignin ? "Welcome Back!" : "Get started!"}</h4>}
				</div>
				<div
					className={`credentials ${!showSignin && "credentials-signup"}`}
					style={
						!showHeading && !showSignin
							? { marginTop: "-3rem" }
							: !showHeading && showSignin
							? { marginTop: "-1rem" }
							: {}
					}>
					{!showSignin && (
						<div className='input-bar'>
							<input
								type='text'
								name='firstName'
								placeholder='First name'
								onChange={changeHandler}
								onFocus={focus}
								onBlur={blur}
							/>
							<input
								type='text'
								name='lastName'
								placeholder='Last name'
								onChange={changeHandler}
								onFocus={focus}
								onBlur={blur}
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
							onBlur={blur}
						/>
					</div>
					<div className={`input-bar-icon ${showSignin ? "pass-bar" : ""}`}>
						<BsFillLockFill className='icon' />
						<input
							type={showPass ? "text" : "password"}
							name='password'
							placeholder='Enter your password'
							onChange={changeHandler}
							onFocus={focus}
							onBlur={blur}
						/>
						{!showPass ? (
							<AiOutlineEye className='icon eye' onClick={() => setShowPass(!showPass)} />
						) : (
							<AiOutlineEyeInvisible
								className='icon eye'
								onClick={() => setShowPass(!showPass)}
							/>
						)}
					</div>
					{showSignin && (
						<Link to='/forgotpassword' className='forgot-pass'>
							<h1>Forgot your password?</h1>
						</Link>
					)}
					{!showSignin && (
						<div className='input-bar-icon'>
							<BsFillLockFill className='icon' />
							<input
								type={showPass ? "text" : "password"}
								name='confirmPassword'
								placeholder='Confirm your password'
								onChange={changeHandler}
								onFocus={focus}
								onBlur={blur}
							/>
						</div>
					)}
				</div>
				<div className='actions'>
					<div className='btns'>
						<button className='btn-large' onClick={handleSubmit}>
							{actionLoading ? <Spinner /> : <p>Sign {showSignin ? "in" : "up"}</p>}
						</button>
						<p className='or'>or</p>
						<GoogleLogin
							clientId={`${process.env.REACT_APP_CLIENT_ID}`}
							render={(renderProps) => (
								<button
									className='btn-google btn-large'
									onClick={renderProps.onClick}
									disabled={renderProps.disabled}>
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
		</div>
	)
}

export default Auth

import { useEffect, useState } from "react"
import GoogleLogin from "react-google-login"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { googleAuth, signIn, signUp } from "redux/actions/auth"
//icons/assets
import { BsFillLockFill } from "react-icons/bs"
import { IoMailOutline } from "react-icons/io5"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import Spinner from "components/fragments/Spinner"
import Person from "images/person.svg"
import GoogleIcon from "images/btn_google_light_normal_ios.svg"

const Auth = () => {
	const dispatch = useDispatch()
	const { error } = useSelector((state) => state?.utility)

	const history = useHistory()
	const [showSignin, setShowSignin] = useState(true)
	const [showPass, setShowPass] = useState(false)
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
	}

	const circles = [
		{
			src: "https://res.cloudinary.com/dniaqkd0y/image/upload/v1640426375/imoments-app/share_zbplud.png",
			alt: "Share posts",
		},
		{
			src: "https://res.cloudinary.com/dniaqkd0y/image/upload/v1640426377/imoments-app/update_dgg8zq.png",
			alt: "update your profile",
		},
		{
			src: "https://res.cloudinary.com/dniaqkd0y/image/upload/v1640426377/imoments-app/enjoy_xekcue.png",
			alt: "enjoy our service!",
		},
	]

	return (
		<div className='auth-page'>
			<div className='auth-left'>
				<div className='left-wrapper'>
					<div className='logo-section'>
						<img
							src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1640456656/imoments-app/imoments-logo_fexvcu.png'
							alt='imoments app logo'
						/>
					</div>
					<div className='circles'>
						{circles?.map((circle, index) => (
							<div className='circle' key={index}>
								<img src={circle?.src} alt={circle?.alt} />
							</div>
						))}
					</div>
					<h1 className='slogan'>
						Share your thoughts <br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enjoy
						your moment
					</h1>
				</div>
			</div>
			<div className='person'>
				<img src={Person} alt='illustration of a person' />
			</div>
			<div className='auth-right'>
				<form id='formm' autoComplete='off' onSubmit={(e) => e.preventDefault()}>
					<div className='heading'>
						<h4>{showSignin ? "Welcome Back!" : "Get started!"}</h4>
					</div>
					<div className={`credentials ${!showSignin && "credentials-signup"}`}>
						{!showSignin && (
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
						<div className={`input-bar-icon ${showSignin ? "pass-bar" : ""}`}>
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
										className='btn-google'
										onClick={renderProps.onClick}
										disabled={renderProps.disabled}>
										<img
											src={GoogleIcon}
											alt={`Sign ${showSignin ? "in" : "up"} with Google`}
											className='icon'
										/>
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
		</div>
	)
}

export default Auth

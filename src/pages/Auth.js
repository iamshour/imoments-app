import { useState } from "react"
import logo from "images/logo.png"
//icons
import { BiArrowBack } from "react-icons/bi"
import { BsFillLockFill } from "react-icons/bs"
import { IoMailOutline } from "react-icons/io5"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"

const Auth = () => {
	const [signIn, setSignIn] = useState(false)

	const switcher = () => {
		setSignIn(!signIn)
	}

	return (
		<div className='auth-page'>
			<Link to='/' className='back-btn'>
				<BiArrowBack className='icon' />
			</Link>
			<img src={logo} alt='logo' className={signIn ? "custom-img" : ""} />
			<div className='credentials'>
				{!signIn && (
					<div className='input-bar auth-bar'>
						<input type='text' name='firstName' placeholder='First name' />
						<input type='text' name='lastName' placeholder='Last name' />
					</div>
				)}
				<div className='input-bar-icon auth-bar-icon'>
					<IoMailOutline className='icon' />
					<input type='text' name='email' placeholder='Enter your email' />
				</div>
				<div className='input-bar-icon auth-bar-icon'>
					<BsFillLockFill className='icon' />
					<input
						type='password'
						name='password'
						placeholder='Enter your password'
					/>
				</div>
				{!signIn && (
					<div className='input-bar-icon auth-bar-icon'>
						<BsFillLockFill className='icon' />
						<input
							type='password'
							name='password'
							placeholder='Confirm your password'
						/>
					</div>
				)}
			</div>
			<div className='actions'>
				<div className='btns'>
					{signIn ? (
						<button className='btn-regular'>Sign in</button>
					) : (
						<button className='btn-regular'>Sign up</button>
					)}
					<p className='or'>or</p>
					{signIn ? (
						<button className='btn-google'>
							<FcGoogle className='icon' />
							<p>Sign in with Google</p>
						</button>
					) : (
						<button className='btn-google'>
							<FcGoogle className='icon' />
							<p>Sign up with Google</p>
						</button>
					)}
				</div>
				{signIn ? (
					<div className='bottom-actions'>
						<p>Don't have an account?</p>
						<button onClick={switcher}>Sign up</button>
					</div>
				) : (
					<div className='bottom-actions'>
						<p>Already have an account?</p>
						<button onClick={switcher}>Sign in</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default Auth

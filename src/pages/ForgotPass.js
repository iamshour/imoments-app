import { useState } from "react"
import { IoMailOutline } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { forgotPass } from "redux/actions/auth"

const ForgotPass = () => {
	const dispatch = useDispatch()
	const { notification } = useSelector((state) => state.auth)
	console.log(notification)
	const [email, setEmail] = useState(null)

	const handleSubmit = () => {
		dispatch(forgotPass({ email: email }))
	}

	return (
		<div className='reset-pass-page'>
			<div className='input-bar-icon'>
				<IoMailOutline className='icon' />
				<input
					type='email'
					name='email'
					placeholder='Enter your email'
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<button className='btn-large' onClick={handleSubmit}>
				Confirm
			</button>
		</div>
	)
}

export default ForgotPass

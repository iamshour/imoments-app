import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { forgotPass } from "redux/actions/auth"
//COMPS
import Loading from "components/utility/Loading"
import SuccessMessage from "components/utility/SuccessMessage"
//ICONS
import { IoMailOutline } from "react-icons/io5"

const ForgotPass = () => {
	const dispatch = useDispatch()
	const { notification, loading } = useSelector((state) => state.auth)
	console.log(notification)
	const [email, setEmail] = useState(null)

	const handleSubmit = () => {
		dispatch(forgotPass({ email: email }))
	}

	useEffect(() => {
		return () => {
			dispatch({
				type: "CLEAR_NOTIFICATION",
			})
		}
	}, [dispatch])

	return (
		<div className='forgot-pass-page'>
			{loading ? (
				<Loading />
			) : !loading && notification ? (
				<SuccessMessage message={notification?.message} />
			) : (
				<>
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
				</>
			)}
		</div>
	)
}

export default ForgotPass

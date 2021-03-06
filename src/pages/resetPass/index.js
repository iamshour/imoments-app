import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { resetPass } from "redux/actions/auth"
//COMPS
import Loading from "components/fragments/Loading"
import SuccessMessage from "components/fragments/SuccessMessage"
//ICONS
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BsFillLockFill } from "react-icons/bs"

const ResetPass = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const history = useHistory()
	const { notification, loading } = useSelector((state) => state.auth)
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
		setData("")
	}

	useEffect(() => {
		return () => {
			dispatch({
				type: "CLEAR_NOTIFICATION",
			})
		}
	}, [dispatch])

	return (
		<div className='reset-pass-page'>
			{loading ? (
				<Loading />
			) : !loading && notification ? (
				<>
					<SuccessMessage message={notification?.msg} />
					<button className='btn-large' onClick={() => history.push("/auth")}>
						Redirect to Login Page
					</button>
				</>
			) : (
				<>
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
				</>
			)}
		</div>
	)
}

export default ResetPass

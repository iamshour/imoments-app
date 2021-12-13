import { IoMailOutline } from "react-icons/io5"

const ResetPass = () => {
	return (
		<div className='reset-pass-page'>
			<div className='input-bar-icon'>
				<IoMailOutline className='icon' />
				<input
					type='email'
					name='email'
					placeholder='Enter your email'
					// onChange={changeHandler}
				/>
			</div>
			<button className='btn-large'>Confirm</button>
		</div>
	)
}

export default ResetPass

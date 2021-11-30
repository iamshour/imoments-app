import { BsCheck2Circle } from "react-icons/bs"

const SuccessMessage = ({ message }) => {
	return (
		<div className='conditional-container'>
			<BsCheck2Circle className='success-icon' />
			{/* <h3>{message}</h3> */}
			<h3>Post uploaded successfully!</h3>
		</div>
	)
}

export default SuccessMessage

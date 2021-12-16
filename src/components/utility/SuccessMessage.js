import { BsCheck2Circle } from "react-icons/bs"

const SuccessMessage = ({ message }) => {
	return (
		<div className='conditional-container'>
			<BsCheck2Circle className='success-icon' />
			<h1>{message}</h1>
		</div>
	)
}

export default SuccessMessage

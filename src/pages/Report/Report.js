import { useState } from "react"
import Textarea from "components/utility/Textarea"
import { AiOutlineSend } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { sendReport } from "redux/actions/user"

const Report = () => {
	const dispatch = useDispatch()
	const { userMessage } = useSelector((state) => state?.user)
	console.log(userMessage)

	const userId = JSON.parse(localStorage.getItem("userId"))?.id

	const [content, setContent] = useState("")
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		subject: "",
	})

	const changeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const submit = (e) => {
		e.preventDefault()
		dispatch(
			sendReport(userId, {
				firstName: formData?.firstName,
				lastName: formData?.lastName,
				subject: formData?.subject,
				message: content,
			})
		)
	}

	return (
		<div className='report-page'>
			<div className='wrapper'>
				<div className='top'>
					<p>Having a little trouble?</p>
					<h1>Get In Touch!</h1>
				</div>
				<form onSubmit={submit}>
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
					<div className='input-bar'>
						<input
							type='text'
							name='subject'
							placeholder='Subject'
							onChange={changeHandler}
						/>
					</div>
					<Textarea
						content={content}
						setContent={setContent}
						customRows={10}
						name='your message'
						maxCh='520'
					/>
					<button type='submit' className='btn-large'>
						<p>Send</p>
						<AiOutlineSend className='icon' />
					</button>
				</form>
			</div>
		</div>
	)
}

export default Report

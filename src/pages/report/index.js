import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { sendReport } from "redux/actions/user"
//COMPS
import Textarea from "components/fragments/Textarea"
import Spinner from "components/fragments/Spinner"
import SuccessMessage from "components/fragments/SuccessMessage"
//ICONS
import { AiOutlineSend } from "react-icons/ai"
import { nameInputs } from "components/utility"

const Report = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const { userMessage, userLoading } = useSelector((state) => state?.user)

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

	if (!userLoading && (userMessage !== null || undefined)) {
		setTimeout(() => {
			history.push("/home")
		}, 2400)
	}

	return (
		<div className='report-page'>
			{!userLoading && (userMessage !== null || undefined) ? (
				<SuccessMessage message={userMessage?.message} />
			) : (
				<div className='wrapper'>
					<div className='top'>
						<p>Having a little trouble?</p>
						<h1>Get In Touch!</h1>
					</div>
					<form onSubmit={submit} autoComplete='off'>
						<div className='input-bar'>
							{nameInputs.map((item, index) => (
								<input
									type='text'
									name={item.name}
									placeholder={item.placeholder}
									onChange={changeHandler}
									key={index}
								/>
							))}
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
							{userLoading ? (
								<Spinner />
							) : (
								<>
									<p>Send</p>
									<AiOutlineSend className='icon' />
								</>
							)}
						</button>
					</form>
				</div>
			)}
		</div>
	)
}

export default Report

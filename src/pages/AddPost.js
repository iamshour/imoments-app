import { useState } from "react"
import { FcAddImage } from "react-icons/fc"
import { IoMdCheckmarkCircleOutline, IoMdClose } from "react-icons/io"

const AddPost = () => {
	const [charCount, setCharCount] = useState(0)
	const [file, setFile] = useState()
	const [formData, setFormData] = useState({
		creator: "",
		caption: "",
		imgFile: "",
	})

	// const [message, setMessage] = useState("")

	const imgChange = (e) => {
		if (e.target.files[0]) {
			setFile(e.target.files[0])
			console.log(e.target.files[0])
		}
	}

	const addPost = async (e) => {
		e.preventDefault()
	}

	// const addPost = async (e) => {
	// 	const formData = new FormData()
	// 	formData.append("avatar", file)

	// 	try {
	// 		const res = await axios.post("/post", formData, {
	// 			headers: {
	// 				"Content-Type": "multipart/form-data",
	// 			},
	// 		})

	// 		const { avatar } = res.data
	// 	} catch (err) {
	// 		if (err.response.status === 500) {
	// 			setMessage("Theres a server issue")
	// 		} else {
	// 			setMessage(err.response.data.msg)
	// 		}
	// 	}
	// }

	return (
		<div className='addpost-page'>
			<form onSubmit={addPost}>
				{file ? (
					<div className='top top-img'>
						<div className='img-wrapper'>
							<img
								src={URL.createObjectURL(file)}
								alt="user's selection to upload"
							/>
							<button className='btn-icon' onClick={() => setFile()}>
								<IoMdClose className='icon' />
							</button>
						</div>
					</div>
				) : (
					<div className='top'>
						<div className='left'>
							<label htmlFor='add-img'>
								<FcAddImage className='icon' />
							</label>
							<input
								type='file'
								style={{ display: "none" }}
								id='add-img'
								onChange={imgChange}
								accept='.jpg, .jpeg, .png'
							/>
						</div>
						<div className='right'>
							<h3>Add Image</h3>
							<h2>(Optional)</h2>
						</div>
					</div>
				)}

				<div className='caption'>
					<h2 className='counter'>
						Characters count: {charCount}/320{" "}
						{charCount >= 320 && <span>Max Ch reached!</span>}
					</h2>
					<textarea
						name='caption'
						cols='30'
						rows='10'
						placeholder='Add caption here...'
						maxLength='320'
						value={formData.caption}
						onChange={(e) => {
							setCharCount(e.target.value.length)
							setFormData({ ...formData, caption: e.target.value })
						}}
					/>
				</div>
				<div className='input-bar tags'>
					<input type='text' placeholder='Add tags (optional)' />
				</div>
				<button className='btn-large'>
					<p>Post</p>
					<IoMdCheckmarkCircleOutline className='icon' />
				</button>
			</form>
		</div>
	)
}

export default AddPost

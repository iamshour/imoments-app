import { useState } from "react"
import { FcAddImage } from "react-icons/fc"
import { IoMdCheckmarkCircleOutline, IoIosRemoveCircle } from "react-icons/io"
import axios from "axios"

const AddPost = () => {
	const [charCount, setCharCount] = useState(0)
	const [file, setFile] = useState()
	const [formData, setFormData] = useState({
		creator: "",
		caption: "",
		imgFile: "",
	})

	const [message, setMessage] = useState("")

	const imgChange = (e) => {
		if (e.target.files[0]) {
			setFile(e.target.files[0])
			console.log(e.target.files[0])
		}
	}

	const addPost = async (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append("avatar", file)

		try {
			const res = await axios.post("/post", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})

			const { avatar } = res.data
		} catch (err) {
			if (err.response.status === 500) {
				setMessage("Theres a server issue")
			} else {
				setMessage(err.response.data.msg)
			}
		}
	}

	return (
		<div className='addpost-page'>
			<form onSubmit={addPost}>
				{file ? (
					<div className='top top-img'>
						<div className='img-wrapper'>
							<img src={URL.createObjectURL(file)} alt='image' />
							<button onClick={() => setFile()}>
								<IoIosRemoveCircle className='icon' />
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
							<h4>Add Images</h4>
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
				<button>
					<p>Post</p>
					<IoMdCheckmarkCircleOutline className='icon' />
				</button>
			</form>
		</div>
	)
}

export default AddPost

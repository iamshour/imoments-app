import Loading from "components/utility/Loading"
import { useRef } from "react"
import { useState } from "react"
import { FcAddImage } from "react-icons/fc"
import { IoMdCheckmarkCircleOutline, IoMdClose } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { CapUpload, ImgUpload } from "redux/actions/posts"

const AddPost = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const { success, loading } = useSelector((state) => state?.posts)
	console.log(loading)

	const [charCount, setCharCount] = useState(0)
	const [file, setFile] = useState()
	const captionRef = useRef()
	const user = JSON.parse(localStorage.getItem("User"))

	const imgChange = (e) => {
		if (e.target.files[0]) {
			setFile(e.target.files[0])
		}
	}

	const addPost = async (e) => {
		e.preventDefault()
		const creatorId = user?.user?._id
		const caption = captionRef.current.value

		if (file && !caption) {
			const imgData = new FormData()
			imgData.set("image", file)
			imgData.set("creatorId", creatorId)
			dispatch(ImgUpload(imgData))
		} else if (caption && !file) {
			dispatch(CapUpload({ creatorId, caption }))
		} else if (file && caption) {
			const imgData = new FormData()
			imgData.set("image", file)
			imgData.set("caption", caption)
			imgData.set("creatorId", creatorId)

			dispatch(ImgUpload(imgData))
		}
	}

	if (success) {
		setTimeout(() => {
			history.push("/")
			dispatch({
				type: "CLEAR_ADD_POST",
			})
		}, 3000)
	}

	return (
		<div className='addpost-page'>
			<form onSubmit={addPost}>
				{loading && success === null ? (
					<div>
						<Loading />
					</div>
				) : !loading && success !== null ? (
					<div>SUCCESSFULL</div>
				) : (
					<>
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
										value={file}
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
								ref={captionRef}
								onChange={(e) => {
									setCharCount(e.target.value.length)
								}}
							/>
						</div>
						<div className='input-bar tags'>
							<input type='text' placeholder='Add tags (optional)' />
						</div>
						<button className='btn-large' type='submit'>
							<p>Post</p>
							<IoMdCheckmarkCircleOutline className='icon' />
						</button>
					</>
				)}
			</form>
			)
		</div>
	)
}

export default AddPost

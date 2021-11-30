import Loading from "components/utility/Loading"
import SuccessMessage from "components/utility/SuccessMessage"
import Textarea from "components/utility/Textarea"
import { useEffect } from "react"
import { useState } from "react"
import { FcAddImage } from "react-icons/fc"
import { IoMdCheckmarkCircleOutline, IoMdClose } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { CapUpload, ImgUpload } from "redux/actions/posts"

const AddPost = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const { message, loading } = useSelector((state) => state?.utility)

	const [file, setFile] = useState()
	const [caption, setCaption] = useState("")
	const user = JSON.parse(localStorage.getItem("User"))?.user

	const imgChange = (e) => {
		if (e.target.files[0]) {
			setFile(e.target.files[0])
		}
	}

	const addPost = async (e) => {
		e.preventDefault()
		const creatorId = user?._id

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

	useEffect(() => {
		if (message) {
			setTimeout(() => {
				history.push("/")
				dispatch({
					type: "CLEAR_UTILITY",
				})
			}, 2000)
		}
	}, [message, dispatch, history])

	return (
		<div className='addpost-page'>
			{loading && (message === null || undefined) ? (
				<Loading />
			) : !loading && (message !== null || undefined) ? (
				<SuccessMessage message={message?.message} />
			) : (
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
					<Textarea
						content={caption}
						setContent={setCaption}
						customRows={10}
						name='caption'
						maxCh='320'
					/>
					<button className='btn-large' type='submit'>
						<p>Post</p>
						<IoMdCheckmarkCircleOutline className='icon' />
					</button>
				</form>
			)}
		</div>
	)
}

export default AddPost

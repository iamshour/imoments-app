import { useState, useEffect } from "react"
import { useHistory } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { CapUpload, ImgUpload } from "redux/actions/posts"
//COMPS
import Loading from "components/fragments/Loading"
import SuccessMessage from "components/fragments/SuccessMessage"
import Textarea from "components/fragments/Textarea"
//ICONS
import { FcAddImage } from "react-icons/fc"
import { IoMdCheckmarkCircleOutline, IoMdClose } from "react-icons/io"

const AddPost = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const { postMessage, postLoading } = useSelector((state) => state?.posts)

	const [file, setFile] = useState()
	const [caption, setCaption] = useState("")
	const creatorId = JSON.parse(localStorage.getItem("userId"))?.id

	const imgChange = (e) => {
		if (e.target.files[0]) {
			setFile(e.target.files[0])
		}
	}

	const addPost = async (e) => {
		e.preventDefault()

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
		if (postMessage) {
			setTimeout(() => {
				history.push("/home")
				dispatch({
					type: "CLEAR_ADD_POST",
				})
			}, 1500)
		}
	}, [postMessage, dispatch, history])

	return (
		<div className='addpost-page'>
			{postLoading && (postMessage === null || undefined) ? (
				<Loading />
			) : !postLoading && (postMessage !== null || undefined) ? (
				<SuccessMessage message={postMessage?.message} />
			) : (
				<form onSubmit={addPost}>
					{file ? (
						<div className='top top-img'>
							<div className='img-wrapper'>
								<img src={URL.createObjectURL(file)} alt="user's selection to upload" />
								<button className='btn-icon' onClick={() => setFile()}>
									<IoMdClose className='icon' />
								</button>
							</div>
						</div>
					) : (
						<div className='addpost-top'>
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
								<h1>Add Image</h1>
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

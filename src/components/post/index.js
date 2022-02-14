import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "api"
import { updatePost } from "redux/actions/posts"
import { closeModalBtn } from "components/utility"
//comps
import PostBottom from "./postBottom"
import PostTop from "./postTop"
import Textarea from "components/fragments/Textarea"
import Modal from "components/fragments/Modal"
//icons
import { IoMdClose } from "react-icons/io"

const Post = ({ creatorId, postId, img, caption, time, likes }) => {
	const location = useLocation()
	const dispatch = useDispatch()
	const [postCreator, setPostCreator] = useState(null)

	const [optionsClicked, setOptionsClicked] = useState(false)
	const [editClicked, setEditClicked] = useState(false)
	const [content, setContent] = useState(caption ? caption : null)

	const userId = JSON.parse(localStorage.getItem("userId"))?.id

	const [imgOpenned, setImgOpenned] = useState(false)
	const { userMessage } = useSelector((state) => state?.user)

	useEffect(() => {
		let isMounted = true

		const getPostCreator = async () => {
			const { data } = await getUser(creatorId)
			isMounted && setPostCreator(data)
		}
		getPostCreator()

		return () => {
			isMounted = false
		}
	}, [location, creatorId, userMessage])

	const handleUpdate = () => {
		dispatch(updatePost(postId, { caption: content, userId }))
	}

	return (
		<div className='card'>
			<PostTop
				avatar={postCreator?.avatar}
				creatorId={creatorId}
				postId={postId}
				name={postCreator?.name}
				time={time}
				optionsClicked={optionsClicked}
				setOptionsClicked={setOptionsClicked}
				setEditClicked={setEditClicked}
			/>
			{img && (
				<>
					<img
						className='img-unopened'
						src={img}
						alt='example'
						onClick={() => {
							setOptionsClicked(false)
							setImgOpenned(true)
						}}
					/>
					<Modal
						modalOpen={imgOpenned}
						setModalOpen={setImgOpenned}
						setExtraOption={setOptionsClicked}
						additionalClassName='modal-img'>
						<button
							className='btn-icon'
							onClick={() => {
								setImgOpenned(false)
								closeModalBtn()
							}}>
							<IoMdClose className='icon' />
						</button>
						<img src={img} alt='example' />
					</Modal>
				</>
			)}
			{editClicked ? (
				<>
					<Textarea
						content={content}
						setContent={setContent}
						customRows={4}
						name='caption'
						maxCh='320'
					/>
					<div className='edit-btns'>
						<button className='btn-medium' onClick={handleUpdate}>
							Update
						</button>
						<button
							onClick={() => setEditClicked(false)}
							className='btn-medium reverse-btn'>
							Cancel
						</button>
					</div>
				</>
			) : (
				<>
					{caption && <p className='caption'>{caption}</p>}
					<PostBottom
						likes={likes}
						comments={"29"}
						creatorId={creatorId}
						postId={postId}
					/>
				</>
			)}
		</div>
	)
}

export default Post

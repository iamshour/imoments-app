import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "api"
import { updatePost } from "redux/actions/posts"
//comps
import Socials from "./Socials/Socials"
import CardUpper from "./Card-upper/CardUpper"
import Textarea from "components/utility/Textarea"
//icons
import { IoMdClose } from "react-icons/io"
import Modal from "components/utility/Modal"
import { closeModalBtn, openModal } from "components/utility/utilis"

const Card = ({ creatorId, postId, img, caption, time, likes }) => {
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
		const getPostCreator = async () => {
			const { data } = await getUser(creatorId)
			setPostCreator(data)
		}
		getPostCreator()

		return () => {
			setPostCreator({})
		}
	}, [location, creatorId, userMessage])

	const handleUpdate = () => {
		dispatch(updatePost(postId, { caption: content, userId }))
	}

	return (
		<div className='card'>
			<CardUpper
				avatar={postCreator?.avatar}
				creatorId={creatorId}
				postId={postId}
				name={postCreator?.name}
				time={time}
				optionsClicked={optionsClicked}
				setOptionsClicked={setOptionsClicked}
				setEditClicked={setEditClicked}
			/>
			{imgOpenned && (
				<button
					className='btn-icon'
					onClick={() => {
						closeModalBtn(location)
						setImgOpenned(false)
					}}>
					<IoMdClose className='icon' />
				</button>
			)}
			{img && (
				<img
					className='img-unopened'
					src={img}
					alt='example'
					onClick={() => {
						openModal(location)
						setOptionsClicked(false)
						setImgOpenned(true)
					}}
				/>
			)}
			{img && imgOpenned && (
				<Modal
					setModalOpen={setImgOpenned}
					setExtraOption={setOptionsClicked}
					additionalClassName='modal-img'>
					<img src={img} alt='example' />
				</Modal>
			)}

			{editClicked ? (
				<Textarea
					content={content}
					setContent={setContent}
					customRows={4}
					name='caption'
					maxCh='320'
				/>
			) : caption ? (
				<p className='caption'>{caption}</p>
			) : null}
			{editClicked ? (
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
			) : (
				<Socials likes={likes} comments={"29"} creatorId={creatorId} postId={postId} />
			)}
		</div>
	)
}

export default Card

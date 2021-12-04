import { useState, useEffect } from "react"
import { useLocation } from "react-router"
//comps
import { getUser } from "api"
import Socials from "./Socials/Socials"
import CardUpper from "./Card-upper/CardUpper"
//icons
import { IoMdClose } from "react-icons/io"
import { presets } from "components/utility/utilis"
import Textarea from "components/utility/Textarea"
import { useDispatch } from "react-redux"
import { updatePost } from "redux/actions/posts"
import { useSelector } from "react-redux"

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

	const openImg = () => {
		setOptionsClicked(false)
		setImgOpenned(true)
		document.querySelector("html").style.overflowY = "hidden"
		document.querySelector("header").style.display = "none"
		location.pathname === "/" &&
			(document.querySelector("nav").style.display = "none")
	}

	const closeImg = (e) => {
		setImgOpenned(false)
		document.querySelector("header").style.display = "unset"
		document.querySelector("html").style.overflowY = "visible"
		location.pathname === "/" &&
			(document.querySelector("nav").style.display = "unset")
	}

	const handleUpdate = () => {
		dispatch(updatePost(postId, { caption: content, userId }))
	}

	return (
		<div className='card'>
			<CardUpper
				avatar={postCreator?.avatar ? postCreator?.avatar : presets.avatar}
				creatorId={creatorId}
				postId={postId}
				name={postCreator?.name}
				time={time}
				optionsClicked={optionsClicked}
				setOptionsClicked={setOptionsClicked}
				setEditClicked={setEditClicked}
			/>
			{imgOpenned && (
				<button className='btn-icon' onClick={closeImg}>
					<IoMdClose className='icon' />
				</button>
			)}
			{img && (
				<button
					className={`img-container ${imgOpenned && "img-openned"}`}
					onClick={openImg}
				>
					<img src={img} alt='example' />
				</button>
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
						className='btn-medium reverse-btn'
					>
						Cancel
					</button>
				</div>
			) : (
				<Socials
					likes={likes}
					comments={"29"}
					creatorId={creatorId}
					postId={postId}
				/>
			)}
		</div>
	)
}

export default Card

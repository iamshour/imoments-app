import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router"
import { useDispatch } from "react-redux"
import { deletePost } from "redux/actions/posts"
import { makeUppercase, closeModalBtn } from "components/utility/utilis"
import Moment from "react-moment"
//COMPS
import Dropdown from "./Dropdown"
import Modal from "components/utility/Modal"
//icons
import { IoMdClose } from "react-icons/io"
import { AiOutlineEllipsis } from "react-icons/ai"

const CardUpper = ({
	avatar,
	creatorId,
	postId,
	name,
	time,
	optionsClicked,
	setOptionsClicked,
	setEditClicked,
}) => {
	const location = useLocation()
	const dispatch = useDispatch()
	const currentUser = JSON.parse(localStorage.getItem("User"))
	const [bookmarkIncluded, setBookmarkIncluded] = useState(
		currentUser?.bookmarks?.includes(postId) ? true : false
	)
	const [bookmarkClicked, setbookmarkClicked] = useState(bookmarkIncluded)
	const [deleteClicked, setDeleteClicked] = useState(false)

	useEffect(() => {
		setBookmarkIncluded(currentUser?.bookmarks?.includes(postId) ? true : false)
	}, [currentUser?.bookmarks, location, postId])

	return (
		<div className='card-upper'>
			<Link to={`/profile/${creatorId}`} className='left'>
				<img src={avatar} alt={name} />
				<div className='info'>
					<h1 className='user-name'>
						{makeUppercase(name, 0) + " " + makeUppercase(name, 1)}
					</h1>
					<h2 className='user-time'>
						<Moment fromNow>{time}</Moment>
					</h2>
				</div>
			</Link>
			<button
				className='right'
				onClick={() => {
					setOptionsClicked(!optionsClicked)
					if (bookmarkClicked) {
						setbookmarkClicked(true)
						setBookmarkIncluded(true)
					} else {
						setbookmarkClicked(false)
						setBookmarkIncluded(false)
					}
				}}>
				{optionsClicked ? (
					<IoMdClose className='icon' />
				) : (
					<AiOutlineEllipsis className='icon' />
				)}
			</button>
			{optionsClicked && (
				<Dropdown
					postId={postId}
					creatorId={creatorId}
					setOptionsClicked={setOptionsClicked}
					setEditClicked={setEditClicked}
					bookmarkClicked={bookmarkClicked}
					bookmarkIncluded={bookmarkIncluded}
					setbookmarkClicked={setbookmarkClicked}
					setBookmarkIncluded={setBookmarkIncluded}
					setDeleteClicked={setDeleteClicked}
				/>
			)}
			{deleteClicked && (
				<Modal setModalOpen={setDeleteClicked} setExtraOption={setOptionsClicked}>
					<h3>Are you sure you want to delete this post?</h3>
					<div className='btns'>
						<button
							onClick={() => {
								dispatch(deletePost(postId))
								closeModalBtn(location)
								setDeleteClicked(false)
							}}
							className='btn-medium'>
							Yes, delete
						</button>
						<button
							className='btn-medium reverse-btn'
							onClick={() => {
								closeModalBtn(location)
								setDeleteClicked(false)
								setOptionsClicked(false)
							}}>
							Cancel &amp; go back
						</button>
					</div>
				</Modal>
			)}
		</div>
	)
}

export default CardUpper

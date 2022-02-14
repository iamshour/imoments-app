import { useState } from "react"
import { useLocation } from "react-router"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { bookmarkPost, deletePost } from "redux/actions/posts"
import { closeModalBtn } from "components/utility"
//COMPS
import Modal from "components/fragments/Modal"
//ICONS
import { BiEdit } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"
import { MdOutlineReportProblem } from "react-icons/md"

const Dropdown = ({
	creatorId,
	postId,
	setOptionsClicked,
	setEditClicked,
	bookmarkClicked,
	bookmarkIncluded,
	setBookmarkIncluded,
	setbookmarkClicked,
}) => {
	const dispatch = useDispatch()
	const history = useHistory()
	const location = useLocation()
	const currentUser = JSON.parse(localStorage.getItem("User"))

	const [deleteClicked, setDeleteClicked] = useState(false)

	const bookmarkHandler = () => {
		if (bookmarkIncluded) {
			setbookmarkClicked(false)
			setBookmarkIncluded(false)

			if (location.pathname === "/bookmarks") {
				dispatch({
					type: "NEW_POST_MESSAGE",
					data: "Removed from bookmarks successfully",
				})
			}
		} else {
			setbookmarkClicked(true)
			setBookmarkIncluded(true)
		}
		dispatch(bookmarkPost(postId, { userId: currentUser?._id }))
		setOptionsClicked(false)
	}

	const myPost = currentUser?._id === creatorId ? true : false

	const myPostBtns = [
		{
			handleClick: () => {
				setEditClicked(true)
				setOptionsClicked(false)
			},
			icon: <BiEdit className='icon' />,
			text: "Edit Post",
		},
		{
			handleClick: () => {
				setDeleteClicked(true)
			},
			icon: <IoMdClose className='icon' />,
			text: "Delete Post",
		},
	]

	const othersBtns = [
		{
			handleClick: bookmarkHandler,
			icon: bookmarkClicked ? (
				<BsBookmarkFill className='icon' />
			) : (
				<BsBookmark className='icon' />
			),
			text: "Bookmark",
		},
		{
			handleClick: () => {
				history.push("/report")
			},
			icon: <MdOutlineReportProblem className='icon' />,
			text: "Report",
		},
	]

	return (
		<div className='dropdown'>
			{myPost
				? myPostBtns.map((btn, index) => (
						<button key={index} onClick={btn.handleClick} className='dropdown-btn'>
							{btn.icon}
							<p>{btn.text}</p>
						</button>
				  ))
				: othersBtns.map((btn, index) => (
						<button key={index} onClick={btn.handleClick} className='dropdown-btn'>
							{btn.icon}
							<p>{btn.text}</p>
						</button>
				  ))}
			<Modal
				modalOpen={deleteClicked}
				setModalOpen={setDeleteClicked}
				setExtraOption={setOptionsClicked}>
				<h3>Are you sure you want to delete this post?</h3>
				<div className='btns'>
					<button
						onClick={() => {
							dispatch(deletePost(postId))
							setDeleteClicked(false)
							closeModalBtn()
						}}
						className='btn-large'>
						Yes, delete
					</button>
					<button
						className='btn-large reverse-btn'
						onClick={() => {
							setDeleteClicked(false)
							setOptionsClicked(false)
							closeModalBtn()
						}}>
						Cancel
					</button>
				</div>
			</Modal>
		</div>
	)
}

export default Dropdown

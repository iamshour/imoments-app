import { useState } from "react"
import { useLocation } from "react-router"
import { useDispatch } from "react-redux"
import { bookmarkPost, deletePost } from "redux/actions/posts"
//COMPS
import Modal from "components/utility/Modal"
import { closeModalBtn, openModal } from "components/utility/utilis"
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

	return (
		<div className='dropdown'>
			{currentUser?._id === creatorId ? (
				<>
					<button
						onClick={() => {
							setEditClicked(true)
							setOptionsClicked(false)
						}}
						className='dropdown-btn'
					>
						<BiEdit className='icon' />
						<p>Edit Post</p>
					</button>
					<button
						onClick={() => {
							setDeleteClicked(true)
							openModal(location)
						}}
						className='dropdown-btn'
					>
						<IoMdClose className='icon' />
						<p>Delete Post</p>
					</button>
					{deleteClicked && (
						<Modal
							setModalOpen={setDeleteClicked}
							setExtraOption={setOptionsClicked}
						>
							<h3>Are you sure you want to delete this post?</h3>
							<div className='btns'>
								<button
									onClick={() => {
										dispatch(deletePost(postId))
										closeModalBtn(location)
										setDeleteClicked(false)
									}}
									className='btn-medium'
								>
									Yes, delete
								</button>
								<button
									className='btn-medium reverse-btn'
									onClick={() => {
										closeModalBtn(location)
										setDeleteClicked(false)
										setOptionsClicked(false)
									}}
								>
									Cancel &amp; go back
								</button>
							</div>
						</Modal>
					)}
				</>
			) : (
				<>
					<button className='dropdown-btn' onClick={bookmarkHandler}>
						{bookmarkClicked ? (
							<BsBookmarkFill className='icon' />
						) : (
							<BsBookmark className='icon' />
						)}
						<p>Bookmark</p>
					</button>
					<button className='dropdown-btn'>
						<MdOutlineReportProblem className='icon' />
						<p>Report</p>
					</button>
				</>
			)}
		</div>
	)
}

export default Dropdown

import { useLocation } from "react-router"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { bookmarkPost } from "redux/actions/posts"
import { openModal } from "components/utility/utilis"
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
	setDeleteClicked,
}) => {
	const dispatch = useDispatch()
	const history = useHistory()
	const location = useLocation()
	const currentUser = JSON.parse(localStorage.getItem("User"))

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
						className='dropdown-btn'>
						<BiEdit className='icon' />
						<p>Edit Post</p>
					</button>
					<button
						onClick={() => {
							setDeleteClicked(true)
							openModal(location)
							setOptionsClicked(false)
						}}
						className='dropdown-btn'>
						<IoMdClose className='icon' />
						<p>Delete Post</p>
					</button>
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
					<button className='dropdown-btn' onClick={() => history.push("/report")}>
						<MdOutlineReportProblem className='icon' />
						<p>Report</p>
					</button>
				</>
			)}
		</div>
	)
}

export default Dropdown

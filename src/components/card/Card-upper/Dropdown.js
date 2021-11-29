import { BiEdit } from "react-icons/bi"
import { BsBookmark } from "react-icons/bs"
import { MdOutlineReportProblem } from "react-icons/md"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deletePost } from "redux/actions/posts"

const Dropdown = ({ creatorId, postId }) => {
	const dispatch = useDispatch()
	const currentUserId = JSON.parse(localStorage.getItem("User"))?.user?._id

	return (
		<div className='dropdown'>
			{currentUserId === creatorId ? (
				<>
					<button>
						<BiEdit className='icon' />
						<p>Edit Post</p>
					</button>
					<button onClick={() => dispatch(deletePost(postId))}>
						<BiEdit className='icon' />
						<p>Delete Post</p>
					</button>
				</>
			) : (
				<>
					<button>
						<BsBookmark className='icon' />
						<p>Bookmark</p>
					</button>
					<button>
						<MdOutlineReportProblem className='icon' />
						<p>Report</p>
					</button>
				</>
			)}
		</div>
	)
}

export default Dropdown

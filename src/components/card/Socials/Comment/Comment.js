import { Link } from "react-router-dom"
import Moment from "react-moment"
import { useEffect } from "react"
import { getUser } from "api"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { makeUppercase } from "components/utility/utilis"
import { BsTrash } from "react-icons/bs"
import { deleteComment } from "redux/actions/posts"

const Comment = ({ content, time, commentorId, commentId, postId }) => {
	const dispatch = useDispatch()
	const [user, setUser] = useState(null)
	const [deleteClicked, setDeleteClicked] = useState(false)

	const currentUserId = JSON.parse(localStorage.getItem("userId"))?.id

	useEffect(() => {
		const getCommentor = async () => {
			try {
				const { data } = await getUser(commentorId)
				setUser(data)
			} catch (error) {
				dispatch({
					type: "ERROR",
					payload: error.response.data.message,
				})
			}
		}
		getCommentor()
	}, [commentorId, content, dispatch])

	const handleDelete = () => {
		setDeleteClicked(true)
		dispatch(
			deleteComment(postId, {
				commentId: commentId,
			})
		)
	}

	return (
		<div className='comment'>
			{deleteClicked ? (
				<div className='delete-comment-wrapper'>
					<h1>Are You sure you want to delete this comment?</h1>
					<div className='delete-btns'>
						<button className='btn-medium' onClick={handleDelete}>
							Confirm
						</button>
						<button
							className='btn-medium reverse-btn'
							onClick={() => setDeleteClicked(false)}
						>
							Cancel
						</button>
					</div>
				</div>
			) : (
				<>
					<div className='left'>
						<Link to={`/profile/${commentorId}`}>
							<img src={user?.avatar} alt={user?.name} />
						</Link>
					</div>
					<div className='right'>
						<div className='top'>
							<div>
								<Link to={`/profile/${commentorId}`}>
									<h1>
										{makeUppercase(user?.name, 0) +
											" " +
											makeUppercase(user?.name, 1)}
									</h1>
								</Link>
								<h2>
									<Moment fromNow>{time}</Moment>
								</h2>
							</div>
							{currentUserId === commentorId && (
								<button
									onClick={() => setDeleteClicked(true)}
									className='delete-icon'
								>
									<BsTrash className='icon' />
								</button>
							)}
						</div>
						<div className='details'>
							<p>{content}</p>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default Comment

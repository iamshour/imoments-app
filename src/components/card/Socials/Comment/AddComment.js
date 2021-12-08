import Textarea from "components/utility/Textarea"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addComment } from "redux/actions/posts"

const AddComment = ({ postId, setcommentSubmitted }) => {
	const dispatch = useDispatch()
	const [comment, setComment] = useState("")
	const userId = JSON.parse(localStorage.getItem("userId"))?.id

	const handleSubmit = () => {
		dispatch(
			addComment(postId, {
				comment: comment,
				userId: userId,
			})
		)
		setComment("")
		setcommentSubmitted(true)
	}
	console.log(handleSubmit ? true : false)

	return (
		<div className='add-comment'>
			<div className='left'>
				<Link to='/user/..'>
					<img
						className='avatar'
						src='https://i.pravatar.cc/150?img=26'
						alt='user avatar'
					/>
				</Link>
			</div>
			<div className='right'>
				<Textarea
					content={comment}
					setContent={setComment}
					customRows={4}
					name='comment'
					maxCh='220'
					className='bio-content'
				/>
				<button className='btn-medium' onClick={handleSubmit}>
					<p>Add comment</p>
				</button>
			</div>
		</div>
	)
}

export default AddComment

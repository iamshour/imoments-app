import Textarea from "components/utility/Textarea"
import { presets } from "components/utility/utilis"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addComment } from "redux/actions/posts"

const AddComment = ({ postId }) => {
	const dispatch = useDispatch()
	const [comment, setComment] = useState("")
	const user = JSON.parse(localStorage.getItem("User"))

	const handleSubmit = () => {
		dispatch(
			addComment(postId, {
				comment: comment,
				userId: user._id,
			})
		)
		setComment("")
	}

	return (
		<div className='add-comment'>
			<div className='left'>
				<Link to='/user/..'>
					<img
						className='avatar'
						src={user?.avatar ? user?.avatar : presets?.avatar}
						alt={user?.name}
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

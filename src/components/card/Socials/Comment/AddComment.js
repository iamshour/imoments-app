import Spinner from "components/utility/Spinner"
import Textarea from "components/utility/Textarea"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addComment } from "redux/actions/posts"

const AddComment = ({ postId }) => {
	const dispatch = useDispatch()
	const { commentMsg } = useSelector((state) => state?.posts)
	const [comment, setComment] = useState("")
	const [addCmntLoading, setAddCmntLoading] = useState(false)
	const user = JSON.parse(localStorage.getItem("User"))

	const handleSubmit = () => {
		setAddCmntLoading(true)
		dispatch(
			addComment(postId, {
				comment: comment,
				userId: user._id,
			})
		)
		setComment("")
	}

	useEffect(() => {
		setAddCmntLoading(false)
	}, [commentMsg])

	return (
		<div className='add-comment'>
			<div className='left'>
				<Link to='/user/..'>
					<img className='avatar' src={user?.avatar} alt={user?.name} />
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
					{addCmntLoading ? <Spinner /> : <p>Add comment</p>}
				</button>
			</div>
		</div>
	)
}

export default AddComment

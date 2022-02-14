import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addComment } from "redux/actions/posts"
//COMPS
import Spinner from "components/fragments/Spinner"
import Textarea from "components/fragments/Textarea"

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

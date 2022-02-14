import { useState } from "react"
import { useDispatch } from "react-redux"
import { updatePost } from "redux/actions/posts"
import Textarea from "components/fragments/Textarea"

export default function EditPost({ caption, postId, setEditClicked }) {
	const dispatch = useDispatch()

	const [content, setContent] = useState(caption ? caption : "")

	const userId = JSON.parse(localStorage.getItem("userId"))?.id

	const handleUpdate = () => {
		dispatch(updatePost(postId, { caption: content, userId }))
	}

	return (
		<>
			<Textarea
				content={content}
				setContent={setContent}
				customRows={4}
				name='caption'
				maxCh='320'
			/>
			<div className='edit-btns'>
				<button className='btn-medium' onClick={handleUpdate}>
					Update
				</button>
				<button onClick={() => setEditClicked(false)} className='btn-medium reverse-btn'>
					Cancel
				</button>
			</div>
		</>
	)
}

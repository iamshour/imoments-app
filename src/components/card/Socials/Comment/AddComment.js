import { Link } from "react-router-dom"

const AddComment = () => {
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
				<textarea
					name='addcomment'
					// cols='30'
					rows='3'
					placeholder='Add a comment here'
				></textarea>
				<button className='btn-medium'>
					<p>Add comment</p>
				</button>
			</div>
		</div>
	)
}

export default AddComment

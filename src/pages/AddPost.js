import { FcAddImage } from "react-icons/fc"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const AddPost = () => {
	const addPost = (e) => {
		e.preventDefault()
	}

	return (
		<div className='addpost-page'>
			<form onSubmit={addPost}>
				<div className='top'>
					<div className='left'>
						<label htmlFor='add-img'>
							<FcAddImage className='icon' />
						</label>
						<input type='file' style={{ display: "none" }} id='add-img' />
					</div>
					<div className='right'>
						<h4>Add Images</h4>
						<h2>(Optional)</h2>
					</div>
				</div>
				<div className='caption'>
					<textarea
						name='caption'
						cols='30'
						rows='10'
						placeholder='Add caption here...'
					/>
				</div>
				<div className='tags'>
					<input type='text' placeholder='Add tags (optional)' />
				</div>
				<button>
					<p>Post</p>
					<IoMdCheckmarkCircleOutline className='icon' />
				</button>
			</form>
		</div>
	)
}

export default AddPost

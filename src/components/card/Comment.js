import { Link } from "react-router-dom"

const Comment = ({ cmnt, cmntName, cmntTime, cmntAvatar }) => {
	return (
		<div className='comment'>
			<div className='left'>
				<Link to='/'>
					<img src={cmntAvatar} alt={cmntName} />
				</Link>
			</div>
			<div className='right'>
				<div className='top'>
					<Link to='/'>
						<h1>{cmntName}</h1>
					</Link>
					<h2>{cmntTime}</h2>
				</div>
				<div className='details'>
					<p>{cmnt}</p>
				</div>
			</div>
		</div>
	)
}

export default Comment

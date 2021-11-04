const Comment = ({ cmnt, cmntName, cmntTime, cmntAvatar }) => {
	return (
		<div className='comment'>
			<div className='left'>
				<img src={cmntAvatar} alt={cmntName} />
			</div>
			<div className='right'>
				<div className='top'>
					<h1>{cmntName}</h1>
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

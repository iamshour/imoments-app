const UserCard = ({ name, avatar, nb }) => {
	return (
		<div className='user-card'>
			<div className='left'>
				<img src={avatar} alt={name} />
			</div>
			<div className='right'>
				<h1>{name}</h1>
				<p>{nb} total posts</p>
			</div>
		</div>
	)
}

export default UserCard

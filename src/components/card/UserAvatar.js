const UserAvatar = ({ name, time, imgUrl }) => {
	return (
		<div className='user-avatar-container'>
			<img src={imgUrl} alt={name} />
			<div className='info'>
				<h1>{name}</h1>
				<h2>{time}</h2>
			</div>
		</div>
	)
}

export default UserAvatar

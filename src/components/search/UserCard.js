import { CgArrowsExpandUpRight } from "react-icons/cg"

const UserCard = ({ avatar, name, nb }) => {
	return (
		<div className='user-card'>
			<div className='left'>
				<img src={avatar} alt={name} />
				<div className='info'>
					<h1>{name}</h1>
					<h2>{nb} total posts</h2>
				</div>
			</div>
			<div className='right'>
				<h2>
					view
					<br />
					profile
				</h2>
				<CgArrowsExpandUpRight className='icon' />
			</div>
		</div>
	)
}

export default UserCard

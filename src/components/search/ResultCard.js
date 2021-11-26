import FollowBtn from "components/utility/FollowBtn"
import { Link } from "react-router-dom"
//icons

const ResultCard = ({ userId, name, avatar }) => {
	const currentUserId = JSON.parse(localStorage.getItem("User"))?.user?._id

	return (
		<div className='result-card'>
			<Link className='bg' to={`/profile/${userId}`} />
			<div className='left'>
				<img src={avatar} alt={name} />
				<div className='info'>
					<h1>{name}</h1>
				</div>
			</div>
			<div className='right'>
				{userId !== currentUserId ? (
					// <FollowBtn userId={userId} currentUserId={currentUserId} />
					<div />
				) : (
					<Link to={`/profile/${currentUserId}`} className='btn-medium'>
						<p>View profile</p>
					</Link>
				)}
			</div>
		</div>
	)
}

export default ResultCard

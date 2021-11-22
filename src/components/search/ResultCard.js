import FollowBtn from "components/utility/FollowBtn"
import { Link } from "react-router-dom"
//icons

const ResultCard = ({ id, name, avatar }) => {
	const currentUser = JSON.parse(localStorage.getItem("User"))

	return (
		<div className='result-card'>
			<Link className='bg' to={`/profile/${id}`} />
			<div className='left'>
				<img src={avatar} alt={name} />
				<div className='info'>
					<h1>{name}</h1>
				</div>
			</div>
			<div className='right'>
				{id !== currentUser?.user?._id ? (
					<FollowBtn />
				) : (
					<Link
						to={`/profile/${currentUser?.user?._id}`}
						className='btn-medium'
					>
						<p>View profile</p>
					</Link>
				)}
			</div>
		</div>
	)
}

export default ResultCard

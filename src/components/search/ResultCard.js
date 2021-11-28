import { Link } from "react-router-dom"
//icons

const ResultCard = ({ userId, name, avatar }) => {
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
				<Link to={`/profile/${userId}`} className='btn-medium'>
					<p>View profile</p>
				</Link>
			</div>
		</div>
	)
}

export default ResultCard

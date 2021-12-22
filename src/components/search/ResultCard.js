import { makeUppercase } from "components/utility/utilis"
import { Link } from "react-router-dom"
//icons

const ResultCard = ({ userId, name, avatar }) => {
	const currentUserId = JSON.parse(localStorage.getItem("userId"))?.id

	return (
		<div className='result-card'>
			<Link className='bg' to={`/profile/${userId}`} />
			<div className='left'>
				<img src={avatar} alt={name} />
				<h1 className='user-name'>
					{makeUppercase(name, 0) + " " + makeUppercase(name, 1)}
				</h1>
			</div>
			<div className='right'>
				<Link to={`/profile/${userId}`} className='btn-medium'>
					<p>{currentUserId === userId ? "Edit" : "View"} profile</p>
				</Link>
			</div>
		</div>
	)
}

export default ResultCard

import { useState } from "react"
import { Link } from "react-router-dom"
//icons
import { FiUserPlus, FiUserCheck } from "react-icons/fi"

const ResultCard = ({ id, name, username, avatar }) => {
	const [followed, setFollowed] = useState(false)
	return (
		<div className='result-card'>
			<Link className='bg' to={`/user/${id}`} />
			<div className='left'>
				<img src={avatar} alt={name} />
				<div className='info'>
					<h1>{name}</h1>
					<h2>@{username}</h2>
				</div>
			</div>
			<div className='right'>
				<button
					className={`btn-medium ${followed && "following"}`}
					onClick={() => setFollowed(!followed)}
				>
					{!followed ? (
						<>
							<p>Follow</p>
							<FiUserPlus className='icon' />
						</>
					) : (
						<>
							<p>Following</p>
							<FiUserCheck className='icon' />
						</>
					)}
				</button>
			</div>
		</div>
	)
}

export default ResultCard

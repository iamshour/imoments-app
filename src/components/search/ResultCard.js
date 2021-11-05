import { CgArrowsExpandUpRight } from "react-icons/cg"
import { Link } from "react-router-dom"

const ResultCard = ({ avatar, name, nb, id }) => {
	return (
		<Link to={`/user/${id}`} className='result-card'>
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
		</Link>
	)
}

export default ResultCard

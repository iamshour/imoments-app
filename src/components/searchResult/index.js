import { closeModalBtn, makeUppercase } from "components/utility"
import { Link, useLocation } from "react-router-dom"

const SearchResult = ({ userId, name, avatar, setModalOpen }) => {
	const currentUserId = JSON.parse(localStorage.getItem("userId"))?.id
	const location = useLocation()

	const userCta = {
		link: `/profile/${userId}`,
		handleClick: () => {
			setModalOpen && setModalOpen(false)
			closeModalBtn(location)
		},
	}

	return (
		<div className='result-card'>
			<div className='result-card-left'>
				<Link to={userCta.link} onClick={userCta.handleClick}>
					<img src={avatar} alt={name} />
				</Link>
				<Link to={userCta.link} onClick={userCta.handleClick}>
					<h1 className='user-name'>
						{makeUppercase(name, 0) + " " + makeUppercase(name, 1)}
					</h1>
				</Link>
			</div>
			<div className='result-card-right'>
				<Link to={userCta.link} className='btn-medium' onClick={userCta.handleClick}>
					<p>{currentUserId === userId ? "Edit" : "View"} profile</p>
				</Link>
			</div>
		</div>
	)
}

export default SearchResult

import { closeModalBtn, makeUppercase } from "components/utility"
import { Link, useLocation } from "react-router-dom"
//icons

const SearchResult = ({ userId, name, avatar, setModalOpen }) => {
	const currentUserId = JSON.parse(localStorage.getItem("userId"))?.id
	const location = useLocation()

	return (
		<div className='result-card'>
			<div className='result-card-left'>
				<Link
					to={`/profile/${userId}`}
					onClick={() => {
						setModalOpen && setModalOpen(false)
						closeModalBtn(location)
					}}>
					<img src={avatar} alt={name} />
				</Link>
				<Link
					to={`/profile/${userId}`}
					onClick={() => {
						setModalOpen && setModalOpen(false)
						closeModalBtn(location)
					}}>
					<h1 className='user-name'>
						{makeUppercase(name, 0) + " " + makeUppercase(name, 1)}
					</h1>
				</Link>
			</div>
			<div className='result-card-right'>
				<Link
					to={`/profile/${userId}`}
					className='btn-medium'
					onClick={() => {
						setModalOpen && setModalOpen(false)
						closeModalBtn(location)
					}}>
					<p>{currentUserId === userId ? "Edit" : "View"} profile</p>
				</Link>
			</div>
		</div>
	)
}

export default SearchResult

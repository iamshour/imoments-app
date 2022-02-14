import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router"
import { getFollowers } from "redux/actions/user"
//COMPS
import SearchResult from "components/searchResult"
import Modal from "components/fragments/Modal"
//ICONS
import { FiUsers } from "react-icons/fi"

const FollowersBtn = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const location = useLocation()
	const { followers, userMessage } = useSelector((state) => state?.user)
	const [modalOpen, setModalOpen] = useState(false)

	useEffect(() => {
		dispatch(getFollowers(params?.id))
	}, [location, dispatch, params?.id, userMessage])

	return (
		<>
			<button onClick={() => followers?.length > 0 && setModalOpen(true)}>
				<FiUsers className='icon' />
				<p>
					{followers?.length === 0 ||
					followers?.length === null ||
					followers?.length === undefined
						? "0 Followers"
						: followers?.length === 1
						? "1 Follower"
						: followers?.length + " Followers"}
				</p>
			</button>
			<Modal
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				additionalClassName='follow-modal'>
				<h1 className='modal-title'>Followers</h1>
				{followers?.length > 0 &&
					followers?.map((user) => (
						<SearchResult
							key={user?._id}
							userId={user?._id}
							name={user?.name}
							avatar={user?.avatar}
							setModalOpen={setModalOpen}
						/>
					))}
			</Modal>
		</>
	)
}

export default FollowersBtn

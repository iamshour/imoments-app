import { useState, useEffect } from "react"
import { useLocation, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getFollowing } from "redux/actions/user"
import { openModal } from "components/utility/utilis"
//COMPS
import ResultCard from "components/search/ResultCard"
import Modal from "components/utility/Modal"
//ICONS
import { FiUserCheck } from "react-icons/fi"

const FollowingBtn = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const location = useLocation()
	const { following, userMessage } = useSelector((state) => state?.user)
	const [modalOpen, setModalOpen] = useState(false)

	useEffect(() => {
		dispatch(getFollowing(params?.id))
	}, [location, params?.id, dispatch, userMessage])

	return (
		<>
			<button
				onClick={() => {
					following?.length > 0 && openModal(location)
					following?.length > 0 && setModalOpen(true)
				}}>
				<FiUserCheck className='icon' />
				<p>
					{following?.length === 0 ||
					following?.length === null ||
					following?.length === undefined
						? "0 Followings"
						: following?.length === 1
						? "1 Following"
						: following?.length + " Followings"}
				</p>
			</button>
			<Modal
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				additionalClassName='follow-modal'>
				<h1 className='modal-title'>Followings</h1>
				{following?.length > 0 &&
					following?.map((user) => (
						<ResultCard
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

export default FollowingBtn

import { useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"
import { signOut } from "redux/actions/auth"
import { closeModalBtn, makeUppercase } from "components/utility"
//icons/assets
import Modal from "components/fragments/Modal"
import { BsBookmarks, BsInfoCircle } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import { AiOutlineCheck } from "react-icons/ai"
import { FiUser, FiSettings } from "react-icons/fi"
import { CgSupport } from "react-icons/cg"
import { IoLogOutOutline } from "react-icons/io5"

const LeftBar = ({ currentUser }) => {
	const history = useHistory()
	const dispatch = useDispatch()

	const [leftBarOpened, setLeftBarOpened] = useState(false)
	const [signOutModalOpened, setSignOutModalOpened] = useState(false)

	const links = [
		{
			destination: `/profile/${currentUser?._id}`,
			icon: <FiUser className='icon' />,
			title: "profile",
		},
		{
			destination: "/settings",
			icon: <FiSettings className='icon' />,
			title: "Account settings",
		},
		{
			destination: "/bookmarks",
			icon: <BsBookmarks className='icon' />,
			title: "Bookmarks",
		},
		{
			destination: "/report",
			icon: <CgSupport className='icon' />,
			title: "Report a problem",
		},
		{
			destination: "/about",
			icon: <BsInfoCircle className='icon' />,
			title: "About app",
		},
	]

	const closeBarBackdrop = (e) => {
		if (e.target.classList.contains("left-bar-active")) {
			setLeftBarOpened(false)
		}
	}

	return (
		<>
			<button className='avatar-wrapper' onClick={() => setLeftBarOpened(true)}>
				<img src={currentUser?.avatar} alt={currentUser?.name} />
			</button>
			<div
				className={`left-bar ${leftBarOpened ? "left-bar-active" : ""}`}
				onClick={closeBarBackdrop}>
				<div className='left-bar-container'>
					<div className='left-bar-upper'>
						<Link
							to={`/profile/${currentUser?._id}`}
							className='user-info'
							onClick={() => setLeftBarOpened(false)}>
							<img src={currentUser?.avatar} alt={currentUser?.name || "User avatar"} />
							<h1>
								{makeUppercase(currentUser?.name, 0) +
									" " +
									makeUppercase(currentUser?.name, 1)}
							</h1>
						</Link>
					</div>
					<div className='left-bar-links'>
						{links?.map((item) => {
							return (
								<Link
									to={item.destination}
									key={item.title}
									className='link-container'
									onClick={() => setLeftBarOpened(false)}>
									{item.icon}
									<h3>{item.title}</h3>
								</Link>
							)
						})}
						<button
							className='link-container'
							onClick={() => {
								setSignOutModalOpened(true)
								setLeftBarOpened(false)
							}}>
							<IoLogOutOutline className='icon' />
							<h3>Sign Out</h3>
						</button>
					</div>
					<div className='left-bar-bottom'>
						<img
							src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1640456656/imoments-app/imoments-logo_fexvcu.png'
							alt='imoments logo'
						/>
					</div>
				</div>
			</div>
			<Modal modalOpen={signOutModalOpened} setModalOpen={setSignOutModalOpened}>
				<h3>Are you sure you want to sign out?</h3>
				<div className='btns'>
					<button
						className='btn-large'
						onClick={() => {
							dispatch(signOut(history))
							setSignOutModalOpened(false)
							closeModalBtn()
						}}>
						<p>Sign Out</p>
						<AiOutlineCheck className='icon' />
					</button>
					<button
						onClick={() => {
							setSignOutModalOpened(false)
							closeModalBtn()
						}}
						className='btn-large reverse-btn'>
						<p>Cancel</p>
						<IoMdClose className='icon' />
					</button>
				</div>
			</Modal>
		</>
	)
}

export default LeftBar

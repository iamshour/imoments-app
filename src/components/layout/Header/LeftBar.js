import { useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"
import { signOut } from "redux/actions/auth"
import { presets } from "components/utility/utilis"
//icons/assets
import logo from "images/logo.png"
import { BsBookmarks, BsInfoCircle } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import { AiOutlineCheck } from "react-icons/ai"
import { FiUser, FiSettings } from "react-icons/fi"
import { CgSupport } from "react-icons/cg"
import { IoLogOutOutline } from "react-icons/io5"

const LeftBar = ({ currentUser }) => {
	const dispatch = useDispatch()
	const [leftBarOpened, setLeftBarOpened] = useState(false)
	const [modalOpened, setModalOpened] = useState(false)

	const history = useHistory()

	const openLeftBar = () => {
		setLeftBarOpened(true)
		document.documentElement.style.overflowY = "hidden"
		document.querySelector("nav").style.display = "none"
	}
	const closeLeftBar = (e) => {
		if (e.target.classList.contains("backdrop")) {
			setLeftBarOpened(false)
			document.querySelector("nav").style.display = "unset"
		}
		document.querySelector("html").style.overflowY = "visible"
	}
	const signOutModel = () => {
		setLeftBarOpened(false)
		setModalOpened(true)
		document.querySelector("nav").style.display = "hidden"
	}
	const signOutModelClose = (e) => {
		if (
			e.target.classList.contains("backdrop") ||
			e.target.classList.contains("close-modal")
		) {
			setLeftBarOpened(false)
			setModalOpened(false)
			document.querySelector("nav").style.display = "unset"
		}
	}
	const signOutBtnClose = (e) => {
		setLeftBarOpened(false)
		setModalOpened(false)
		document.querySelector("nav").style.display = "unset"
	}

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

	return (
		<>
			<button className='avatar-wrapper' onClick={openLeftBar}>
				<img
					src={currentUser?.avatar ? currentUser?.avatar : presets?.avatar}
					alt={currentUser?.name}
				/>
			</button>
			{leftBarOpened && (
				<div className='backdrop' onClick={closeLeftBar}>
					<div className='left-bar'>
						<div className='left-bar-upper'>
							<Link
								to={`/profile/${currentUser?._id}`}
								className='user-info'
								onClick={closeLeftBar}
							>
								<img
									src={
										currentUser?.avatar ? currentUser?.avatar : presets?.avatar
									}
									alt={currentUser?.name || "User avatar"}
								/>
								<h1>{currentUser?.name}</h1>
							</Link>
						</div>
						<div className='left-bar-links'>
							{links?.map((item) => {
								return (
									<Link
										to={item.destination}
										key={item.title}
										className='link-container'
										onClick={closeLeftBar}
									>
										{item.icon}
										<h3>{item.title}</h3>
									</Link>
								)
							})}
							<button className='link-container' onClick={signOutModel}>
								<IoLogOutOutline className='icon' />
								<h3>Sign Out</h3>
							</button>
						</div>
						<div className='left-bar-bottom'>
							<img src={logo} alt='imoments logo' />
						</div>
					</div>
				</div>
			)}
			{modalOpened && (
				<div className='backdrop' onClick={signOutModelClose}>
					<div className='signout-container'>
						<h3>Are you sure you want to sign out?</h3>
						<button
							className='btn-medium'
							onClick={() => dispatch(signOut(history))}
						>
							<p>Yes, Sign Out</p>
							<AiOutlineCheck className='icon' />
						</button>
						<button
							onClick={signOutBtnClose}
							className='btn-medium reverse-btn'
						>
							<p>Cancel</p>
							<IoMdClose className='icon' />
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default LeftBar

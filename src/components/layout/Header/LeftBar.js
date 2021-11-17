import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router"
//icons/assets
import logo from "images/logo.png"
import { BsBookmarks, BsInfoCircle, BsLock } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import { AiOutlineCheck } from "react-icons/ai"
import { FiUser } from "react-icons/fi"
import { CgSupport } from "react-icons/cg"
import { IoLogOutOutline } from "react-icons/io5"

const LeftBar = ({ user }) => {
	const [leftBarOpened, setLeftBarOpened] = useState(false)
	const [signOutClicked, setSignOutClicked] = useState(false)

	const location = useLocation()

	const userInfo = {
		name: "Ali Shour",
		username: "iamshour",
		avatar: "https://www.w3schools.com/howto/img_avatar.png",
	}

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
		setSignOutClicked(true)
		document.querySelector("nav").style.display = "hidden"
	}
	const signOutModelClose = (e) => {
		if (
			e.target.classList.contains("backdrop") ||
			e.target.classList.contains("close-modal")
		) {
			setLeftBarOpened(false)
			setSignOutClicked(false)
			document.querySelector("nav").style.display = "unset"
		}
	}
	const signOutBtnClose = (e) => {
		setLeftBarOpened(false)
		setSignOutClicked(false)
		document.querySelector("nav").style.display = "unset"
	}

	return (
		<>
			<button className='avatar-wrapper' onClick={openLeftBar}>
				<img src={user?.result?.imageUrl} alt={userInfo.name} />
			</button>
			{leftBarOpened && (
				<div className='backdrop' onClick={closeLeftBar}>
					<div className='left-bar'>
						<div className='left-bar-upper'>
							<Link
								to={`/profile/${user?.token}`}
								className='user-info'
								onClick={closeLeftBar}
							>
								<img src={user?.result?.imageUrl} alt={user?.result?.name} />
								<h1>{user?.result?.name}</h1>
								<h2>{userInfo.username}</h2>
							</Link>
						</div>
						<div className='left-bar-links'>
							<Link
								to={`/profile/${user?.token}`}
								className='link-container'
								onClick={closeLeftBar}
							>
								<FiUser className='icon' />
								<h3>Profile</h3>
							</Link>
							<Link
								to='/changepass'
								className='link-container'
								onClick={closeLeftBar}
							>
								<BsLock className='icon' />
								<h3>Change Password</h3>
							</Link>
							<Link
								to='/bookmarks'
								className='link-container'
								onClick={closeLeftBar}
							>
								<BsBookmarks className='icon' />
								<h3>Bookmarks</h3>
							</Link>
							<Link
								to='/report'
								className='link-container'
								onClick={closeLeftBar}
							>
								<CgSupport className='icon' />
								<h3>Report a problem</h3>
							</Link>
							<Link
								to='about'
								className='link-container'
								onClick={closeLeftBar}
							>
								<BsInfoCircle className='icon' />
								<h3>About app</h3>
							</Link>
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
			{signOutClicked && (
				<div className='backdrop' onClick={signOutModelClose}>
					<div className='signout-container'>
						<h3>Are you sure you want to sign out?</h3>
						<button onClick={signOutBtnClose} className='btn-large'>
							<p>Cancel</p>
							<IoMdClose className='icon' />
						</button>
						<button className='btn-large signout-btn'>
							<p>Yes, Sign Out</p>
							<AiOutlineCheck className='icon' />
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default LeftBar

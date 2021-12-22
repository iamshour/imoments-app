import { useLocation } from "react-router"

const Modal = ({ children, setModalOpen, setExtraOption, additionalClassName }) => {
	const location = useLocation()

	const closeModalBackdrop = (e) => {
		if (e.target.classList.contains("modal-backdrop")) {
			document.querySelector("html").style.overflowY = "unset"
			document.querySelector("header").style.display = "flex"
			setModalOpen(false)
			setExtraOption && setExtraOption(false)
			location.pathname === ("/" || "/search" || "/addPost" || "/notifications") &&
				(document.querySelector("nav").style.display = "unset")
		}
	}

	return (
		<div
			className={`modal-backdrop ${
				additionalClassName !== undefined || null ? additionalClassName : ""
			}`}
			onClick={closeModalBackdrop}>
			<div className='modal-container'>{children}</div>
		</div>
	)
}

export default Modal

import ReactDom from "react-dom"

const Modal = ({
	children,
	modalOpen,
	setModalOpen,
	setExtraOption,
	additionalClassName,
}) => {
	const closeModalBackdrop = (e) => {
		if (e.target.classList.contains("modal-backdrop")) {
			document.querySelector("html").style.overflowY = "unset"
			setModalOpen(false)
			setExtraOption && setExtraOption(false)
		}
	}

	if (modalOpen) {
		document.querySelector("html").style.overflowY = "hidden"
	} else {
		document.querySelector("html").style.overflowY = "unset"
		return null
	}

	return ReactDom.createPortal(
		<div
			className={`modal-backdrop ${
				additionalClassName !== undefined || null ? additionalClassName : ""
			}`}
			onClick={closeModalBackdrop}>
			<div className='modal-container'>{children}</div>
		</div>,
		document.getElementById("portal")
	)
}

export default Modal

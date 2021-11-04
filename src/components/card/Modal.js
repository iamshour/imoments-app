import Socials from "./Socials"
import Comment from "./Comment"
import UserAvatar from "./UserAvatar"
import { IoMdClose } from "react-icons/io"

const Modal = ({
	setModalOpened,
	name,
	time,
	imgUrl,
	cmnt,
	cmntName,
	cmntTime,
	cmntAvatar,
}) => {
	const closeModal = (e) => {
		if (e.target.classList.contains("backdrop")) {
			setModalOpened(false)
			document.querySelector("html").style.overflowY = "visible"
		}
	}

	return (
		<div className='backdrop' onClick={closeModal}>
			<div className='modal'>
				<div className='upper'>
					<UserAvatar name={name} time={time} imgUrl={imgUrl} />
					<button
						className='close-modal'
						onClick={() => {
							setModalOpened(false)
							document.querySelector("html").style.overflowY = "visible"
						}}
					>
						<IoMdClose className='icon' />
					</button>
				</div>
				<div className='img-container'>
					<img src={imgUrl} alt='test test' />
				</div>
				<Socials likes={"14"} comments={"29"} />
				<div className='comments-wrapper'>
					<Comment
						cmnt={cmnt}
						cmntName={cmntName}
						cmntTime={cmntTime}
						cmntAvatar={cmntAvatar}
					/>
					<Comment
						cmnt={cmnt}
						cmntName={cmntName}
						cmntTime={cmntTime}
						cmntAvatar={cmntAvatar}
					/>
					<Comment
						cmnt={cmnt}
						cmntName={cmntName}
						cmntTime={cmntTime}
						cmntAvatar={cmntAvatar}
					/>
				</div>
			</div>
		</div>
	)
}

export default Modal

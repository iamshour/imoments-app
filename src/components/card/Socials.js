import { useState } from "react"
import { AiOutlineLike } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"

const Socials = ({ likes, comments, openModal }) => {
	const [clicked, setClicked] = useState(false)
	return (
		<div className='socials-bar'>
			<button
				onClick={() => setClicked(!clicked)}
				className={clicked ? "clicked" : ""}
			>
				<div className='icon-wrapper'>
					<AiOutlineLike className='icon' />
				</div>
				<h2>{likes} likes</h2>
			</button>
			<button onClick={openModal}>
				<div className='icon-wrapper'>
					<FaRegComment className='icon' />
				</div>
				<h2>{comments} comments</h2>
			</button>
		</div>
	)
}

export default Socials

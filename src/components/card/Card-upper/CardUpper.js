import { Link } from "react-router-dom"
import Dropdown from "./Dropdown"
//icons
import { AiOutlineEllipsis } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"

const CardUpper = ({
	avatar,
	creatorId,
	postId,
	name,
	time,
	optionsClicked,
	setOptionsClicked,
}) => {
	return (
		<div className='card-upper'>
			<Link to={`/profile/${creatorId}`} className='left'>
				<img src={avatar} alt={name} />
				<div className='info'>
					<h1>{name}</h1>
					<h2>{time}</h2>
				</div>
			</Link>
			<button
				className='right'
				onClick={() => setOptionsClicked(!optionsClicked)}
			>
				{optionsClicked ? (
					<IoMdClose className='icon' />
				) : (
					<AiOutlineEllipsis className='icon' />
				)}
			</button>
			{optionsClicked && (
				<Dropdown
					postId={postId}
					creatorId={creatorId}
					setOptionsClicked={setOptionsClicked}
				/>
			)}
		</div>
	)
}

export default CardUpper

import { AiOutlineEllipsis } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { Link } from "react-router-dom"
import Dropdown from "./Dropdown"

const CardUpper = ({
	username,
	time,
	avatar,
	optionsClicked,
	setOptionsClicked,
	id,
}) => {
	return (
		<div className='card-upper'>
			<Link to={`/user/${id}`} className='left'>
				<img src={avatar} alt={username} />
				<div className='info'>
					<h1>{username}</h1>
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
			{optionsClicked && <Dropdown />}
		</div>
	)
}

export default CardUpper

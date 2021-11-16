import { AiOutlineEllipsis } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { Link } from "react-router-dom"
import Dropdown from "./Dropdown"

const CardUpper = ({
	name,
	time,
	profileAvatar,
	optionsClicked,
	setOptionsClicked,
}) => {
	return (
		<div className='card-upper'>
			<Link to='/' className='left'>
				<img src={profileAvatar} alt={name} />
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
			{optionsClicked && <Dropdown />}
		</div>
	)
}

export default CardUpper

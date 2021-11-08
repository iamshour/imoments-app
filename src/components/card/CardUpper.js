import { useState } from "react"
import { AiOutlineEllipsis } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import Dropdown from "./Dropdown"

const CardUpper = ({
	name,
	time,
	profileAvatar,
	modalOpened,
	optionsClicked,
	setOptionsClicked,
}) => {
	return (
		<div className={`upper ${modalOpened && "custom-upper"}`}>
			<div className='left'>
				<img src={profileAvatar} alt={name} />
				<div className='info'>
					<h1>{name}</h1>
					<h2>{time}</h2>
				</div>
			</div>
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

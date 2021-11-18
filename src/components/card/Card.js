import { useState } from "react"
//comps
import CardUpper from "./Card-upper/CardUpper"
import Socials from "./Socials/Socials"
//icons
import { IoMdClose } from "react-icons/io"

const Card = ({ id, name, avatar, img, caption, time }) => {
	const [optionsClicked, setOptionsClicked] = useState(false)
	const [imgOpenned, setImgOpenned] = useState(false)

	const openImg = () => {
		setOptionsClicked(false)
		setImgOpenned(true)
		document.documentElement.style.overflowY = "hidden"
		document.querySelector("nav").style.display = "none"
		document.querySelector("header").style.display = "none"
	}
	const closeImg = (e) => {
		setImgOpenned(false)
		document.querySelector("html").style.overflowY = "visible"
		document.querySelector("nav").style.display = "unset"
		document.querySelector("header").style.display = "unset"
	}

	return (
		<div className='card'>
			<CardUpper
				id={id}
				name={name}
				avatar={avatar}
				time={time}
				optionsClicked={optionsClicked}
				setOptionsClicked={setOptionsClicked}
			/>
			{imgOpenned && (
				<button className='btn-icon' onClick={closeImg}>
					<IoMdClose className='icon' />
				</button>
			)}
			{img && (
				<button
					className={`img-container ${imgOpenned && "img-openned"}`}
					onClick={openImg}
				>
					<img src={img} alt='example' />
				</button>
			)}
			{caption && <p className='caption'>{caption}</p>}
			<Socials likes={"14"} comments={"29"} />
		</div>
	)
}

export default Card

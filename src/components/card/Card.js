import { useState } from "react"
//comps
import CardUpper from "./CardUpper"
import Socials from "./Socials"
//icons
import { IoMdClose } from "react-icons/io"

const Card = () => {
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

	const customObj = {
		name: "Ali Shour",
		time: "10 mins ago",
		profileAvatar: "https://www.w3schools.com/howto/img_avatar.png",
		postImg:
			"https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320",
		caption:
			"Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
	}

	return (
		<div className='card'>
			<CardUpper
				name={customObj.name}
				time={customObj.time}
				profileAvatar={customObj.profileAvatar}
				optionsClicked={optionsClicked}
				setOptionsClicked={setOptionsClicked}
			/>
			{imgOpenned && (
				<button className='close-img' onClick={closeImg}>
					<IoMdClose className='icon' />
				</button>
			)}
			{customObj?.postImg && (
				<button
					className={`img-container ${imgOpenned && "img-openned"}`}
					onClick={openImg}
				>
					<img src={customObj.postImg} alt='example' />
				</button>
			)}
			{customObj?.caption && <p className='caption'>{customObj?.caption}</p>}
			<Socials likes={"14"} comments={"29"} />
		</div>
	)
}

export default Card

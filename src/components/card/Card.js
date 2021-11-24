import { useState, useEffect } from "react"
import { useLocation } from "react-router"
//comps
import CardUpper from "./Card-upper/CardUpper"
import Socials from "./Socials/Socials"
//icons
import { IoMdClose } from "react-icons/io"
import { presets } from "components/utility/utilis"
import { getUser } from "api"

const Card = ({ creatorId, img, caption, time }) => {
	const location = useLocation()
	const [postCreator, setPostCreator] = useState(null)

	const [optionsClicked, setOptionsClicked] = useState(false)
	const [imgOpenned, setImgOpenned] = useState(false)

	useEffect(() => {
		const customFunc = async () => {
			const { data } = await getUser(creatorId)
			setPostCreator(data)
		}
		customFunc()

		return () => {
			setPostCreator({})
		}
	}, [location])

	const openImg = () => {
		setOptionsClicked(false)
		setImgOpenned(true)
		document.querySelector("html").style.overflowY = "hidden"
		document.querySelector("header").style.display = "none"
		location.pathname === "/" &&
			(document.querySelector("nav").style.display = "none")
	}

	const closeImg = (e) => {
		setImgOpenned(false)
		document.querySelector("header").style.display = "unset"
		document.querySelector("html").style.overflowY = "visible"
		location.pathname === "/" &&
			(document.querySelector("nav").style.display = "unset")
	}

	return (
		<div className='card'>
			<CardUpper
				avatar={postCreator?.avatar ? postCreator?.avatar : presets.avatar}
				creatorId={creatorId}
				name={postCreator?.name}
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

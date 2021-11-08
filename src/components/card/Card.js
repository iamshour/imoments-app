import { useState } from "react"
//comps
import CardUpper from "./CardUpper"
import Socials from "./Socials"
import Comment from "./Comment"

const Card = () => {
	const [modalOpened, setModalOpened] = useState(false)
	const [optionsClicked, setOptionsClicked] = useState(false)

	const openModal = () => {
		setOptionsClicked(false)
		setModalOpened(true)
		document.documentElement.style.overflowY = "hidden"
		document.querySelector("nav").style.display = "none"
		document.querySelector("header").style.display = "none"
	}
	const closeModal = (e) => {
		if (e.target.classList.contains("backdrop")) {
			setOptionsClicked(false)
			setModalOpened(false)
			document.querySelector("html").style.overflowY = "visible"
			document.querySelector("nav").style.display = "unset"
			document.querySelector("header").style.display = "unset"
		}
	}

	const customObj = {
		name: "Ali Shour",
		time: "10 mins ago",
		profileAvatar: "https://www.w3schools.com/howto/img_avatar.png",
		postImg:
			"https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320",
	}
	const customCmnt = {
		cmnt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate molestias nisi voluptatibus ea? Vero, aliquam",
		cmntName: "Jade Loolo",
		cmntTime: "2 days ago",
		cmntAvatar: "https://www.w3schools.com/howto/img_avatar.png",
	}

	return (
		<div
			className={`card-wrapper ${modalOpened && "backdrop"}`}
			onClick={closeModal}
		>
			<div className={`card ${modalOpened && "modal"}`}>
				<CardUpper
					name={customObj.name}
					time={customObj.time}
					profileAvatar={customObj.profileAvatar}
					modalOpened={modalOpened}
					optionsClicked={optionsClicked}
					setOptionsClicked={setOptionsClicked}
				/>
				<button className='img-container' onClick={openModal}>
					<img src={customObj.postImg} alt='example' />
				</button>
				<Socials likes={"14"} comments={"29"} openModal={openModal} />
				{modalOpened && (
					<div className='comments-wrapper'>
						<Comment
							cmnt={customCmnt.cmnt}
							cmntName={customCmnt.cmntName}
							cmntTime={customCmnt.cmntTime}
							cmntAvatar={customCmnt.cmntAvatar}
						/>
						<Comment
							cmnt={customCmnt.cmnt}
							cmntName={customCmnt.cmntName}
							cmntTime={customCmnt.cmntTime}
							cmntAvatar={customCmnt.cmntAvatar}
						/>
						<Comment
							cmnt={customCmnt.cmnt}
							cmntName={customCmnt.cmntName}
							cmntTime={customCmnt.cmntTime}
							cmntAvatar={customCmnt.cmntAvatar}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default Card

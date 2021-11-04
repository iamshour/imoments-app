import { useState } from "react"
//comps
import UserAvatar from "./UserAvatar"
import Socials from "./Socials"
import Modal from "./Modal"
//icons
import { AiOutlineEllipsis } from "react-icons/ai"

const Card = () => {
	const [modalOpened, setModalOpened] = useState(false)

	const openModal = () => {
		setModalOpened(true)
		document.documentElement.style.overflowY = "hidden"
	}

	return (
		<>
			<div className='card'>
				<div className='upper'>
					<UserAvatar
						name={"Test Test"}
						time={"14 mins ago"}
						imgUrl={"https://www.w3schools.com/howto/img_avatar.png"}
					/>
					<button className='options'>
						<AiOutlineEllipsis className='icon' />
					</button>
				</div>
				<button className='img-container' onClick={openModal}>
					<img
						src='https://www.w3schools.com/howto/img_avatar.png'
						alt='test test'
					/>
				</button>
				<Socials likes={"14"} comments={"29"} openModal={openModal} />
			</div>
			{modalOpened && (
				<Modal
					setModalOpened={setModalOpened}
					name='Test Test'
					time={"14 mins ago"}
					imgUrl='https://www.w3schools.com/howto/img_avatar.png'
					cmnt='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate molestias nisi voluptatibus ea? Vero, aliquam'
					cmntName='Jade Loolo'
					cmntTime='2 days ago'
					cmntAvatar='https://www.w3schools.com/howto/img_avatar.png'
				/>
			)}
		</>
	)
}

export default Card

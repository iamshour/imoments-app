import UserAvatar from "./UserAvatar"
import { AiOutlineEllipsis } from "react-icons/ai"
import Socials from "./Socials"

const Card = () => {
	return (
		<div className='card'>
			<div className='upper'>
				<UserAvatar
					name={"test test"}
					time={"14 mins ago"}
					imgUrl={"https://www.w3schools.com/howto/img_avatar.png"}
				/>
				<button className='options'>
					<AiOutlineEllipsis className='icon' />
				</button>
			</div>
			<div className='img-container'>
				<img
					src='https://www.w3schools.com/howto/img_avatar.png'
					alt='test test'
				/>
			</div>
			<Socials likes={"14"} comments={"29"} />
		</div>
	)
}

export default Card

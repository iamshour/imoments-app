import { useState } from "react"
import { AiOutlineLike } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import Comment from "./Comment"

const Socials = ({ likes, comments }) => {
	const [clicked, setClicked] = useState(false)
	const [commentsClicked, setCommentsClicked] = useState(false)

	const customComments = [
		{
			cmnt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate molestias nisi voluptatibus ea? Vero, aliquam",
			cmntName: "Jade Loolo",
			cmntTime: "2 days ago",
			cmntAvatar: "https://www.w3schools.com/howto/img_avatar.png",
		},
		{
			cmnt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate molestias nisi voluptatibus ea? Vero, aliquam",
			cmntName: "Kaom Paol",
			cmntTime: "27 days ago",
			cmntAvatar: "https://www.w3schools.com/howto/img_avatar.png",
		},
		{
			cmnt: "Voluptate molestias nisi voluptatibus ea? Vero, aliquam",
			cmntName: "Kaom Paol",
			cmntTime: "27 days ago",
			cmntAvatar: "https://www.w3schools.com/howto/img_avatar.png",
		},
	]

	return (
		<div className='card-bottom'>
			<div className='socials-bar'>
				<button
					onClick={() => setClicked(!clicked)}
					className={clicked ? "clicked" : ""}
				>
					<div className='icon-wrapper'>
						<AiOutlineLike className='icon' />
					</div>
					<h2>{likes} likes</h2>
				</button>
				<button onClick={() => setCommentsClicked(true)}>
					<div className='icon-wrapper'>
						<FaRegComment className='icon' />
					</div>
					<h2>{comments} comments</h2>
				</button>
			</div>
			{commentsClicked && (
				<div className='comments-wrapper'>
					{customComments.map((comment) => (
						<Comment
							cmnt={comment.cmnt}
							cmntName={comment.cmntName}
							cmntTime={comment.cmntTime}
							cmntAvatar={comment.cmntAvatar}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default Socials

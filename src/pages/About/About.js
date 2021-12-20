import {
	AiOutlineLink,
	AiFillLinkedin,
	AiOutlineWhatsApp,
	AiOutlineMail,
} from "react-icons/ai"

const About = () => {
	return (
		<div className='about-page'>
			<div className='question'>
				<h1>What is this app about?</h1>
				<p>
					imoments is all abou sharing your favorite moments, stories, quotes,
					jokes, or anything on your mind to your followers to see and interact
					with.
				</p>
			</div>
			<div className='question'>
				<h1>Features</h1>
				<p>
					First of all, Users are able to register using their Google account or
					through their email. If a user forgets his/her account's password, it
					could be easily but securely recovered through an email sent to
					his/her account.
					<br />
					Aside from ability to share images or text posts, users can also like
					or comment on other users' posts, save posts into Bookmarks, delete an
					old post, and even update their own profile such as changing the
					avatar, bio, name, or the password. In addition to following other
					users and checking out their posts on the timeline!
				</p>
			</div>
			<div className='question'>
				<h1>About me</h1>
				<p>
					My name is Ali Shour, a web developer with UI desgin experience as
					well, currently working as a freelnacer. My focus is to help small
					businesses and start ups in enhancing their online presence with
					modern animated websites, landing pages, or bigger projects such
					e-commerce wqebapps. Read more about me and check out my latest
					projects by visiting my website below, or reach me out on my social
					media!
				</p>
			</div>
			<div className='bottom'>
				<a href='https://iamshour.com' rel='noreferrer' target='_blank'>
					<AiOutlineLink className='icon' />
				</a>
				<a
					href='https://www.linkedin.com/in/alishour/'
					rel='noreferrer'
					target='_blank'
				>
					<AiFillLinkedin className='icon' />
				</a>
				<a href='https://wa.me/96171230387' rel='noreferrer' target='_blank'>
					<AiOutlineWhatsApp className='icon' />
				</a>
				<a href='mailto:iamshour@outlook.com' rel='noreferrer' target='_blank'>
					<AiOutlineMail className='icon' />
				</a>
			</div>
		</div>
	)
}

export default About

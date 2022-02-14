import { Link } from "react-router-dom"
import GetStartedSvg from "components/fragments/getStartedSvg"
import { BsEmojiHeartEyes } from "react-icons/bs"

const GetStarted = () => {
	return (
		<div className='get-started-page'>
			<div className='wrapper'>
				<div className='welcome-container'>
					<GetStartedSvg />
				</div>
				<div className='info'>
					<div className='desc'>
						<h1>Welcome to imoments!</h1>
						<p>
							imoments is the place where you can share you favorite moments with your
							friends &amp; family!
						</p>
						<h2>Let's keep your moments alive!</h2>
					</div>
					<Link className='btn-large' to='/auth'>
						<p>Get Started</p>
						<BsEmojiHeartEyes className='icon' />
					</Link>
					<details>
						<summary>Disclaimer</summary>
						<p>
							Your name, email, and avatar will only be used to identify you &amp; your
							uploads from others. Its 100% secure, safe, and will never be exposed to any
							3rd party app without your consent. Read more{" "}
							<Link to='/privacy' className='link'>
								here
							</Link>
							.
						</p>
					</details>
					<div className='private-links'>
						<Link to='/privacy'>Privacy Policy</Link>
						<Link to='/terms'>Terms &amp; conditions</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GetStarted

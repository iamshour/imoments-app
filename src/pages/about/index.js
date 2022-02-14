import { myData } from "components/utility"
import { socials } from "components/utility/mySocials"

const About = () => {
	return (
		<div className='about-page'>
			<div className='container'>
				{myData.map((item, index) => (
					<div className='question' key={index}>
						<h1>{item.title}</h1>
						<p>{item.details}</p>
					</div>
				))}
				<div className='bottom'>
					{socials.map((account, index) => (
						<a href={account.link} rel='noreferrer' target='_blank' key={index}>
							{account.icon}
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default About

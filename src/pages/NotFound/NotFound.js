import { AiFillHome } from "react-icons/ai"
import { useHistory } from "react-router"

const NotFound = () => {
	const history = useHistory()
	return (
		<div className='not-found-page'>
			<h5>404 !</h5>
			<h3>Sorry, this page doesn't exist!</h3>
			<button className='btn-medium' onClick={() => history.push("/home")}>
				<p>Go Back home</p>
				<AiFillHome className='icon' />
			</button>
		</div>
	)
}

export default NotFound

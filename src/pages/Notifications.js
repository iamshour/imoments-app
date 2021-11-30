import Modal from "components/utility/Modal"
import { openModal } from "components/utility/utilis"
import { useState } from "react"
import { useLocation } from "react-router"

const Notifications = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const location = useLocation()

	const handleClick = () => {
		setModalOpen(true)
		openModal(location)
	}

	return (
		<div className='notifications-page'>
			<button className='example-btn' onClick={handleClick}>
				Open Example
			</button>
			{modalOpen && (
				<Modal setModalOpen={setModalOpen}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
						consequatur in veritatis iste rerum tempore voluptatum inventore
						iusto minima, dolorem voluptatem asperiores maxime porro placeat
						praesentium ea dignissimos excepturi at nemo, reiciendis officia
						similique aut ab? Blanditiis, cum fugiat! Amet ea, quae voluptates
						modi impedit sed ratione ab facilis similique magnam cum
						perferendis, ad veritatis animi!
					</p>
				</Modal>
			)}
		</div>
	)
}

export default Notifications

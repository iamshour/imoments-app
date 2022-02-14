import { useState } from "react"
import { closeModalBtn } from "components/utility"
import Modal from "components/fragments/Modal"
//icons
import { IoMdClose } from "react-icons/io"

export default function PostImg({ img, setOptionsClicked }) {
	const [imgOpenned, setImgOpenned] = useState(false)

	return (
		<>
			<img
				className='img-unopened'
				src={img}
				alt='example'
				onClick={() => {
					setOptionsClicked(false)
					setImgOpenned(true)
				}}
			/>
			<Modal
				modalOpen={imgOpenned}
				setModalOpen={setImgOpenned}
				setExtraOption={setOptionsClicked}
				additionalClassName='modal-img'>
				<button
					className='btn-icon'
					onClick={() => {
						setImgOpenned(false)
						closeModalBtn()
					}}>
					<IoMdClose className='icon' />
				</button>
				<img src={img} alt='example' />
			</Modal>
		</>
	)
}

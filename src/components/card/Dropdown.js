import { BiEdit } from "react-icons/bi"
import { BsBookmark } from "react-icons/bs"
import { MdOutlineReportProblem } from "react-icons/md"

const Dropdown = () => {
	return (
		<div className='dropdown'>
			<button>
				<BiEdit className='icon' />
				<p>Edit Post</p>
			</button>
			<button>
				<BsBookmark className='icon' />
				<p>Bookmark</p>
			</button>
			<button>
				<MdOutlineReportProblem className='icon' />
				<p>Report</p>
			</button>
		</div>
	)
}

export default Dropdown

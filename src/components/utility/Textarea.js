import { useState } from "react"

const Textarea = ({ content, setContent, customRows, name, maxCh }) => {
	const [charCount, setCharCount] = useState(0)

	return (
		<div className='textarea'>
			<h2 className='counter'>
				Characters count: {charCount}/{maxCh}{" "}
				{charCount >= maxCh && <span>Max Ch reached!</span>}
			</h2>
			<textarea
				name={name}
				cols='30'
				rows={customRows}
				placeholder={`Add ${name} here...`}
				maxLength={maxCh}
				value={content}
				onChange={(e) => {
					setCharCount(e.target.value.length)
					setContent(e.target.value)
				}}
			/>
		</div>
	)
}

export default Textarea

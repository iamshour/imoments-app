const Notify = ({ message, type }) => {
	return (
		<div className={`notify-container ${type}`}>
			<p>{message}</p>
		</div>
	)
}

export default Notify

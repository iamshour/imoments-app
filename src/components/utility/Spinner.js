const Spinner = () => {
	return (
		<div className='spinner-container'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 100 100'
				preserveAspectRatio='xMidYMid'>
				<circle
					cx='50'
					cy='50'
					fill='none'
					stroke='#38005a'
					strokeWidth='6'
					r='35'
					strokeDasharray='164.93361431346415 56.97787143782138'>
					<animateTransform
						attributeName='transform'
						type='rotate'
						repeatCount='indefinite'
						dur='1s'
						values='0 50 50;360 50 50'
						keyTimes='0;1'
					/>
				</circle>
			</svg>
		</div>
	)
}

export default Spinner

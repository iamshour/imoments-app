export const utility = (
	state = { notification: null, loading: false },
	{ type, payload }
) => {
	switch (type) {
		case "NOTIFICATION":
			return {
				...state,
				notification: payload,
			}
		case "LOADING_START":
			return {
				...state,
				loading: true,
			}
		case "LOADING_FINISH":
			return {
				...state,
				loading: false,
			}

		default:
			return state
	}
}

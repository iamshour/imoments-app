export const utility = (state = { error: null, loading: false }, action) => {
	switch (action.type) {
		case "ERROR":
			return {
				...state,
				error: action.payload,
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

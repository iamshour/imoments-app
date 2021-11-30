export const utility = (
	state = { error: null, loading: false, message: null },
	{ type, payload }
) => {
	switch (type) {
		case "ERROR":
			return {
				...state,
				error: payload,
			}

		case "LOADING_START":
			return {
				...state,
				loading: true,
			}

		case "LOADING_END":
			return {
				...state,
				loading: false,
			}

		case "NEW_MESSAGE":
			return {
				...state,
				message: payload,
			}

		case "CLEAR_UTILITY":
			return {
				error: null,
				message: null,
				loading: false,
			}

		default:
			return state
	}
}

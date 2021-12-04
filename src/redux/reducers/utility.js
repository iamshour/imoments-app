export const utility = (
	state = { error: null, message: null },
	{ type, payload }
) => {
	switch (type) {
		case "ERROR":
			return {
				...state,
				error: payload,
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
			}

		default:
			return state
	}
}

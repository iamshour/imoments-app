export const utility = (state = { error: null }, { type, payload }) => {
	switch (type) {
		case "ERROR":
			return {
				...state,
				error: payload,
			}

		case "CLEAR_ERROR":
			return {
				error: null,
			}

		default:
			return state
	}
}

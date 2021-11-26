export const utility = (state = { error: null }, { type, payload }) => {
	switch (type) {
		case "ERROR":
			return {
				...state,
				error: payload,
			}

		default:
			return state
	}
}

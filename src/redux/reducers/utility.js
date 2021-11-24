export const utility = (state = { notification: null }, { type, payload }) => {
	switch (type) {
		case "NOTIFICATION":
			return {
				...state,
				notification: payload,
			}

		default:
			return state
	}
}

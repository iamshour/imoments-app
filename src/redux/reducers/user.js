export const user = (
	state = { user: null, results: null, error: null },
	{ type, payload }
) => {
	switch (type) {
		case "GET_USER":
			return {
				...state,
				error: null,
				user: payload,
			}
		case "SEARCH_USER":
			return {
				...state,
				error: null,
				results: payload,
			}
		case "NO_RESULTS":
			return {
				...state,
				results: null,
				error: payload,
			}
		case "CLEAR_TAB":
			return {
				user: null,
				error: null,
			}

		default:
			return state
	}
}

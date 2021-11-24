export const user = (
	state = { user: null, results: null, error: null, loading: false },
	{ type, payload }
) => {
	switch (type) {
		case "GET_USER":
			return {
				...state,
				error: null,
				user: payload,
			}

		case "SEARCH_USER_LOADING":
			return {
				...state,
				loading: true,
			}

		case "SEARCH_USER":
			return {
				...state,
				error: null,
				results: payload,
				loading: false,
			}
		case "NO_RESULTS":
			return {
				...state,
				results: null,
				error: payload,
			}
		case "CLEAR_USER_TAB":
			return {
				user: null,
				error: null,
			}

		default:
			return state
	}
}

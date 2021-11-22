export const user = (
	state = { user: null, results: null, error: null },
	action
) => {
	switch (action.type) {
		case "GET_USER":
			return {
				...state,
				error: null,
				user: action.payload,
			}
		case "SEARCH_USER":
			return {
				...state,
				error: null,
				results: action.payload,
			}
		case "NO_RESULTS":
			return {
				...state,
				results: null,
				error: action.payload,
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

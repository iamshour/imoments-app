export const user = (
	state = {
		user: null,
		results: null,
		error: null,
		loading: false,
		message: null,
		followers: null,
		following: null,
	},
	{ type, payload }
) => {
	switch (type) {
		case "GET_USER":
			return {
				...state,
				user: payload,
			}

		case "GET_FOLLOWERS":
			return {
				...state,
				followers: payload,
			}

		case "GET_FOLLOWING":
			return {
				...state,
				following: payload,
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

		case "FOLLOW":
			return {
				...state,
				message: payload,
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
				results: null,
			}

		default:
			return state
	}
}

export const user = (
	state = {
		user: null,
		results: null,
		error: null,
		loading: false,
		followers: null,
		following: null,
		notifications: null,
		userLoading: false,
		userMessage: null,
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
		case "GET_NOTIFICATIONS":
			return {
				...state,
				notifications: payload,
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
		case "START_USER_LOADING":
			return {
				...state,
				userLoading: true,
			}
		case "END_USER_LOADING":
			return {
				...state,
				userLoading: false,
			}
		case "NEW_USER_MESSAGE":
			return {
				...state,
				userMessage: payload,
			}
		case "CLEAR_USER_TAB":
			return {
				user: null,
				followers: null,
				following: null,
				error: null,
				results: null,
				userLoading: null,
				userMessage: null,
				notifications: null,
			}

		default:
			return state
	}
}

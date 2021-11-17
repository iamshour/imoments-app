export const auth = (state = { authData: null }, action) => {
	switch (action.type) {
		case "SIGN_IN_SUCCESS":
			localStorage.setItem("User", JSON.stringify({ ...action?.payload }))
			return {
				...state,
				authData: action?.payload,
			}
		case "SIGN_IN_FAIL":
			return {
				...state,
				authData: action.payload,
			}

		default:
			return state
	}
}

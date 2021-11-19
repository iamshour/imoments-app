export const auth = (
	state = { authData: JSON.parse(localStorage.getItem("User")) || null },
	action
) => {
	switch (action.type) {
		case "AUTH_SUCCESS":
			localStorage.setItem("User", JSON.stringify({ ...action?.payload }))
			return {
				...state,
				authData: action?.payload,
			}
		case "AUTH_FAIL":
			return {
				...state,
				authData: action.payload,
			}
		case "SIGN_OUT":
			localStorage.removeItem("User")
			// localStorage.clear()
			return {
				authData: null,
			}

		default:
			return state
	}
}

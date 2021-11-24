export const auth = (
	state = { authData: JSON.parse(localStorage.getItem("User")) || null },
	{ type, payload }
) => {
	switch (type) {
		case "AUTH_SUCCESS":
			localStorage.setItem("User", JSON.stringify({ ...payload }))
			return {
				...state,
				authData: payload,
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

import * as api from "api/index"

export const signUp = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData)

		dispatch({
			type: "AUTH_SUCCESS",
			payload: data,
		})

		history.push("/home")
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const signIn = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData)

		dispatch({
			type: "AUTH_SUCCESS",
			payload: data,
		})

		history.push("/home")
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const googleAuth = (googleData, history) => async (dispatch) => {
	try {
		const { data } = await api.googleApi(googleData)

		dispatch({
			type: "AUTH_SUCCESS",
			payload: data,
		})

		history.push("/home")
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const signOut = (history) => (dispatch) => {
	try {
		dispatch({
			type: "SIGN_OUT",
		})
		dispatch({
			type: "RESET_APP",
		})

		history.push("/auth")
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const forgotPass = (email) => async (dispatch) => {
	try {
		dispatch({
			type: "AUTH_LOADING_START",
		})
		const { data } = await api.forgotPass(email)
		dispatch({
			type: "NOTIFICATION",
			payload: data,
		})
		dispatch({
			type: "AUTH_LOADING_END",
		})
	} catch (error) {
		dispatch({
			type: "AUTH_LOADING_END",
		})
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const resetPass = (link, userData) => async (dispatch) => {
	try {
		dispatch({
			type: "AUTH_LOADING_START",
		})
		const { data } = await api.resetPass(link, userData)
		dispatch({
			type: "NOTIFICATION",
			payload: data,
		})
		dispatch({
			type: "AUTH_LOADING_END",
		})
	} catch (error) {
		dispatch({
			type: "AUTH_LOADING_END",
		})
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

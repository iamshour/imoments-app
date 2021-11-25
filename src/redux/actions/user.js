import * as api from "api/index"

export const getSingleUser = (id) => async (dispatch) => {
	try {
		const { data } = await api.getUser(id)
		dispatch({
			type: "GET_USER",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "NOTIFICATION",
			payload: error.response.data.message,
		})
	}
}

export const getUserProfile = (userId) => async (dispatch) => {
	try {
		const { data } = await api.getProfile(userId)

		dispatch({
			type: "GET_USER_PROFILE",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const getCurrentUserProfile = (userId) => async (dispatch) => {
	try {
		const { data } = await api.getProfile(userId)

		dispatch({
			type: "GET_CURRENT_USER_PROFILE",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const searchUser = (searchTerm) => async (dispatch) => {
	try {
		const { data } = await api.searchUser(searchTerm)
		dispatch({
			type: "SEARCH_USER_LOADING",
		})
		dispatch({
			type: "SEARCH_USER",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "NO_RESULTS",
			payload: error.response.data.message,
		})
	}
}

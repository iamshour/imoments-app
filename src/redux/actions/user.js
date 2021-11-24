import * as api from "api/index"

export const getSingleUser = (id) => async (dispatch) => {
	try {
		dispatch({
			type: "CLEAR_TAB",
		})
		dispatch({
			type: "LOADING_START",
		})
		const { data } = await api.getUser(id)
		dispatch({
			type: "GET_USER",
			payload: data,
		})
		dispatch({
			type: "LOADING_FINISH",
		})
	} catch (error) {
		dispatch({
			type: "NOTIFICATION",
			payload: error.response.data.message,
		})
	}
}

export const searchUser = (searchTerm) => async (dispatch) => {
	try {
		const { data } = await api.searchUser(searchTerm)
		dispatch({
			type: "LOADING_START",
		})
		dispatch({
			type: "SEARCH_USER",
			payload: data,
		})
		dispatch({
			type: "LOADING_FINISH",
		})
	} catch (error) {
		dispatch({
			type: "NO_RESULTS",
			payload: error.response.data.message,
		})
	}
}

export const clearTab = (dispatch) => {
	dispatch({
		type: "CLEAR_TAB",
	})
}

import * as api from "api/index"

export const getSingleUser = (userId) => async (dispatch) => {
	try {
		const { data } = await api.getUser(userId)
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

export const followUnfollow = (userId, currentUserId) => async (dispatch) => {
	try {
		const { data } = await api.followUser(userId, {
			currentUserId: currentUserId,
		})
		dispatch({
			type: "FOLLOW",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const getFollowersAction = (userId) => async (dispatch) => {
	try {
		const { data } = await api.getFollowers(userId)
		dispatch({
			type: "GET_FOLLOWERS",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const getFollowing = (userId) => async (dispatch) => {
	try {
		const { data } = await api.getFollowers(userId)
		dispatch({
			type: "GET_FOLLOWING",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

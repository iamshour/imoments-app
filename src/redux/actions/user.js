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
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const getFollowers = (userId) => async (dispatch) => {
	try {
		const { data } = await api.getFollowers(userId)
		dispatch({
			type: "GET_FOLLOWERS",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const getFollowing = (userId) => async (dispatch) => {
	try {
		const { data } = await api.getFollowing(userId)

		dispatch({
			type: "GET_FOLLOWING",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const getNotifications = (userId) => async (dispatch) => {
	try {
		dispatch({
			type: "START_USER_LOADING",
		})
		const { data } = await api.getNotifications(userId)
		dispatch({
			type: "GET_NOTIFICATIONS",
			payload: data,
		})
		dispatch({
			type: "END_USER_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "END_USER_LOADING",
		})
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const clearNotifications = (userId) => async (dispatch) => {
	try {
		dispatch({
			type: "START_USER_LOADING",
		})
		const { data } = await api.clearNotifications(userId)
		dispatch({
			type: "NEW_USER_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "END_USER_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "END_USER_LOADING",
		})
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const clearSinleNotification =
	(userId, notificationId) => async (dispatch) => {
		try {
			dispatch({
				type: "START_USER_LOADING",
			})
			const { data } = await api.clearSinleNotification(userId, notificationId)
			dispatch({
				type: "NEW_USER_MESSAGE",
				payload: data,
			})
			dispatch({
				type: "END_USER_LOADING",
			})
		} catch (error) {
			dispatch({
				type: "END_USER_LOADING",
			})
			dispatch({
				type: "ERROR",
				payload: error?.response?.data?.message,
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
			payload: error?.response?.data?.message,
		})
	}
}

export const followUnfollow = (userId, currentUserId) => async (dispatch) => {
	try {
		const { data } = await api.followUser(userId, {
			currentUserId: currentUserId,
		})
		dispatch({
			type: "NEW_USER_MESSAGE",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const addProfileInfo = (userId, userData) => async (dispatch) => {
	try {
		dispatch({
			type: "START_USER_LOADING",
		})
		const { data } = await api.addProfileInfo(userId, userData)
		dispatch({
			type: "NEW_USER_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "END_USER_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "END_USER_LOADING",
		})
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const updateProfile = (userId, userData) => async (dispatch) => {
	try {
		dispatch({
			type: "START_USER_LOADING",
		})
		const { data } = await api.updateProfile(userId, userData)
		dispatch({
			type: "NEW_USER_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "END_USER_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "END_USER_LOADING",
		})
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const deleteUser = (userId) => async (dispatch) => {
	try {
		dispatch({
			type: "START_USER_LOADING",
		})
		const { data } = await api.deleteUser(userId)
		dispatch({
			type: "NEW_USER_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "END_USER_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "END_USER_LOADING",
		})
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

export const changepass = (userId, userData) => async (dispatch) => {
	try {
		dispatch({
			type: "START_USER_LOADING",
		})
		const { data } = await api.changepass(userId, userData)
		dispatch({
			type: "NEW_USER_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "END_USER_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "END_USER_LOADING",
		})
		dispatch({
			type: "ERROR",
			payload: error?.response?.data?.message,
		})
	}
}

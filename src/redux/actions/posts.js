import * as api from "api/index"

export const getTimeline = (userId) => async (dispatch) => {
	try {
		dispatch({
			type: "START_POST_LOADING",
		})
		const { data } = await api.getPosts(userId)
		dispatch({
			type: "GET_TIMELINE_POSTS",
			payload: data,
		})
		dispatch({
			type: "END_POST_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const getProfilePosts = (userId) => async (dispatch) => {
	try {
		dispatch({
			type: "START_POST_LOADING",
		})
		const { data } = await api.getProfilePosts(userId)
		dispatch({
			type: "GET_USER_POSTS",
			payload: data,
		})
		dispatch({
			type: "END_POST_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const getBookmarkedPosts = (userId) => async (dispatch) => {
	try {
		dispatch({
			type: "START_POST_LOADING",
		})
		const { data } = await api.getBookmarkedPosts(userId)
		dispatch({
			type: "GET_BOOKMARKED_POSTS",
			payload: data,
		})
		dispatch({
			type: "END_POST_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const ImgUpload = (imgData) => async (dispatch) => {
	try {
		dispatch({
			type: "START_POST_LOADING",
		})
		const { data } = await api.uploadImg(imgData)
		dispatch({
			type: "NEW_POST_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "END_POST_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}
export const CapUpload = (capData) => async (dispatch) => {
	try {
		dispatch({
			type: "START_POST_LOADING",
		})
		const { data } = await api.uploadCaption(capData)
		dispatch({
			type: "NEW_POST_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "END_POST_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const deletePost = (postId) => async (dispatch) => {
	try {
		dispatch({
			type: "START_POST_LOADING",
		})
		const { data } = await api.deletePost(postId)
		dispatch({
			type: "NEW_POST_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "END_POST_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const updatePost = (postId, postData) => async (dispatch) => {
	try {
		dispatch({
			type: "START_POST_LOADING",
		})
		const { data } = await api.updatePost(postId, postData)
		dispatch({
			type: "NEW_POST_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "END_POST_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const bookmarkPost = (postId, userId) => async (dispatch) => {
	try {
		await api.bookmarkPost(postId, userId)
		// const { data } = await api.bookmarkPost(postId, userId)
		// dispatch({
		// 	type: "NEW_POST_MESSAGE",
		// 	payload: data,
		// })
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const likePost = (postId, userId) => async (dispatch) => {
	try {
		await api.likePost(postId, userId)
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

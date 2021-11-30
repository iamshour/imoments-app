import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000" })

//AUTH
export const signUp = (data) => API.post("user/signup", data)
export const signIn = (data) => API.post("user/signin", data)
export const googleApi = (data) => API.post("user/googleauth", data)

//USERS
export const getUser = (userId) => API.get(`user/${userId}`)
export const getFollowers = (userId) => API.get(`user/${userId}/followers`)
export const getFollowing = (userId) => API.get(`user/${userId}/following`)
export const searchUser = (searchTerm) => API.get(`user?name=${searchTerm}`)
export const followUser = (userId, currentUserId) =>
	API.put(`user/${userId}/follow`, currentUserId, {
		"content-type": "application/json",
		method: "PUT",
	})

//POSTS
export const getProfilePosts = (userId) => API.get(`/posts/${userId}/profile`)
export const getPosts = (userId) => API.get(`/posts/timeline/${userId}`)
export const updatePost = (postId, postData) =>
	API.put(`/posts/${postId}/update`, postData)
export const likePost = (postId, userId) =>
	API.put(`/posts/${postId}/like`, userId)
export const deletePost = (postId) => API.delete(`/posts/${postId}/delete`)
export const uploadImg = (imgData) => API.post("/posts/uploadimg", imgData)
export const uploadCaption = (capData) =>
	API.post("/posts/uploadcaption", capData)

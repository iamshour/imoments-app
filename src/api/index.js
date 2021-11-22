import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000" })

//AUTH
export const signUp = (data) => API.post("user/signup", data)
export const signIn = (data) => API.post("user/signin", data)
export const googleApi = (data) => API.post("user/googleauth", data)

//USERS
export const getUser = (id) => API.get(`user/${id}`)
export const searchUser = (searchTerm) => API.get(`user?name=${searchTerm}`)

//POSTS
export const getPosts = (userId) => API.get(`/posts/timeline/${userId}`)
export const getUserPosts = (userId) => API.get(`/posts/${userId}`)
export const uploadImg = (imgData) => API.post("/posts/uploadimg", imgData)
export const uploadCaption = (capData) =>
	API.post("/posts/uploadcaption", capData)

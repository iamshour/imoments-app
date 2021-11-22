import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000" })

//AUTH
export const signUp = (data) => API.post("user/signup", data)
export const signIn = (data) => API.post("user/signin", data)
export const googleApi = (data) => API.post("user/googleauth", data)

//USERS
export const getUser = (id) => API.get(`user/${id}`)
export const searchUser = (searchTerm) => API.get(`user?name=${searchTerm}`)

export const fetchPosts = () => API.get("/posts")

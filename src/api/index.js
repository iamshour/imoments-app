import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000" })

API.interceptors.request.use((req) => {
	if (localStorage.getItem("User")) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem("User")).token
		}`
	}

	return req
})

//AUTH
export const signUp = (data) => API.post("user/signup", data)
export const signIn = (data) => API.post("user/signin", data)
export const googleApi = (data) => API.post("user/googleauth", data)

export const fetchPosts = () => API.get("/posts")

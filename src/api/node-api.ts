import axios from "axios"

export const nodeApi = axios.create({
    baseURL: import.meta.env.VITE_NODE_API,
})
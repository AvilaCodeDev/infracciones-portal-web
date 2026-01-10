import { nodeApi } from "@/api/node-api"
import type { Usuario } from "../interfaces";

const getUsers = async (token: string) => {
    try {
        const { data } = await nodeApi.get('/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;
    } catch (error) {
        console.log(error);
    }
}

const getUserRoles = async (token: string) => {
    try {
        const { data } = await nodeApi.get('/users/userRoles', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;
    } catch (error) {
        console.log(error)
    }
}

const addUser = async (usuario: Usuario, token: string) => {
    try {
        const { data } = await nodeApi.post('/users', usuario, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;
    } catch (error) {
        console.log(error);
        throw error; // Lanzar el error para que la mutación falle correctamente
    }
}

export {
    getUsers,
    getUserRoles,
    addUser
}
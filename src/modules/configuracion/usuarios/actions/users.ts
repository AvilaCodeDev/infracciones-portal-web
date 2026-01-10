import { nodeApi } from "@/api/node-api"

const getUsers = async ( token:string ) =>{
    try {
        const { data } = await nodeApi.get('/users',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return data;
    } catch (error) {
        console.log(error);
    }
}

const getUserRoles = async ( token: string ) => {
    try {
        const { data } = await nodeApi.get('/users/userRoles',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return data;
    } catch (error) {
        console.log( error )
    }
}

export { 
    getUsers,
    getUserRoles
}
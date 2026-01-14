import { nodeApi } from "@/api/node-api"

export const getInfraccionesPorPlaca = async (numero_placa: string, token: string) => {

    try {
        const response = await nodeApi.post('infracciones/infraccionesPorPlaca', { numero_placa }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }

}

export const getInfraccionById = async (id: number, token: string) => {
    try {
        const response = await nodeApi.post(`infracciones/getInfraccionById/`, { id }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log("action", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
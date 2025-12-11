import { nodeApi } from "@/api/node-api";
import type { LoginFormValues } from "../interfaces";

export const verficaIngreso = async (data: LoginFormValues) => {
    try {
        console.log(import.meta.env.VITE_NODE_API);
        return await nodeApi.post("/auth/login", data);
    } catch (error) {
        console.log(error);
    }
}
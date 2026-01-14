import { useUserStore } from "@/modules/auth/store/userStore";
import { useQuery } from "@tanstack/react-query";
import { getInfraccionById } from "../actions/infraccioines";

export const useInfraccionById = (id: number) => {
    const token = useUserStore(state => state.infoUsuario?.token);

    const { data, isLoading, error } = useQuery({
        queryKey: ['infraccion', id],
        queryFn: () => getInfraccionById(id, token!),
        enabled: !!token && id > 0,
    });

    return {
        data: data?.data,
        isLoading,
        error
    }
}

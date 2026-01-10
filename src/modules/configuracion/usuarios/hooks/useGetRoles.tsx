import { useUserStore } from "@/modules/auth/store/userStore";
import { useQuery } from "@tanstack/react-query";
import { getUserRoles } from "../actions/users";

export const useGetRoles = () => {

    const { infoUsuario } = useUserStore();

    const { isFetching, error, data } = useQuery({
        queryKey: ['roles'],
        queryFn: () => getUserRoles(infoUsuario?.token || ''),
        staleTime: 1000 * 60 * 60
    })

    return {
        isFetching,
        error,
        data
    }
}

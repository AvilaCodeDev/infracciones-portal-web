import { useUserStore } from "@/modules/auth/store/userStore"
import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../actions/users";
export const useGetUsuarios = () => {

    const { infoUsuario } = useUserStore();

    const { isLoading, error, data } = useQuery({
        queryKey: ['usuarios'],
        queryFn: () => getUsers( infoUsuario?.token || '' ),
        staleTime: 1000*60*60
    })    

    return{
        isLoading,
        error,
        data
    }

}

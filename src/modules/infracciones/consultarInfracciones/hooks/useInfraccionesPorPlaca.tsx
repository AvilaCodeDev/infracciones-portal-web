import { useQuery } from "@tanstack/react-query"
import { getInfraccionesPorPlaca } from "../actions/infraccioines"
import { useUserStore } from "@/modules/auth/store/userStore";

export const useInfraccionesPorPlaca = (numero_placa: string) => {
    const { infoUsuario } = useUserStore();
    const { data, isLoading, error } = useQuery({
        queryKey: ["infraccionesPorPlaca", numero_placa],
        queryFn: () => getInfraccionesPorPlaca(numero_placa, infoUsuario?.token || ''),
        enabled: numero_placa.length > 0
    })

    return { data: data?.data, isLoading, error }
}
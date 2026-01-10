import { useUserStore } from "@/modules/auth/store/userStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../actions/users";
import type { Usuario } from "../interfaces";


export const useAgregarUsuario = (onClose: () => void) => {

    const queryClient = useQueryClient();
    const { infoUsuario } = useUserStore();
    const mutation = useMutation({
        mutationFn: (usuario: Usuario) => {
            console.log('Ejecutando mutación con:', usuario);
            return addUser(usuario, infoUsuario?.token || '');
        },
        onSuccess: (data, variables, context) => {
            console.log('✅ Mutación exitosa!');
            console.log('Data recibida:', data);
            console.log('Variables:', variables);
            console.log('Context:', context);

            // Invalidar la query para que se vuelva a cargar desde el servidor
            queryClient.invalidateQueries({ queryKey: ['usuarios'] });

            console.log('Cerrando modal...');
            onClose();
        },
        onError: (error) => {
            console.error('❌ Error en la mutación:', error);
        }
    })

    return mutation
}
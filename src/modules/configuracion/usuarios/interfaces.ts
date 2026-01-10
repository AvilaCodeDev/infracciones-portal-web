export interface Usuario {
    id:              number;
    numero_empleado: number;
    nombre_completo: string;
    correo:          string;
    telefono:        null;
    rol:             string;
    password?: string
}
 export interface RolUsuario {
    id:          number;
    nombre:      string;
    descripcion: string;
}

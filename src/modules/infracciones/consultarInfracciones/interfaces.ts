export interface Infracciones {
    id: number;
    folio: string;
    placa: string;
    fecha: string;
    nombre_infractor: string;
}

export interface Evidencia {
    filename: string;
    url: string;
}

export interface InfraccionDetalle {
    id: number;
    folio: string;
    placa: string;
    descripcion: string;
    nombre_completo: string;
    numero_empleado: number;
    nombre: string;
    ocurrio_en: string;
    latitud: string;
    longitud: string;
    comentarios: string;
    nombre_infractor: string;
    estatus: string;
    evidencias: Evidencia[];
}

export interface LoginFormValues {
    correo: string;
    password: string;
}

export interface response {
    ok:       boolean;
    response: string | infoUsuario;
}

export interface infoUsuario {
    menu:           Menu[];
    correo:         string;
    idUsuario:      number;
    dependencia:    string;
    nombreCompleto: string;
    numeroEmpleado: number;
    token: string;
}

export interface Menu {
    submenus:   Submenu[];
    nombreMenu: string;
}

export interface Submenu {
    nombreSubmenu: string;
}
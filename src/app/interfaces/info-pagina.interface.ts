export interface InfoPagina {
    titulo?: string; //el signo de interrogacion es para indicar que puede ser que venga o puede ser que no, si no lo ponemos, tendría que llevar esa info obligatoriamente
    email?: string;
    nombre_corto?: string;
    pagina_autor?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    tumblr?: string;
    equipo?: any[];
}
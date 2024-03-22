import { Autor } from "./Autor";


export interface Libro {
    titulo: string;
    libro: Autor;
    obtenerResumen():string;
}


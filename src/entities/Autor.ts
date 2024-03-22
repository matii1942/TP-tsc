import { Persona } from "./Persona";

export class Autor implements Persona{
    nombre: string;
    apellido: string;
    año: number;
    constructor(nombre: string, apellido: string, año: number){
        this.nombre = nombre
        this.apellido = apellido
        this.año = año
    }
}
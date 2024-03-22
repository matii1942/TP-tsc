import {Autor} from "./entities/Autor"
import { Biblioteca } from "./entities/Biblioteca"
import { LibroImpreso } from "./entities/LibroImpreso"

const Tolkien = new Autor("Jrr", "Tolkien", 1954)
const JK = new Autor ("JK", "Rowling", 1997)
const Clive = new Autor ("Clive", "Baker", 1986)
const Stephen = new Autor ("Stephen", "King", 1983)
const Nicolas = new Autor ("Nicolas", "Maquiavelo", 1513)
const Aldous = new Autor ("Aldous", "Huxley", 1932 )


const libro1 = new LibroImpreso("El señor de los anillos", Tolkien)
const libro2 = new LibroImpreso ("Harry Potter", JK)
const libro3 = new LibroImpreso ("Hellraiser", Clive)
const libro4 = new LibroImpreso ("Pet Sementary", Stephen)
const libro5 = new LibroImpreso ("El Principe", Nicolas)
const libro6 = new LibroImpreso ("Un Mundo Feliz", Aldous)



const biblioteca : Biblioteca = new Biblioteca ()
biblioteca.agregarLibro(libro1)
biblioteca.agregarLibro(libro2)
biblioteca.agregarLibro(libro3)
biblioteca.agregarLibro(libro4)
biblioteca.agregarLibro(libro5)
biblioteca.agregarLibro(libro6)

biblioteca.mostrarCatalogo()
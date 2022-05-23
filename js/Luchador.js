import { Personaje } from './Personaje.js';

export class Luchador extends Personaje {
    constructor(nombre, familia, edad, estado, arma, destreza) {
        super(nombre, familia, edad, estado);
        this.arma = arma;
        this.destreza = destreza;
    }

    comunication = 'Primero pego y luego pregunto';
}

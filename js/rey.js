import { Personaje } from './Personaje.js';

export class Rey extends Personaje {
    constructor(nombre, familia, edad, estado, añosReinado) {
        super(nombre, familia, edad, estado);
        this.añosDeReinado = añosReinado;
    }
    comunication = 'Vais a morir todos';
}

import { Personaje } from './Personaje.js';
export class Escudero extends Personaje {
    constructor(nombre, familia, edad, estado, personajeAlQueSirve, pelotismo) {
        super(nombre, familia, edad, estado);
        this.personajeAlQueSirve = personajeAlQueSirve;
        this.pelotismo = pelotismo;
    }

    comunication = 'Soy un loser';
}

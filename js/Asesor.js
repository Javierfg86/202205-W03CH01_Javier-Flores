import { Personaje } from './Personaje.js';

export class Asesor extends Personaje {
    constructor(nombre, familia, edad, estado, personajeAlQueAsesora) {
        super(nombre, familia, edad, estado);
        this.personajeAlQueAsesora = personajeAlQueAsesora;
    }

    comunication = 'No sé por qué, pero creo que voy a morir pronto';
}

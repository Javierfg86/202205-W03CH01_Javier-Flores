import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';
import { Luchador } from './Luchador.js';
import { Rey } from './rey.js';

const joffrey = new Rey('Joffrey Baratheon', 'Lannister', '12', 'Vivo', '1');
const jaime = new Luchador(
    'Jaime Lannister',
    'Lannister',
    '34',
    'Vivo',
    'Espada',
    '8'
);
const daenerys = new Luchador(
    'Daenerys Targaryen',
    'Targaryen',
    '16',
    'Viva',
    'Dragones',
    '9'
);
const tyrion = new Asesor(
    'Tyrion Lannister',
    'Lannister',
    '29',
    'Vivo',
    daenerys.nombre
);
const bronn = new Escudero(
    'Bronn',
    'Sin familia',
    '42',
    'vivo',
    jaime.nombre,
    '4'
);

export const personajes = [joffrey, jaime, daenerys, tyrion, bronn];
console.log(tyrion);

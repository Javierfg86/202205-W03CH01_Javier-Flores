import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';
import { Luchador } from './Luchador.js';
import { Personaje } from './Personaje.js';
import { Rey } from './Rey.js';
export function characterCard(personaje = new Personaje()) {
    let listHTML = '';
    let emoji = '';

    if (personaje instanceof Rey) {
        listHTML += `<li>Años de reinado: ${personaje.añosDeReinado} </li>`;
        emoji = '👑';
    }
    if (personaje instanceof Luchador) {
        listHTML += `<li>Arma: ${personaje.arma}</li>
        <li>Destreza: ${personaje.destreza}</li>`;
        emoji = '🗡';
    }
    if (personaje instanceof Asesor) {
        listHTML += `<li>Asesora a: ${personaje.personajeAlQueAsesora}</li>`;
        emoji = '🎓';
    }
    if (personaje instanceof Escudero) {
        listHTML += `<li>Sirve a: ${personaje.personajeAlQueSirve} </li>
          <li>Peloteo: ${personaje.pelotismo}</li>`;
        emoji = '🛡';
    }

    return `<li class="character col">
    <div class="card character__card">
    <img
    src="./img/${personaje.nombre.toLowerCase()}.jpg"
    alt="${personaje.nombre} ${personaje.familia} del personaje"
    class="character__picture card-img-top"
/>
        <div class="card-body">
            <h2 class="character__name card-title h4">${personaje.nombre}, ${
        personaje.familia
    }</h2>
            <div class="character__info">
                <ul class="listHTML-unstyled">
                    <li>Edad: ${personaje.edad} años</li>
                    <li>
                        Estado:
                      
                        <i class="fas fa-thumbs-up"></i>
                    </li>
                </ul>
            </div>
            <div class="character__overlay">
                <ul class="listHTML-unstyled">
                    ${listHTML}
                </ul>
                <div class="character__actions">
                    <button class="character__action btn">habla</button>
                    <button class="character__action btn">muere</button>
                </div>
            </div>
        </div>
        <i class="emoji">${emoji}</i>
    </div>
</li>`;
}


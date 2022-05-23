import { personajes } from './personajes.js';
import { characterCard } from './templates.js';
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        let listHtml = '';
        personajes.forEach((personaje) => {
            listHtml += characterCard(personaje) + '\n';
        });
        document.querySelector('ul.characters-list').innerHTML = listHtml;
    });
})();


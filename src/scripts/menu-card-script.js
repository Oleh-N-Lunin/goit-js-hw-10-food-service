import menuCard from '../templates/menu-template.hbs';
import menu from "../scripts/menu.json";

const menuMarkupElement = createMenuMarkup(menu);
const menuMarkup = document.querySelector(".js-menu");

function createMenuMarkup(menu) {
    return menuCard(menu);
}

menuMarkup.insertAdjacentHTML('beforeend', menuMarkupElement);
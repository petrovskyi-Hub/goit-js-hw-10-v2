import menu from './menu.json';
import itemsTemplate from './templates/menu-items.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyRef = document.querySelector('body');
const menuRef = document.querySelector('.js-menu');
const themeSwitchRef = document.querySelector('#theme-switch-toggle');

if (localStorage.getItem('theme') === Theme.DARK) {
    themeSwitchRef.checked = true;
     bodyRef.classList.remove(Theme.LIGHT)
    bodyRef.classList.add(Theme.DARK)
}

const markup = itemsTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', markup);

themeSwitchRef.addEventListener('change', onThemeChenge)

function onThemeChenge(evt) {    
    if (evt.target.checked) {
        localStorage.setItem('theme', Theme.DARK)
        bodyRef.classList.remove(Theme.LIGHT)
        bodyRef.classList.add(Theme.DARK)

        return
    }

    localStorage.setItem('theme', Theme.LIGHT)
    bodyRef.classList.remove(Theme.DARK)
    bodyRef.classList.add(Theme.LIGHT)
}
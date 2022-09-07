const btnOpenMenu = document.querySelector('.btn-menu-mobile')
const aside = document.querySelector('aside')
const btnCloseMenu = document.querySelector('.btn-close-menu')

btnOpenMenu.onclick = function () {
    aside.classList.add('show-aside-mobile')
}

btnCloseMenu.onclick = function () {
    aside.classList.remove('show-aside-mobile')
}

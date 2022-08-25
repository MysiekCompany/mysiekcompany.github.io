const toggleButton = document.getElementById('menu-toggle')
const menu = document.getElementById('menu')

const menuElements = document.querySelectorAll('ul.navList > li');

if (toggleButton instanceof HTMLButtonElement && menu !== null) {
    const listener = () => {
        menu.classList.toggle('menu-hidden');
    }

    toggleButton.addEventListener('click', listener)

    // @ts-ignore
    for (const menuElement of menuElements) {
        menuElement.addEventListener('click', listener)
    }
}

export {}
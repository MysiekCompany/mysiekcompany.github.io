const toggleButton = document.getElementById('menu-toggle')
const menu = document.getElementById('menu')

const menuElements = document.querySelectorAll('ul.navList > li');

if (toggleButton instanceof HTMLButtonElement && menu !== null) {
    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('menu-hidden');
    })

    // @ts-ignore
    for (const menuElement of menuElements) {
        menuElement.addEventListener('click', () => {
            menu.classList.add('menu-hidden');
        })
    }
}

export {}
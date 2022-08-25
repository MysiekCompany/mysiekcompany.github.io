const heroText = document.getElementById('hero-text');
const navbar = document.getElementById('navbar');

document.addEventListener('scroll',
    () => {
        if (document.scrollingElement === null || heroText === null || navbar === null) return;

        if (document.scrollingElement.scrollTop >= heroText.offsetTop - 150) {
            navbar.classList.remove("after:lg:bg-transparent")
            navbar.clientTop
        }
        else {
            navbar.classList.add("after:lg:bg-transparent")
        }
    }
)

export {}
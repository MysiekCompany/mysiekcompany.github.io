const heroText = document.getElementById('hero-text');
const navbar = document.getElementById('navbar');

document.addEventListener('scroll',
    () => {
        if (document.scrollingElement === null || heroText === null || navbar === null) return

        if (document.scrollingElement.scrollTop >= heroText.offsetTop - 150) {
            navbar.classList.add("dark:bg-cyan-900", "bg-cyan-700")
        }
        else {
            navbar.classList.remove("dark:bg-cyan-900", "bg-cyan-700")
        }
    }
)

export {}
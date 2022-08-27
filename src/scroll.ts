const heroText = document.getElementById('hero-text')
const navbar = document.getElementById('navbar')

const homeNav = document.getElementById('home-nav')
const aboutUs = document.getElementById('onas')
const aboutUsNav = document.getElementById('onas-nav')
const offer = document.getElementById('oferta')
const offerNav = document.getElementById('oferta-nav')
const recruitment = document.getElementById('rekru')
const recruitmentNav = document.getElementById('rekru-nav')
const rules = document.getElementById('regulamin')
const rulesNav = document.getElementById('regulamin-nav')

document.addEventListener('scroll',
    () => {
        if (document.scrollingElement === null || heroText === null || navbar === null) return

        if (document.scrollingElement.scrollTop >= heroText.offsetTop - 150) {
            navbar.classList.remove('after:lg:bg-transparent')
        } else {
            navbar.classList.add('after:lg:bg-transparent')
        }

        if (homeNav === null || aboutUs === null || aboutUsNav === null || offer === null || offerNav === null || recruitment === null || recruitmentNav === null || rules === null || rulesNav === null) return

        if (document.scrollingElement.scrollTop + 60 >= rules.offsetTop) {
            homeNav.classList.remove('active')
            aboutUsNav.classList.remove('active')
            offerNav.classList.remove('active')
            recruitmentNav.classList.remove('active')
            rulesNav.classList.add('active')

            return
        }
        if (document.scrollingElement.scrollTop + 60 >= recruitment.offsetTop) {
            homeNav.classList.remove('active')
            aboutUsNav.classList.remove('active')
            offerNav.classList.remove('active')
            recruitmentNav.classList.add('active')
            rulesNav.classList.remove('active')

            return
        }
        if (document.scrollingElement.scrollTop + 60 >= offer.offsetTop) {
            homeNav.classList.remove('active')
            aboutUsNav.classList.remove('active')
            offerNav.classList.add('active')
            recruitmentNav.classList.remove('active')
            rulesNav.classList.remove('active')

            return
        }
        if (document.scrollingElement.scrollTop + 60 >= aboutUs.offsetTop) {
            homeNav.classList.remove('active')
            aboutUsNav.classList.add('active')
            offerNav.classList.remove('active')
            recruitmentNav.classList.remove('active')
            rulesNav.classList.remove('active')

            return
        }

        homeNav.classList.add('active')
        aboutUsNav.classList.remove('active')
        offerNav.classList.remove('active')
        recruitmentNav.classList.remove('active')
        rulesNav.classList.remove('active')
    }
)

export {}
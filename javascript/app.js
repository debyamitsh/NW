let links = document.querySelectorAll(".nav-link") 

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        document.querySelector("header").classList.add('navbar')
        document.querySelector(".start").classList.add('start-btn')
        document.querySelector(".nav-links").classList.add('links')
        for (let i = 0; i < links.length; i++) {
            links[i].classList.add('link')
        }
    } else {
        document.querySelector("header").classList.remove('navbar')
        document.querySelector(".start").classList.remove('start-btn')
        document.querySelector(".nav-links").classList.remove('links')
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('link')
        }
    }
})
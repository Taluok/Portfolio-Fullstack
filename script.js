let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });
});

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

//La función useWindowScroll se ejecuta cada vez que el usuario hace scroll en la página, lo que permite actualizar la navegación dinámica en tiempo real.
//La función menuIcon.onclick se ejecuta cuando el usuario hace clic en el icono de menú, lo que permite togglear el menú de navegación.
//La función navLinks.forEach itera sobre cada enlace de navegación y verifica si el enlace corresponde a la sección actual. Si es así, agrega la clase active al enlace.
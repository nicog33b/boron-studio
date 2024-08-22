const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const fullscreenMenu = document.querySelector('.fullscreen-menu');
const closeBtn = document.querySelector('.close-btn');

// Función para manejar el scroll
function handleScroll() {
    if (window.scrollY > 50 || window.innerWidth <= 800) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Escuchar el evento de scroll
window.addEventListener('scroll', handleScroll);

// Escuchar el evento de resize para manejar zoom o cambio de tamaño de ventana
window.addEventListener('resize', handleScroll);

hamburger.addEventListener('click', () => {
    fullscreenMenu.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
    fullscreenMenu.classList.remove('show');
});

// Ejecutar una vez al cargar la página para verificar el estado inicial
handleScroll();

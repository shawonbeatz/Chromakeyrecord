// JavaScript pour la logique du bouton hamburger
const hamburgerButton = document.querySelector('.hamburger-button');
const closeButton = document.querySelector('.nav-mobile .close-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.nav-mobile .mobile-link');
const currentYearSpan = document.getElementById('currentYear');

// Mettre à jour l'année courante dans le footer
currentYearSpan.textContent = new Date().getFullYear();

// Ouvrir le menu mobile
hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.add('open');
});

// Fermer le menu mobile
closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});

// Fermer le menu mobile quand un lien est cliqué
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

// Fermer le menu si on clique en dehors (optionnel, plus avancé, décommenter si besoin)
// document.addEventListener('click', (event) => {
//     if (!mobileMenu.contains(event.target) && !hamburgerButton.contains(event.target) && mobileMenu.classList.contains('open')) {
//         mobileMenu.classList.remove('open');
//     }
// });

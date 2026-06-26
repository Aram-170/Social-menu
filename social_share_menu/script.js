// Seleziona gli elementi del DOM
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

// Gestisce l'apertura/chiusura al click con toggle di classe CSS
toggle.onclick = function() {
    menu.classList.toggle('active');
}

// Opzionale: Chiude il menu se clicchi ovunque fuori dall'area del menu
document.addEventListener('click', function(event) {
    const isClickInside = menu.contains(event.target);
    if (!isClickInside && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');
    const navLinks = nav.querySelectorAll('a');

    // Funktion zum Umschalten des mobilen Menüs
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Funktion, um das Menü zu schließen, wenn ein Link geklickt wird (für Single-Page Navigation)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Nur schließen, wenn es sich um einen Anker-Link auf derselben Seite handelt oder wenn es mobil ist
            if (nav.classList.contains('active')) {
                // Kleine Verzögerung, damit die Navigation abgeschlossen wird, bevor das Menü zugeht
                setTimeout(() => {
                    nav.classList.remove('active');
                }, 300); 
            }
        });
    });
});
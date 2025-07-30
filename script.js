document.addEventListener('DOMContentLoaded', function() {
    const bullesContainer = document.getElementById('bulles');

    function creerBulle() {
        const bulle = document.createElement('div');
        bulle.classList.add('bulle');

        // Taille aléatoire entre 10 et 100 pixels
        const taille = Math.random() * 90 + 10;
        bulle.style.width = `${taille}px`;
        bulle.style.height = `${taille}px`;

        // Position aléatoire sur la largeur de l'écran
        bulle.style.left = `${Math.random() * 100}vw`;

        // Position initiale en bas de l'écran
        bulle.style.bottom = `-${taille}px`;

        // Durée d'animation aléatoire entre 4 et 8 secondes
        bulle.style.animationDuration = `${Math.random() * 4 + 4}s`;

        // Ajout d'un gestionnaire d'événements pour le clic sur la bulle
        bulle.addEventListener('click', function() {
            bulle.remove(); // Supprime la bulle du DOM
        });

        bullesContainer.appendChild(bulle);

        // Supprimer la bulle après l'animation pour éviter la surcharge du DOM
        setTimeout(() => {
            bulle.remove();
        }, 8000);
    }

    // Créer une nouvelle bulle toutes les 1 seconde
    setInterval(creerBulle, 1000);
});

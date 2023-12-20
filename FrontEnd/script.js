document.addEventListener('DOMContentLoaded', function() {
  // Ecouteur pour ouvrir la modale de la galerie
  let boutonModifier = document.getElementById('modifier-galerie');
  if (boutonModifier) {
    boutonModifier.addEventListener('click', function() {
      document.getElementById('modal-galerie').style.display = 'block';
    });
  } else {
    console.log("L'élément 'modifier-galerie' n'existe pas");
  }

  // Ecouteur pour fermer la modale de la galerie
  document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('modal-galerie').style.display = 'none';
  });

  // Ecouteur pour ouvrir la modale d'ajout de photo
  document.getElementById('ajouter-photo').addEventListener('click', function() {
    // Logique d'ouverture de la seconde modale
  });

  // Ecouteur pour fermer la modale en cliquant en dehors
  window.addEventListener('click', function(event) {
    let modal = document.getElementById('modal-galerie');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  // Logique de filtrage de la galerie
  const boutonsFiltre = document.querySelectorAll('.tabs button[data-filter]');
  boutonsFiltre.forEach(function(bouton) {
    bouton.addEventListener('click', function() {
      let valeurFiltre = this.getAttribute('data-filter');
      const élémentsGalerie = document.querySelectorAll('.gallery figure');
      élémentsGalerie.forEach(function(élément) {
        if (valeurFiltre === 'all' || élément.getAttribute('data-categorie') === valeurFiltre) {
          élément.style.display = 'block';
        } else {
          élément.style.display = 'none';
        }
      });
    });
  });

  // Logique de connexion
  document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    login();
  });
});

// Fonction de connexion
function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if (email === "sophie.bluel@test.tld" && password === "S0phie") {
    window.location.href = 'admin.html';
  } else {
    alert('Identifiants incorrects. Veuillez réessayer.');
  }
}


document.addEventListener('DOMContentLoaded', function() {
  // Autres écouteurs d'événements déjà présents...

  // Ecouteur pour les icônes de suppression
  document.querySelectorAll('.delete-icon').forEach(function(deleteButton) {
    deleteButton.addEventListener('click', function() {
      let galleryItem = this.parentElement;
      galleryItem.remove(); // Supprime l'élément de la galerie

      // Ajoutez ici la logique pour supprimer l'image du serveur ou de la base de données si nécessaire
    });
  });
});

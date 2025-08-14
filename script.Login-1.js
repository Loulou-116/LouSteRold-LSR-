 const formConnexion = document.getElementById('formConnexion');
    const message = document.getElementById('message');
    const btnInscription = document.getElementById('btnInscription');

    // tranzisyon pou page inscription an
    btnInscription.addEventListener('click', () => {
      window.location.href = 'login-2.html'; 
    });

    formConnexion.addEventListener('submit', (e) => {
      e.preventDefault();
      message.textContent = "";
      const email = document.getElementById('email').value.trim().toLowerCase();
      const motdepasse = document.getElementById('motdepasse').value;

      // Rekipere lis itilizate ki konekte yo
      let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];

      // pati pou jwenn itilizate avek email
      const utilisateur = utilisateurs.find(u => u.email === email);

      if(!utilisateur) {
        message.style.color = "orange";
        message.textContent = "Email non reconnu. Veuillez vous inscrire d'abord.";
        return;
      }
      if(utilisateur.motdepasse !== motdepasse) {
        message.style.color = "red";
        message.textContent = "Mot de passe incorrect. Veuillez réessayer.";
        return;
      }

      // koneksyon an reyisi
      localStorage.setItem('utilisateurConnecte', JSON.stringify(utilisateur));

      message.style.color = "lightgreen";
      message.textContent = "Connexion réussie, redirection en cours...";

      setTimeout(() => {
        window.location.href = "acceuil.html";
      }, 1500);
    });

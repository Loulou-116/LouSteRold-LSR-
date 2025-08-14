 const formInscription = document.getElementById('formInscription');
    const message = document.getElementById('message');
    const btnConnexion = document.getElementById('btnConnexion');

    btnConnexion.addEventListener('click', () => {
      window.location.href = 'login-1.html';
    });

    formInscription.addEventListener('submit', (e) => {
      e.preventDefault();
      message.textContent = "";

      const nom = document.getElementById('nom').value.trim();
      const prenom = document.getElementById('prenom').value.trim();
      const email = document.getElementById('email').value.trim().toLowerCase();
      const motdepasse = document.getElementById('motdepasse').value;

      if (!nom || !prenom || !email || !motdepasse) {
        message.style.color = "orange";
        message.textContent = "Veuillez remplir tous les champs.";
        return;
      }

      // Récupérer utilisateurs existants
      let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];

      // Vérifier email unique
      if (utilisateurs.some(u => u.email === email)) {
        message.style.color = "red";
        message.textContent = "Cet email est déjà utilisé.";
        return;
      }

      // kreye yon nouvo itilizate
      const nouvelUtilisateur = {
        nom,
        prenom,
        email,
        motdepasse,
        role: 'utilisateur'
      };

      utilisateurs.push(nouvelUtilisateur);
      localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));

      message.style.color = "lightgreen";
      message.textContent = "Inscription réussie ! Vous allez être redirigé vers la connexion...";

      setTimeout(() => {
        window.location.href = 'acceuil.html';
      }, 2000);
    });
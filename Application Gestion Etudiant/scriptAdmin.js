function connexionAdmin() {
      const user = document.getElementById('username').value.trim();
      const pass = document.getElementById('password').value;
      const ADMIN_USER = "admin";
      const ADMIN_PASS = "admin1234";
      const msg = document.getElementById('message');
      if (user === ADMIN_USER && pass === ADMIN_PASS) {
        window.location.href = "dashboard.html";
      } else {
        msg.textContent = "Accès refusé. Identifiants incorrects.";
      }
    }
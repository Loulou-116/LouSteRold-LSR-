const tableBody = document.querySelector("#corbeilleTable tbody");

    function loadCorbeille() {
      tableBody.innerHTML = '';
      const corbeille = JSON.parse(localStorage.getItem("corbeilleMessages") || "[]");

      corbeille.forEach((msg, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${msg.nom}</td>
          <td>${msg.email}</td>
          <td>${msg.message}</td>
          <td>
            <button class="btn-recuperer" onclick="recupererMessage(${index})"> Récupérer</button>
            <button class="btn-delete" onclick="supprimerDefinitivement(${index})"> Supprimer Définitivement</button>
          </td>
        `;

        tableBody.appendChild(row);
      });
    }

    function recupererMessage(index) {
      const corbeille = JSON.parse(localStorage.getItem("corbeilleMessages") || "[]");
      const messages = JSON.parse(localStorage.getItem("messages") || "[]");

      const message = corbeille[index];

      // Ajoute mesaj la nan lis prensipal la
      messages.push(message);
      corbeille.splice(index, 1);

      // Mete yo nan localStorage
      localStorage.setItem("messages", JSON.stringify(messages));
      localStorage.setItem("corbeilleMessages", JSON.stringify(corbeille));
      loadCorbeille();
    }

    function supprimerDefinitivement(index) {
      if (confirm("Eske ou vle efase mesaj sa a nèt ale?")) {
        const corbeille = JSON.parse(localStorage.getItem("corbeilleMessages") || "[]");
        corbeille.splice(index, 1);
        localStorage.setItem("corbeilleMessages", JSON.stringify(corbeille));
        loadCorbeille();
      }
    }

    function toggleMode() {
      document.body.classList.toggle("dark-mode");
    }

    window.onload = loadCorbeille;
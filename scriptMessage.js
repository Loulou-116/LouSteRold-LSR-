const tableBody = document.querySelector("#messageTable tbody");

function loadMessages() {
  tableBody.innerHTML = '';
  const messages = JSON.parse(localStorage.getItem("messages") || "[]");

  if (messages.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Aucun message trouvé</td></tr>`;
    return;
  }

  messages.forEach((msg, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${msg.nom}</td>
      <td><a href="mailto:${msg.email}">${msg.email}</a></td>  <!-- Lyen mailto ajoute isit la -->
      <td>${msg.message}</td>
      <td>
        <button class="btn-supprimer" onclick="supprimerMessage(${index})">Supprimer</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function saveReply(index, text) {
  const messages = JSON.parse(localStorage.getItem("messages") || "[]");
  if (!messages[index]) return;
  messages[index].reponse = text;
  localStorage.setItem("messages", JSON.stringify(messages));
}

function envoyerReponse(index) {
  const messages = JSON.parse(localStorage.getItem("messages") || "[]");
  const msg = messages[index];
  if (!msg) return;



  emailjs.send(
    {
      to_name: msg.nom,
      to_email: msg.email,
      message: msg.message,
    }
  )
}

function supprimerMessage(index) {
  const messages = JSON.parse(localStorage.getItem("messages") || "[]");
  const corbeille = JSON.parse(localStorage.getItem("corbeilleMessages") || "[]");

  if (!messages[index]) return;

  corbeille.push(messages[index]);
  messages.splice(index, 1);

  localStorage.setItem("messages", JSON.stringify(messages));
  localStorage.setItem("corbeilleMessages", JSON.stringify(corbeille));
  loadMessages();
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

window.onload = loadMessages;

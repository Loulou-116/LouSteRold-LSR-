document.addEventListener("DOMContentLoaded", function () {
  const tbody = document.getElementById("corbeilleBody");
  let corbeille = JSON.parse(localStorage.getItem("corbeille")) || [];

  // Fonction pou mete tout etidyan efase yo nan tablo a
  function afficherCorbeille() {
    tbody.innerHTML = "";

    corbeille.forEach((students, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${students.id || index + 1}</td>
        <td>${students.nom}</td>
        <td>${students.prenom}</td>
        <td>
          <button class="btn-recuperer" onclick="restaurer(${index})">Restaurer</button>
          <button class="btn-supprimer" onclick="supprimerDefinitivement(${index})">Supprimer</button>
        </td>
      `;

      tbody.appendChild(row);
    });
  }

  // Restaure yon etidyan nan lis prensipal la
  window.restaurer = function (index) {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(corbeille[index]); // ajoute l tounen
    localStorage.setItem("students", JSON.stringify(students));

    corbeille.splice(index, 1); // pati ki retire etidyan  nan corbeille
    localStorage.setItem("corbeille", JSON.stringify(corbeille));

    afficherCorbeille(); // rafrechi
  };

  // Efase etidyan an nèt
  window.supprimerDefinitivement = function (index) {
    if (confirm("Ou sèten ou vle efase etidyan sa nèt?")) {
      corbeille.splice(index, 1);
      localStorage.setItem("corbeille", JSON.stringify(corbeille));
      afficherCorbeille();
    }
  };

  // Chaje tout done yo
  afficherCorbeille();
});

const ADMIN_USER = "admin";
const ADMIN_PASS = "admin1234";

// Vérification accès admin
{
  const u = prompt("Nom utilisateur:");
  const p = prompt("Mot de passe:");
  if (u !== ADMIN_USER || p !== ADMIN_PASS) {
    alert("Accès refusé !");
    location.href = "index.html";
  } else {
    localStorage.setItem("adminLogged", "Yes");
  }
}

const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");
const students = JSON.parse(localStorage.getItem("students") || "[]");

function toggleForm() {
  form.style.display = form.style.display === "none" ? "block" : "none";
}

function toggleTheme() {
  const theme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", theme);
}

function renderTable() {
  table.innerHTML = "";
  students.forEach((s, i) => {
    const row = `<tr>
      <td>${s.id}</td><td>${s.nom}</td><td>${s.prenom}</td><td>${s.sexe}</td>
      <td>${s.naissance}</td><td>${s.lieu}</td><td>${s.nationalite}</td><td>${s.nif}</td>
      <td>${s.tel}</td><td>${s.email}</td><td>${s.departement}</td><td>${s.faculte}</td>
      <td>${s.vacation}</td><td>${s.dateInscription || ''}</td>
      <td>
        <button class="btn-edit" type="button" onclick="edit(${i})"> Modifier</button>
        <button class="btn-delete" type="button" onclick="del(${i})"> Supprimer</button>
      </td>
    </tr>`;
    table.innerHTML += row;
  });
}

function edit(i) {
  const s = students[i];
  document.getElementById("studentId").value = s.id;
  document.getElementById("nom").value = s.nom;
  document.getElementById("prenom").value = s.prenom;
  document.getElementById("sexe").value = s.sexe;
  document.getElementById("naissance").value = s.naissance;
  document.getElementById("lieu").value = s.lieu;
  document.getElementById("nationalite").value = s.nationalite;
  document.getElementById("nif").value = s.nif;
  document.getElementById("tel").value = s.tel;
  document.getElementById("email").value = s.email;
  document.getElementById("departement").value = s.departement;
  document.getElementById("faculte").value = s.faculte;
  document.getElementById("vacation").value = s.vacation;
  toggleForm();
}

function del(i) {
  const corbeille = JSON.parse(localStorage.getItem("corbeille") || "[]");
  corbeille.push(students[i]);
  localStorage.setItem("corbeille", JSON.stringify(corbeille));
  students.splice(i, 1);
  localStorage.setItem("students", JSON.stringify(students));
  renderTable();
}

form.onsubmit = (e) => {
  e.preventDefault();

  const s = {
    id: document.getElementById("studentId").value || "ID-" + Date.now(),
    nom: document.getElementById("nom").value,
    prenom: document.getElementById("prenom").value,
    sexe: document.getElementById("sexe").value,
    naissance: document.getElementById("naissance").value,
    lieu: document.getElementById("lieu").value,
    nationalite: document.getElementById("nationalite").value,
    nif: document.getElementById("nif").value,
    tel: document.getElementById("tel").value,
    email: document.getElementById("email").value,
    departement: document.getElementById("departement").value,
    faculte: document.getElementById("faculte").value,
    vacation: document.getElementById("vacation").value,
    dateInscription: new Date().toLocaleString()
  };

  const existingIndex = students.findIndex(stu => stu.id === s.id);
  if (existingIndex > -1) {
    students[existingIndex] = s;
  } else {
    students.push(s);
  }

  localStorage.setItem("students", JSON.stringify(students));
  renderTable();
  form.reset();
  form.style.display = "none";
};

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('l', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();

  // Tit
  doc.setFontSize(18);
  doc.text("Université LouSteRold (L.S.R)", pageWidth / 2, 15, { align: 'center' });

  // Sou-tit
  doc.setFontSize(14);
  doc.text("Liste complète des étudiants inscrits", pageWidth / 2, 25, { align: 'center' });

  // Tèt tablo a
  const headers = [[
    "ID", "Nom", "Prénom", "Sexe", "Naissance", "Lieu", "Nationalité",
    "NIF", "Téléphone", "Email", "Département", "Faculté", "Vacation", "Date"
  ]];

  // Done yo
  const data = students.map(s => [
    s.id, s.nom, s.prenom, s.sexe, s.naissance, s.lieu, s.nationalite, s.nif,
    s.tel, s.email, s.departement, s.faculte, s.vacation, s.dateInscription
  ]);

  //  tablo 
  doc.autoTable({
    head: headers,
    body: data,
    startY: 35,
    styles: { fontSize: 8, cellPadding: 2 },
    headStyles: { fillColor: [0, 64, 128], textColor: 255, halign: 'center' },
    bodyStyles: { halign: 'center' },
    margin: { top: 10 }
  });

  // siyati 
  const finalY = doc.lastAutoTable.finalY + 20;
  doc.setFontSize(12);
  doc.text("Signature du Recteur: ____LouSteRold____", 20, finalY);

  // Telechajman PDF
  doc.save("liste_etudiants.pdf");
}


renderTable();

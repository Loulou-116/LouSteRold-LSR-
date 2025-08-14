// Dark mode toggle
function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

// Handle registration
document.getElementById('inscriptionForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    id: 'ID' + Date.now(),
    nom: nom.value,
    prenom: prenom.value,
    sexe: sexe.value,
    dateNaissance: dateNaissance.value,
    lieuNaissance: lieuNaissance.value,
    nationalite: nationalite.value,
    nif: nif.value,
    telephone: telephone.value,
    email: email.value,
    departement: departement.value,
    faculte: faculte.value,
    vacation: vacation.value,
    dateInscription: new Date().toLocaleString()
  };

  // Retire tout kòd ki gen rapò ak photo a
  // Sove done dirèkteman nan localStorage san foto
  let students = JSON.parse(localStorage.getItem('students')) || [];
  students.push(data);
  localStorage.setItem('students', JSON.stringify(students));

  alert("Inscription réussie !");
  document.getElementById("pdfBtn").style.display = "inline-block";
  return;
});

// Fonksyon pou telechaje PDF rete menm jan
async function downloadPDF() {
  const element = document.getElementById("formulaireContainer");
  const canvas = await html2canvas(element);
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jspdf.jsPDF("p", "mm", "a4");
  const width = pdf.internal.pageSize.getWidth();
  const height = (canvas.height * width) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, width, height);
  pdf.text("Signature: ___LouSteRold___", 20, 280);
  pdf.save("Fiche_Inscription.pdf");
}

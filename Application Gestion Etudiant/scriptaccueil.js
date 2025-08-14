  // Slider imaj
    const images = document.querySelectorAll('#accueil img');
    let current = 0;
    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 5000);

    // Sidebar mobil
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    

let boutonTheme=document.getElementById("Theme-Sys")
let theme="clair"
let body=document.querySelector("body")
let header=document.querySelector("header")
let link1=document.getElementById("link-1")
let link2=document.getElementById("link-2")
let link3=document.getElementById("link-3")
let link4=document.getElementById("link-4")
let link5=document.getElementById("link-5")


let toggleCOlor=document.querySelectorAll(".toggle-click") 
boutonTheme.addEventListener("click", function name(){ 
    
    if(theme==="clair"){
       body.classList.add("sombre")
       body.classList.remove("clair")
       header.classList.add("headerSombre")
       header.classList.remove("header")
       boutonTheme.setAttribute("src", "Image/soleil.png")
       body.style.color="white"
       link1.style.color="white"
        link2.style.color="white"
         link3.style.color="white"
         link4.style.color="white"
         link5.style.color="white"
      toggleCOlor.forEach(function(el){
        el.classList.add("toggle-clickDark");
        el.classList.remove("toggle-click")
      });
       theme="sombre"
      
    }else{
      body.classList.add("clair")
       body.classList.remove("sombre")
       boutonTheme.setAttribute("src", "Image/lune.png")
       header.classList.add("header")
       header.classList.remove("headerSombre")
        body.style.color="black"
        link1.style.color="black"
        link2.style.color="black"
         link3.style.color="black"
         link4.style.color="black"
         link5.style.color="black"
         toggleCOlor.forEach(function(el){
        el.classList.add("toggle-click");
        el.classList.remove("toggle-clickDark")
      });
      theme="clair"
    }
});

//nouvo

let toggle=document.getElementById("toggle");
let Resposive=document.getElementById("Resposive")

toggle.addEventListener("click", function name() {
toggle.classList.toggle("active")
Resposive.classList.toggle("page")
})



//  // Bouton inskripsyon etudyan redirektion nan  page inskripsyon (à créer)
  document.getElementById('btnInscriptionEtudiant').addEventListener('click', () => {
    window.location.href = 'inscription-3.html';
  });

  //PARti pou kontak
  
  const form = document.getElementById('contactForm');
  const messageBox = document.getElementById('formMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!nom || !email || !message) {
      messageBox.textContent = "Tout chan yo obligatwa.";
      messageBox.style.color = 'red';
      return;
    }

  
    const newMessage = {
      id: Date.now(),
      nom: nom,
      email: email,
      message: message,
      date: new Date().toLocaleString(),
      reponse: "", 
      statut: "actif"
    };

    // Ranmase mesaj ki deja egziste
    let storedMessages = JSON.parse(localStorage.getItem("messages")) || [];

    // Mete nouvo a
    storedMessages.push(newMessage);

    // Sove nan localStorage
    localStorage.setItem("messages", JSON.stringify(storedMessages));

    // Netwaye epi afiche mesaj konfimasyon an
    form.reset();
    messageBox.textContent = `Merci ${nom}, votre message a été reçu. Nous vous répondrons bientôt.`;
    messageBox.style.color = 'green';
  });


  const aideBtn = document.getElementById('aideBtn');
  const aideModal = document.getElementById('aideModal');
  const closeAide = document.getElementById('closeAide');

  aideBtn.addEventListener('click', () => {
    aideModal.style.display = 'block';
  });

  closeAide.addEventListener('click', () => {
    aideModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === aideModal) {
      aideModal.style.display = 'none';
    }
  });
      //partie footer
  // Auto-update copyright
  document.querySelector('.footer-bottom p').innerHTML = 
    `&copy; ${new Date().getFullYear()} Université LouSteRold. Tous droits réservés.`;
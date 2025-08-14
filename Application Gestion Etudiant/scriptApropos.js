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
});


  document.querySelector('.footer-bottom p').innerHTML = 
    `&copy; ${new Date().getFullYear()} Université LouSteRold. Tous droits réservés.`;
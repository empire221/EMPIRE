console.log("Site EMPIRE chargé avec succès !");
const compteurs = document.querySelectorAll(".compteur");

compteurs.forEach(compteur => {

    const cible = +compteur.getAttribute("data-cible");

    let valeur = 0;

    const vitesse = cible / 100;

    function miseAJour(){

        if(valeur < cible){

            valeur += vitesse;

            compteur.innerText = Math.ceil(valeur);

            setTimeout(miseAJour,20);

        }else{

            compteur.innerText = cible.toLocaleString("fr-FR");

        }

    }

    miseAJour();

});
// ==========================
// LIGHTBOX GALERIE
// ==========================

const imagesGalerie = document.querySelectorAll(".galerie-item");
const lightbox = document.querySelector(".lightbox");
const imageLightbox = document.querySelector(".lightbox-image");
const fermerLightbox = document.querySelector(".fermer");


imagesGalerie.forEach(image => {

    image.addEventListener("click", function(e){

        e.preventDefault();

        lightbox.style.display = "flex";

        imageLightbox.src = this.href;

    });

});


fermerLightbox.addEventListener("click", function(){

    lightbox.style.display = "none";

});


lightbox.addEventListener("click", function(e){

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});
// ==========================
// BOUTON RETOUR EN HAUT
// ==========================

const boutonHaut = document.getElementById("haut");


window.addEventListener("scroll", function(){

    if(window.scrollY > 400){

        boutonHaut.style.display = "block";

    }else{

        boutonHaut.style.display = "none";

    }

});


boutonHaut.addEventListener("click", function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
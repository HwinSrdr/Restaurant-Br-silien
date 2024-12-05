// Etape 1 : j'analyse la donnée
// Etape 2 : Je transforme ma maquette en HTML/CSS
// Etape 3 : Je récupère la donnée et je l'affiche en console
// Etape 4 : Je stock le chemin vers la donnée dans les variables
// Etape 5 : Je crée les contenus remplies dynamiquement
// Etape 6 : Je les envoie dans le DOM



fetch(`data.json`)

    .then((rep) => {

        return rep.json()
    })
    .then(donnee => {
        //j'ai accès ici à ma donnée
        console.log(donnee)

        // j'affiche le nom commercial : 
        //document.querySelector('h1').innerHTML = donnee.nomCommercial
        //Ici j'ai une liste de produit
        //Je boucle sur le tableau de données:


        afficheInfoPrincipale(donnee)


        donnee.plats.forEach(plat => {
            afficherUnPlat(plat)
        })


        donnee.promessesClient.forEach(promesse => {
            affichePromesses(promesse)
        });

        donnee.services.forEach(service => {
            afficherUnService(service)
        });

        donnee.temoignages.forEach(avis => {
            afficherUnAvis(avis)

        });

    })


// SECTION HERO
function afficheInfoPrincipale(donnee) {


    let hero = document.querySelector("#hero")
    hero.innerHTML += ` 
<div class="container flex spaceBetween alignCenter center">
                <div>
                    <h1> ${donnee.nomCommercial} </h1>
                    <p> ${donnee.texteAccroche} </p>
                    <a href=""> ${donnee.texteBouton} </a>
                    <div>
                        <ul class="flex">
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">TikTok</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src="assets/plat-abdoul.png" alt="">
                </div>
            </div>`;

}



// SECTION MENUS
function afficherUnPlat(plat) {

    let menuContainer = document.querySelector("#menu")
    menuContainer.innerHTML += `
                <div class="flex alignCenter spaceEvenly menu"> <!-- 1 Menu -->
                    <div class="w40">
                        <h3> ${plat.nom} </h3>
                        <p> ${plat.desc} </p>
                    </div>
                    <img src=" ${plat.imageUrl} " alt="">
                </div> `;




}




//SECTION PROMESSE


//role : afficher les promesse 
// parametre : la promesse recuperé par la boucle
// retourne : non

function affichePromesses(promesse) {

    let promesseContainer = document.querySelector("#promesse")
    promesseContainer.innerHTML += `
    <p> ${promesse} </p> `;

}




// SECTION EVENTS

//role : afficher les services
//paramètres : les services récupéré par la boucle
//retourne : non

function afficherUnService(service) {
    let serviceContainer = document.querySelector("#service")
    serviceContainer.innerHTML += `
        <div>
                    <h3> ${service.nom} </h3>
                    <p> ${service.desc} </p>
                </div> `
}


//SECTION AVIS

//role: afficher les avis
//paramètres : les avis récupéré par la boucle
//retourne : non

function afficherUnAvis(avis) {
    let avisContainer = document.querySelector("#avis")
    avisContainer.innerHTML += `
    <div>
                            <p> ${avis.prenom} </p>
                            <p> ${avis.typeExperience} </p>
                            <p> ${avis.commentaire} </p>
                            <p> ★ ${avis.note}/5</p>
                        </div> `
}
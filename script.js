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


        donnee.plats.forEach(plat=>{
            afficherUnPlat(plat)
        })

    })
    function affiche (desc) {



    // SECTION HERO

let hero = document.querySelector ("#hero")
hero.innerHTML +=` 
div class="container flex spaceBetween alignCenter center">
                <div>
                    <h1> ${donnee.NomCommercial} </h1>
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


            // SECTION PROMESSE
            let listePro = "";
            desc.promessesClients.forEach(promesse=>{
                let sectionPromesse = document.querySelector ("#promesse")
                sectionPromesse.innerHTML += 
                listePro+= `<p> ${promesse} </p> `
                
            })
            console.log(listeIng)


            // SECTION MENUS
            function afficherUnPlat (plat) {
            let listeMenu ="";
            desc.plats.forEach(plat => {
                listeMenu += `
                <div class="flex alignCenter spaceEvenly menu"> <!-- 1 Menu -->
                    <div class="w40">
                        <h3> ${plat.nom} </h3>
                        <p> ${plat.desc} </p>
                    </div>
                    <img src=" ${plat.imageUrl} " alt="">
                </div> `
                
            });
            console.log(listeMenu)



}

    }

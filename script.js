// Etape 1 : j'analyse la donnée
// Etape 2 : Je transforme ma maquette en HTML/CSS
// Etape 3 : Je récupère la donnée et je l'affiche en console
// Etape 4 : Je stock le chemin vers la donnée dans les variables
// Etape 5 : Je crée les contenus remplies dynamiquement
// Etape 6 : Je les envoie dans le DOM




fetch(`data.json`)

.then((rep) => {
    // Javascript recoit une réponse de l'api(objet js pas exploitable directement => il faut le transformer en json)
    return rep.json()
})
    .then(donnee => {
        //Ensuite j'ai accès ici à ma donnée
        console.log(donnee)
        //Ici j'ai une liste de produit
        //Je boucle sur le tableau de données:
        donnee.forEach(recette => {
            /* prod.ingredients.forEach(ingredient => {
                let typeIngredients = ingredient.aliment
                ingredient(typeIngredients)
                });*/
                
                affiche(recette)
            });
        })


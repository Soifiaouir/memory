// Fonctionalités de la page de jeux.


    // 1-Inserer les images dans la page

        const animaux = document.getElementById('animaux');

        const tabImagesAnimaux = [];
        for(let i = 1; i < 5; i++){//creation de la boucle en commencant a l'image 1 et finissant a l'image 5
            const animal = new Image();//new Image() = object natif qui creer l'affichage en HTML
            animal.src = '../ressources1/animaux/' + i + '.webp';
            tabImagesAnimaux.push(animal);
        }

        const tabImagesAnimauxBis = [];
        for(let i = 1; i < 5; i++){
            const animal = new Image();
            animal.src = '../ressources1/animaux/' + i + '.webp';
            tabImagesAnimauxBis.push(animal);
        }
    
        // On fusionne les deux tableaux
        const tabAnimaux = tabImagesAnimaux.concat(tabImagesAnimauxBis);//concat est un methode qui permet la concatenation des tableaux dans le but d'en creer un nouveau
    
        //Affichage dans le dom
        tabAnimaux.forEach(animal => animaux.appendChild(animal)); //forEach est une methode qui permet d'executer un fonction sur chaque element d'un tableau
        //elementparentdanslehtml.appendChild(elementenfant)
    

    //2-Mélanger les cartes

        

            //créer le click sur image 




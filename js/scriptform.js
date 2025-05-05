//Mise ne place des fonctionnalités du formulaire 

const form = document.getElementById('formulaire');

form.addEventListener('submit', function(event) {
    event.preventDefault()

    //1-Recuperer les donées dans le localStore
    
    const nom = document.getElementById('nom').value;
    const mail = document.getElementById('mail');
    const psw = document.getElementById('psw');
    const verifpsw = document.getElementById('mdpverif');

    // localStorage.setItem('nom', nom);
    // localStorage.setItem('mail', mail.value);
    // localStorage.setItem('psw', psw.value);
    // localStorage.setItem('verifpsw', verifpsw.value);

    console.log(nom);

    //création d'un objet
    let newUtilisateur ={
        nom : nom,
        mail :mail,
        psw : psw,
    }
    
    //recupétation des donnée des utilisateur en les mettants dans un tableau vide
    let utilisateur = localStorage.getItem("utilisateur");

    if (utilisateur) {
      utilisateur = JSON.parse(utilisateur);//fonction qui transforme le texte en tableau
    } else {
      utilisateur = [];
    }

    //ajout des nouveaux utilisateurs dans le localStorage
    utilisateur.push(newUtilisateur);

    const utilisateurText = JSON.stringify(utilisateur);// fonction qui transforme le tableau en texte
    localStorage.setItem('utilisateur', utilisateurText)



    

    
    
    
    

}
);
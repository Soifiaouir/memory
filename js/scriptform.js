//Mise ne place des fonctionnalités du formulaire 

const form = document.getElementById('formulaire');

form.addEventListener('submit', function(event) {
    event.preventDefault()

    //1-Recuperer les donées dans le localStore
    
    const nom = document.getElementById('nom').value;
    const mail = document.getElementById('mail').value;
    const psw = document.getElementById('psw').value;
    const verifpsw = document.getElementById('mdpverif').value;
   
    console.log(nom);

    //création d'un objet
    // faire attention a ce que le format recuperer ressemble a un format JSON
    let newUtilisateur = {
        nom : nom,
        mail :mail,
        psw : psw,
        verifpsw : verifpsw
    }
    
    //recupétation des donnée des utilisateur en les mettants dans un tableau vide
    let utilisateur = localStorage.getItem("utilisateur");

   /* if (utilisateur) {
      utilisateur = JSON.parse(utilisateur);//fonction qui transforme le texte en object
    } else {
      utilisateur = [];
    }

    //ajout des nouveaux utilisateurs dans le localStorage
    utilisateur.push(newUtilisateur);

    const utilisateurText = JSON.stringify(utilisateur);// fonction qui transforme le tableau en texte
    localStorage.setItem('utilisateur', utilisateurText)
    */

    //2- Logique de verification des différents champs

    //verif du champs nom  

      if (/^[a-zA-Z]+$/.test(nom) == true){
        console.log('banane');
      } else{
        console.log('panama'); 
        document.getElementById("messageNom").style.display ="block";
      }  
    
    //Verif du champ mail
    
    

}
);
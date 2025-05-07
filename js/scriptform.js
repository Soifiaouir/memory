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

   /*if (utilisateur) {
      utilisateur = JSON.parse(utilisateur);//fonction qui transforme le texte en object
    } else {
      utilisateur = [];
    }

    //ajout des nouveaux utilisateurs dans le localStorage
    utilisateur.push(newUtilisateur);

    const utilisateurText = JSON.stringify(utilisateur);// fonction qui transforme le tableau en texte
    localStorage.setItem('utilisateur', utilisateurText)*/
    

    //2- Logique de verification des différents champs

    //verif du champs nom  

      if (/^[a-zA-Z]+$/.test(nom) == true){
        console.log('banane');
      } else{
        console.log('panama'); 
        document.getElementById("messageNom").style.display ="block";
      }  
    

      // Verif email /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    //Verif que les champs de mots de passe soient identique

    if (psw != verifpsw){
      document.getElementById("messageMdp").style.display ="block";
    } else {
      
    }

    //Verification de la sécurité du mot de passe 
    
      //variable a verifier dans la condition
        const textVerif = /^[a-zA-Z]+$/;
        const numberVerif = /^[0-9]+$/;

    
        
//Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() 
// methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String. This chapter describes JavaScript regular expressions. 
// It provides a brief overview of each syntax element.
//  For a detailed explanation of each one's semantics, read the regular expressions reference.

    
    

}
);
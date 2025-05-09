// Mise en place des fonctionnalités du formulaire 
const form = document.getElementById('formulaire');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // 1- Logique de vérification des différents champs
   
  const nom = document.getElementById('nom');
  const mail = document.getElementById('mail');
  const psw = document.getElementById('psw');
  const verifpsw = document.getElementById('mdpverif');
    
  console.log(nom.value);

  // Verif du champ nom  
  const messageNom = document.getElementById('messageNom');
  const regexNom = /^[a-zA-Z]+$/; 
      
  console.log(nom.value);

  if (regexNom.test(nom.value)) {
    messageNom.style.display = "none";
  } else {
    messageNom.innerText = 'Votre nom ne respecte pas les conditions demandées';
    messageNom.style.display = "block";
    messageNom.style.color = "#951432";
  };

  // Verif email 
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageEmail = document.getElementById('messageEmail');
    
  if (regexEmail.test(mail.value)) {
    
  } else {
    messageEmail.innerText = "Votre email n'est pas valide";
    messageEmail.style.display = 'block';
    messageEmail.style.color = "#951432";
    console.log('Soucis regex mail');  
  }

  // Verif que les champs de mots de passe soient identiques
  const messageMdp = document.getElementById("messageMdp");

  if (psw.value === verifpsw.value) {
    console.log('Mots de passe identiques');
  } else {
    messageMdp.innerText = 'Les mots de passe ne sont pas identiques';
    messageMdp.style.display = "block";
    messageMdp.style.color = "#951432";
  }

  // Vérification de la sécurité du mot de passe 
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
 
  if (regexPassword.test(psw.value)) {
    console.log('Cool');
  } else {
    console.log('Mot de passe pas valide');
  }

  // 2- Récupérer les données dans le localStorage

    
  // Création d'un objet
  // Faire attention à ce que le format récupéré ressemble à un format JSON
  let newUtilisateur = {
    nom: nom.value,
    mail: mail.value,
    psw: psw.value,
    verifpsw: verifpsw.value,
  };
    
  // Récupération des données des utilisateurs en les mettant dans un tableau vide
  let utilisateur = localStorage.getItem("utilisateur");
    
  if (utilisateur) {
    utilisateur = JSON.parse(utilisateur); // Fonction qui transforme le texte en objet
  } else {
    utilisateur = [];
  }
    
  // Ajout des nouveaux utilisateurs dans le localStorage
  utilisateur.push(newUtilisateur);
    
  const utilisateurText = JSON.stringify(utilisateur); // Fonction qui transforme le tableau en texte
  localStorage.setItem('utilisateur', utilisateurText);

  // Créer une condition de verification que l'utilisateurs néxiste pas déjà
  



  // Validation du formulaire et renvoi vers la page de connexion
  if (regexNom.test(nom.value) && regexEmail.test(mail.value) && regexPassword.test(psw.value) && psw.value === verifpsw.value) {
    // Si toutes les conditions sont validées, rediriger
    window.location.href = "../html/conection.html";
  } else {
    // Si les conditions échouent, afficher un message d'erreur ou d'alerte
    alert("Veuillez vérifier vos informations et réessayer.");
  }
  // localStorage.clear();
});

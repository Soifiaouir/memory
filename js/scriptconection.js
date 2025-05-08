//Mise en place des fonctionnalité de verification de la page de connexion

const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
    event.preventDefault();


const mail = document.getElementById('mail');
const mdp = document.getElementById('mdp');

//recuperattion des données du local storage

let utilisateurs = localStorage.getItem('utilisateur');

if (utilisateurs) {
    utilisateurs = JSON.parse(utilisateurs);//transforme en tableau la chaine json
} else {
    utilisateurs = [];//creer un tableau vide au cas ou utilisateur n'existe pas
}

//Verification de la présence de l'utilisateur dans le localStorage
const utilisateurTrouve = utilisateurs.find(//find est une methode qui permet de parcourir les tableau en JS
    user => user.mail === mail && user.psw === psw//user est une variable temporaire créer pour la fonction callback find
);

if (utilisateurTrouve) {
    // Connexion réussie
    alert("Connexion réussie !");
    // Tu peux rediriger vers une autre page si tu veux :
    // window.location.href = "page-profil.html";
} else {
    // Connexion échouée
    alert("Email ou mot de passe incorrect !");
}

});
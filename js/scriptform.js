//Mise ne place des fonctionnalités du formulaire 

const form = document.getElementById('formulaire');

form.addEventListener('submit', function(event) {
    event.preventDefault()

    //1-Recuperer les donées dans le localStore
    const nom = document.getElementById('nom').value;
    const mail = document.getElementById('mail');
    const psw = document.getElementById('psw');
    const verifpsw = document.getElementById('mdpverif');

    localStorage.setItem('nom', nom);
    localStorage.setItem('mail', mail.value);
    localStorage.setItem('psw', psw.value);
    localStorage.setItem('verifpsw', verifpsw.value);

    console.log(nom);


    

    
    
    
    

}
);
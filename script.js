function addition(premierNombre, secondNombre) {
    return premierNombre + secondNombre;

}

function multiplication(premierNombre, secondNombre) {
    return premierNombre * secondNombre;
   
}

function soustraction(premierNombre, secondNombre) {
    return premierNombre - secondNombre;
   
}

function division(premierNombre, secondNombre) {
    if (secondNombre == 0) {
        throw new Error("Impossible de diviser par zéro.")
    }
    return premierNombre / secondNombre;
    
}

let restart = false;
do{ 

    do {

        var choix       = Number(prompt("Que souhaitez-vous faire ? \n\n1- Addition\n2- Multiplication\n3- Soustraction\n4- Division"));

    }
    while (choix != 1 && choix != 2 && choix != 3 && choix != 4)

    do {

        var nbrUn       = Number(prompt("Entrez un premier nombre :"));
        var nbrDeux     = Number(prompt("Entrez un second nombre :"));
    }
    while (isNaN(nbrUn) || isNaN(nbrDeux))

    try{
        switch(choix) {
            case 1:
                var resultat = addition(nbrUn, nbrDeux);
                break;

            case 2:
                var resultat = multiplication(nbrUn, nbrDeux);
                break;

            case 3:
                var resultat = soustraction(nbrUn, nbrDeux);
                break;

            case 4:
                var resultat = division(nbrUn, nbrDeux);
                break;

            default:
                throw new Error("Une erreur est survenue.");
        }

        alert("Voici le résultat : "+ resultat);

    }

    catch(error) {
        alert(error);
    }

        restart = confirm("Souhaitez-vous recommencer un calcul ?"); // On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer
    
} while(restart)
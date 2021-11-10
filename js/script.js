// -----------------------------------------------------------------------------------------
// CONTROLLO EMAIL
const controlloMail = /\S+@\S+\.\S+/;

let emailValide = [
    "alessandrorega@gmail.com",
    "roberto_1@gmail.com",
    "andrea2002@gmail.com",
    "a.francesco@gmail.com",
    "mappamondo@gmail.com",
    "miaemail@gmail.com",
    "arlecchino@gmail.com",
    "matteo_bernardeschi@gmail.com",
];

// funzione controllo click
document.getElementById("invioMail").addEventListener("click", function(){

    // dichiaro le costanti
    const mail = document.getElementById("email").value;
    const esito_mail = document.getElementById("esito-mail");

    // resetto l'esito
    esito_mail.innerHTML = "Esito: ";

    // controllo se l'email è valida
    if(controlloMail.test(mail)==true){
        // controllo se l'email inserita è nel database
        for(let i = 0; i < emailValide.length; i++){
            if(mail === emailValide[i]){
                esito_mail.innerHTML += " Accesso Autorizzato"
                return;
            }
            else if(mail !== emailValide[i] && i == (emailValide.length - 1)){
                esito_mail.innerHTML += " Accesso Negato"
            }
        }
    }
    else {
        esito_mail.innerHTML += " Inserisci un email valida"
    }
});

// funzione di reset totale
document.getElementById("resetMail").addEventListener("click", function(){
    document.getElementById("email").value = '';
    document.getElementById("esito-mail").innerHTML = "Esito: ";
});


// -----------------------------------------------------------------------------------------

// GIOCO DEI DADI
document.getElementById("tiraDadi").addEventListener("click", function(){
    
    // dichiaro le costanti
    const player = document.getElementById("num-p");
    const computer = document.getElementById("num-c");
    const esitoDadi = document.getElementById("esito-dadi");

    // resetto l'html
    player.innerHTML = "Numero Giocatore:";
    computer.innerHTML = "Numero Computer:";
    esitoDadi.innerHTML = "Esito: ";

    // genero i numeri random
    let numeroGiocatore = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let numeroComputer = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    // stampo i numeri
    player.innerHTML += (' ' + numeroGiocatore);
    computer.innerHTML += (' ' + numeroComputer);

    // controllo chi ha vinto
    if(numeroGiocatore > numeroComputer){
        esitoDadi.innerHTML += " Hai vinto";
    }
    else if (numeroGiocatore < numeroComputer){
        esitoDadi.innerHTML += " Hai perso";
    }
    else {
        esitoDadi.innerHTML += " Pareggio";
    }
});

// funzione di reset totale
document.getElementById("resetDadi").addEventListener("click", function(){
    document.getElementById("num-p").innerHTML = "Numero Giocatore:";
    document.getElementById("num-c").innerHTML = "Numero Computer:";
    document.getElementById("esito-dadi").innerHTML = "Esito: ";
});
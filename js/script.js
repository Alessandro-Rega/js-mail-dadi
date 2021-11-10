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
document.getElementById("invio").addEventListener("click", function(){
    const mail = document.getElementById("email").value;
    const esito_mail = document.getElementById("esito-mail");
    esito_mail.innerHTML = "Esito: ";
    if(controlloMail.test(mail)==true){
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

document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("email").value = '';
    document.getElementById("esito-mail").innerHTML = "Esito: ";
});


// -----------------------------------------------------------------------------------------

// GIOCO DEI DADI
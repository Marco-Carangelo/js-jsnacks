'use strict'

//Generiamo un numero random da 0 a 10
const randomNumber = Math.floor(Math.random() * 11);

//Stampa di controllo temporanea per verificare il funzionamento del programma 
//console.log(randomNumber); 

//Chiediamo all'utente di inserire un suo numero

const userNumber = parseInt(Number(prompt("inserire un numero da 0 a 10")))

//Validiamo il dato inserito dall'utente e proseguiamo solo se viene inserito un valore numerico da 0 a 10

if (userNumber < 0 || userNumber > 10 || isNaN(userNumber)) {

    alert("Il valore inserito non è valido. Riprovare inserendo un numero da 0 a 10");


} else {
    //Verifichiamo se il numero generato casualmente è uguale a quello inserito dall'utente

    if (randomNumber === userNumber) {

        alert("Complimenti hai indovinato il numero vincente");

    } else {

        alert("Hai perso, non hai indovinato il numero vincente");

    }
}


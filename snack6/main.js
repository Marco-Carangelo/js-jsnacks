'use strict'

//Generiamo un numero random da 0 a 10
const randomNumber = Math.floor(Math.random() * 11);

//Stampa di controllo temporanea per verificare il funzionamento del programma 
//console.log(randomNumber); 

//Chiediamo all'utente di inserire un suo numero

const userNumber = parseInt(Number(prompt("inserire un numero da 0 a 10")))

//Verifichiamo se il numero generato casualmente è uguale a quello inserito dall'utente

if (randomNumber === userNumber) {

    console.log("Complimenti hai indovinato il numero vincente");

} else {

    console.log("Hai perso, non hai indovinato il numero vincente");

}
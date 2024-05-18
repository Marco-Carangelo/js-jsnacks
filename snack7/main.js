'use strict'

//Creiamo un ciclo for con un indice che parte da 1 e che stampi 1000/2 numeri. In questo modo basterà stampare il prodotto dell'indice corrente e 2

// for (let i = 1; i <= 500; i++) {


//     console.log(`${i}. ${i * 2}`)

// }


//****** Modifica del programma precedente ******

//Chiedemo all'utente il numero massimo a cui arrivare nella stampa della tabellina

const userNumber = parseInt(Number(prompt("Inserire il numero fino al quale stampare la tabellina del due")));

if (userNumber < 1 || isNaN(userNumber)) {

    alert("Inserire un valore numerico valido e riprovare");

} else {
    for (let i = 1; i <= userNumber / 2; i++) {


        console.log(`${i}. ${i * 2}`);

    }
}


'use strict'

// Dichiarazione delle variabili e acquisizione dati tramite prompt

const num1 = Number(prompt('Inserire il primo numero'));
const num2 = Number(prompt('Inserire il secondo numero'));


//Verifica numero maggiore

if (num1 > num2) {

    console.log(`Il primo numero ${num1} è il maggiore`)

} else {
    if (num2 > num1) {

        console.log(`Il secondo numero ${num2} è il maggiore`)


    } else {
        console.log('I due numeri sono uguali.')
    }
}


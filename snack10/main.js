'use strict'

//Iniziamo chiedendo all'utente di inserire un primo numero

let firstNumber = parseFloat(Number(prompt("Inserisci un nummero:")));

//Verifichiamo che l'utente abbia effettivamente inserito un numero 

if (!isNaN(firstNumber)) {

    //Entriamo in un civlo for senza condizione. La condizione d'uscita si verificherà all'interno del ciclo stesso
    for (let i = 0; ; i++) {

        let secondNumber = parseFloat(Number(prompt("Inserisci un nummero:")));

        if (!isNaN(secondNumber)) {

            if (secondNumber === firstNumber) {

                alert(`Sono stati inseriti due numeri uguali in sequenza
                       ****** Termine del programma ******
                
                 `);
                break;

            }

        } else {

            alert("Questo programma accetta solo numeri in input, riprovare inserendo un valore valido");
            break;


        }
        firstNumber = secondNumber;

    }

} else {

    alert("Questo programma accetta solo numeri in input, riprovare inserendo un valore valido");

}
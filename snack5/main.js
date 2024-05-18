'use strict'

//Creazione dell'array  vuoto

const userArray = [];

//Richiesta di 6 numeri all'utente,verifica se i numeri sono dispari e popolamento dell'array nel caso lo siano

for (let i = 0; i < 6; i++) {

    //Richiesta di un numero tramite prompt
    const userNumber = parseFloat(Number(prompt(`Inserire il ${i + 1}° numero:`)))

    //Verifica se il numero è dispari ed eventuale inserimento nell'array

    if (userNumber % 2 != 0) {

        userArray.push(userNumber);



    }

}

for (let i = 0; i < userArray.length; i++) {

    //Stampa della posizione dell'array appena creata

    console.log(userArray[i]);

}
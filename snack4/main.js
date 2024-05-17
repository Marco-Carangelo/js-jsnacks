
//Inizializzazione dell'array con la lista degli invitati

const guests = ['Gaetano', 'Marco', 'Giovanni', 'Luca', 'Mattia'];

//Richiesta del nome dell'utente tramite prompt

const userName = prompt('Inserisci il tuo nome');

//Confronto del nome inserito dall'utente con ogni valore dell'array

let invited = false; // Variabile booleana per verificare se l'utente è nella lista

for (let i = 0; i < guests.length; i++) {

    if (guests[i] === userName) {

        invited = true;
    }
}

//Stampa del risultato del confronto
if (invited) {

    console.log('Sei nella lista degli invitati')

} else {

    console.log('Non sei nella lista degli invitati')

}
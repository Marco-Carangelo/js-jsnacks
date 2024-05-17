
//Dichiarazione delle variabli

let sum = 0;

//Ciclo For per acquisire i 10 numeri dall'utente
for (let i = 0; i < 10; i++) {

    const userNum = parseFloat(Number(prompt(`Inserire il numero ${i + 1} da sommare:`)));
    sum += userNum;

}

//Stampa del risultato della somma

console.log(`La somma dei numeri inseriti è ${sum}`)
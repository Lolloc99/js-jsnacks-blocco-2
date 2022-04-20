// Snack 1

/*
jsnack1. Il software deve chiedere per 5 volte all'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

let somma = 0;

// for (let i = 0; i < 5; i++) {
//     let num = parseInt(prompt("Inserisci un numero"));
//     somma += num;
// }

let stack = 0;

while (stack < 5) {
    let num = parseInt(prompt("Inserisci un numero"));
    somma += num;
    stack++;
}

console.log(somma);
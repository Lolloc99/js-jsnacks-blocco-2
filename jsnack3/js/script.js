// Snack 3

/*
jsnack3. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.
*/

const num = parseInt(prompt("Inserisci il numero limite per l'elevazione al cubo"));

// Con ciclo while ↓
/*
let stack = 1;
while (stack <= num) {
    let potenza = stack * stack * stack;
    console.log("L'attuale numero è:", stack, "la sua elevazione al cubo è:", potenza);
    stack++;
}
*/

// Con ciclo for ↓
for (let i = 1; i <= num; i++) {
    stack = i * i * i;
    console.log("L'attuale numero è:", i, "la sua elevazione al cubo è:", stack);
}
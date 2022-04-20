// Snack 2

/*
jsnack2. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

const nomi = ["Carlo", "Sara", "Vitantonio", "Zefiro", "Nicola", "Ludovica", "Olga"];
const cognomi = ["Alberti", "Rossi", "Armani", "Colombi", "Portoni", "Dentini", "Vasetti"];
const listaPersone = [];

for (let i = 0; i < 3; i++) {
    const nomeP = nomi[Math.floor(Math.random()*nomi.length)];
    const cognomeP = cognomi[Math.floor(Math.random()*cognomi.length)];
    const persona = `${nomeP} ${cognomeP}`;

    listaPersone.push(persona);
}

console.log(listaPersone);
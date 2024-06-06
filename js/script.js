/* 
--- GENERAZIONE CARD NEL DOM
*/

// Inserisco il div row all'interno di una variabile
const row = document.querySelector(".row");

// Generiamo i quadrati
for (let i = 0;  i < 10; i++) {
    console.log(i);

    // Creiamo il div col generico
    const col = document.createElement("div");
    // Aggiungiamo la classe col
    col.classList.add("col");

    // Creiamo il div card generico
    const card = document.createElement("div");
    // Aggiungiamo la classe col
    card.classList.add("card");


    // Aggiungere il contenuto al div
    col.append(card);

    // Aggiungere il div alla row
    row.append(col);
}
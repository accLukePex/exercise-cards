/* 
--- FUNZIONE PER GENERARE LE CARD
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



function populateCardsWithImages(cats) {
    // seleziono le cards
    const cards = document.querySelectorAll('.card');

    cats.forEach((cat, index) => {
        if (cards[index]) {
            const img = document.createElement('img');
            img.src = cat.url;

            cards[index].innerHTML = '';

            cards[index].append(img);
        }
    })
}

/*
--- CHIAMATA API
*/

// URL dell'API
const url = 'https://api.thecatapi.com/v1/images/search?limit=10';

// Effettuare la chiamata GET usando fetch
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        populateCardsWithImages(data);
    })
    .catch(error => console.error('Error fetching the cat images:', error));




/*
--- LOAD MORE BUTTON
*/


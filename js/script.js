// Inserisco il div row all'interno di una variabile
const row = document.querySelector(".row");

// Generiamo i quadrati
for (let i = 0;  i < 30; i++) {
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

// ----------------------------------------


// FUNZIONE PER POPOLARE LE CARD CON LE IMMAGINI DEI GATTI
function populateCardsWithImages(cats) {
    // seleziono le cards
    const cards = document.querySelectorAll('.card');

    cats.forEach((cat, index) => {
        if (cards[index]) {
            // Creo l'elemento img e imposto l'attributo src all'URL dell'immagine
            const img = document.createElement('img');
            img.src = cat.url;

            // Rimuovo i precedenti contenuti della card
            cards[index].innerHTML = '';

            // Aggiungo l'immagine al div card
            cards[index].append(img);
        }
    });
}


// --------------------------------------


/*
--- CHIAMATA API
*/

// URL dell'API
const url = 'https://api.thecatapi.com/v1/images/search?limit=10';

// Effettuo la chiamata GET usando fetch
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

let loadmore = document.querySelector('.load-more');
let currentItem = 10;

loadmore.addEventListener("click",

    function() {
        let columns = [...document.querySelectorAll('.col')];

        for (let i = currentItem; i < currentItem + 10; i++) {
            columns[i].style.display = 'inline-block';
        }
        currentItem += 10;

        if(currentItem >= columns.length) {
            loadmore.style.display = 'none';
        }
    }
)
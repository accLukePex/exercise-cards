"use strict";
// LOADER INIZIALE
document.addEventListener("DOMContentLoaded", function () {
    // Nascondi il loader e mostra il contenuto della pagina
    const loader = document.getElementById("loader");
    const container = document.querySelector(".container");
    // Aggiungi un piccolo ritardo per simulare il caricamento
    setTimeout(function () {
        loader.classList.add("hidden");
        container.style.display = "block";
    }, 2000); // 2 secondo di ritardo
});
// Inserisco il div row all'interno di una variabile
const row = document.querySelector(".row");
// FUNZIONE PER POPOLARE LE CARD CON LE IMMAGINI DEI GATTI
function populateCardsWithImages(cats) {
    cats.forEach(cat => {
        // Creiamo il div card generico
        const card = document.createElement("div");
        // Aggiungiamo la classe col
        card.classList.add("card");
        // Creo l'elemento img e imposto l'attributo src all'URL dell'immagine
        const img = document.createElement('img');
        img.src = cat.url;
        img.setAttribute('tabindex', '0');
        // Aggiungo l'immagine al div card
        card.append(img);
        // Aggiungo la card alla row
        row.append(card);
    });
}
// FUNZIONE DI CARICAMENTO IMMAGINI TRAMITE API
function loadCards() {
    // URL dell'API
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
    // Effettuo la chiamata GET usando fetch
    fetch(url)
        .then(response => response.json())
        .then((data) => {
        console.log(data);
        populateCardsWithImages(data);
    })
        .catch(error => {
        console.error('Error fetching the cat images:', error);
        showError('Failed to load cat images. Please try again later.');
    });
}
// FUNZIONE PER MESSAGGIO DI ERRORE
function showError(message) {
    // Inserisco il pulsante load-more dentro ad una variabile
    let loadmore = document.querySelector('.load-more');
    const errorContainer = document.getElementById('error-container');
    const errorCatImage = document.getElementById('error-cat-img');
    errorContainer.innerHTML = message;
    errorContainer.classList.remove('hidden');
    errorCatImage.classList.remove('hidden');
    loadmore.style.display = 'none';
}
function enterKey(event) {
    if (event.key === 'Enter') {
        loadmoreCards();
    }
}
// FUNZIONE DI CARICAMENTE NUOVE IMMAGINI
function loadmoreCards() {
    // Inserisco il pulsante load-more dentro ad una variabile
    let loadmore = document.querySelector('.load-more');
    // Inserisco il div mini-loader dentro ad una variabile
    const miniLoader = document.getElementById("mini-loader");
    // Rimuovo la classe hidden dal mini-loader per renderlo visibile
    miniLoader.classList.remove("hidden");
    // Aggiungo display:none al pulsante 
    loadmore.style.display = 'none';
    setTimeout(() => {
        loadCards();
        miniLoader.classList.add("hidden");
        // Ri-aggiungo display: inline-block per rendere di nuovo visibile il pulsante
        loadmore.style.display = 'inline-block';
    }, 1000); // 2 secondi di durata del mini loader 
}
// // Generiamo i quadrati
// for (let i = 0;  i < 30; i++) {
//     console.log(i);
//     // Creiamo il div col generico
//     const col = document.createElement("div");
//     // Aggiungiamo la classe col
//     col.classList.add("col");
//     // Creiamo il div card generico
//     const card = document.createElement("div");
//     // Aggiungiamo la classe col
//     card.classList.add("card");
//     // Aggiungere il contenuto al div
//     col.append(card);
//     // Aggiungere il div alla row
//     row.append(col);
// }
// ----------------------------------------
// // FUNZIONE PER POPOLARE LE CARD CON LE IMMAGINI DEI GATTI
// function populateCardsWithImages(cats) {
//     // seleziono le cards
//     const cards = document.querySelectorAll('.card');
//     cats.forEach((cat, index) => {
//         if (cards[index]) {
//             // Creo l'elemento img e imposto l'attributo src all'URL dell'immagine
//             const img = document.createElement('img');
//             img.src = cat.url;
//             // Rimuovo i precedenti contenuti della card
//             cards[index].innerHTML = '';
//             // Aggiungo l'immagine al div card
//             cards[index].append(img);
//         }
//     });
// }
// --------------------------------------
/*
--- CHIAMATA API
*/
// URL dell'API
// const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
// // Effettuo la chiamata GET usando fetch
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         populateCardsWithImages(data);
//     })
//     .catch(error => console.error('Error fetching the cat images:', error));
// --------------------------------------
/*
--- LOAD MORE BUTTON
*/
// let loadmore = document.querySelector('.load-more');
// let currentItem = 10;
// loadmore.addEventListener("click",
//     function() {
//         let columns = [...document.querySelectorAll('.col')];
//         for (let i = currentItem; i < currentItem + 10; i++) {
//             // columns[i].style.display = 'inline-block';
//         }
//         currentItem += 10;
//         if(currentItem >= columns.length) {
//             loadmore.style.display = 'none';
//         }
//     }
// )

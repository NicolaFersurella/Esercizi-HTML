// Array per memorizzare i voti
const voti = [];

// Riferimenti agli elementi del DOM
const inputVoto = document.getElementById('votoInput');
const btnAggiungi = document.getElementById('addBtn');
const listaUl = document.getElementById('listaVoti');
const displayMedia = document.getElementById('mediaValore');
const displayErrore = document.getElementById('errorMessage');
const displayIcona = document.getElementById('statusIcon');

btnAggiungi.addEventListener('click', function() {
    const valore = parseFloat(inputVoto.value);

    // 1. Validazione
    if (isNaN(valore) || valore < 1 || valore > 10) {
        displayErrore.textContent = "Errore: inserisci un numero tra 1 e 10.";
        return;
    }

    // Reset errore se l'input è valido
    displayErrore.textContent = "";

    // 2. Logica Array
    voti.push(valore);

    // 3. Visualizzazione Lista
    const nuovoItem = document.createElement('li');
    nuovoItem.textContent = `Voto inserito: ${valore}`;
    listaUl.appendChild(nuovoItem);

    // 4. Calcolo Media
    aggiornaMedia();

    // Pulizia input
    inputVoto.value = "";
    inputVoto.focus();
});

function aggiornaMedia() {
    // Somma i voti usando reduce
    const somma = voti.reduce((acc, curr) => acc + curr, 0);
    const media = somma / voti.length;
    
    // Formattazione a 2 decimali
    const mediaFormattata = media.toFixed(2);
    displayMedia.textContent = mediaFormattata;

    // 5. Stile condizionale e Icone
    if (media < 6) {
        displayMedia.className = "media-insufficiente";
        displayIcona.textContent = "👎"; // Pollice in giù
    } else {
        displayMedia.className = "media-sufficiente";
        displayIcona.textContent = "👍"; // Pollice in su
    }
}
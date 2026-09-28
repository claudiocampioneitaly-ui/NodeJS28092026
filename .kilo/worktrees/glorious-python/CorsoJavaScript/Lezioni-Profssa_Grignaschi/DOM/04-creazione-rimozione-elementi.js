/* ==========================================================================
   CREAZIONE, INSERIMENTO E RIMOZIONE DI ELEMENTI NEL DOM
   ========================================================================== */

console.log('==================================================');
console.log('  04 - CREAZIONE, INSERIMENTO E RIMOZIONE ELEMENTI');
console.log('==================================================\n');

/* --------------------------------------------------------------------------
   1. CREAZIONE E INSERIMENTO (createElement, appendChild, append, prepend)
   -------------------------------------------------------------------------- */
console.log('--- 1. CREAZIONE E INSERIMENTO DI ELEMENTI ---');

const contenitoreCard = document.getElementById('contenitore-card');

// PASSAGGIO 1: Creare l'elemento in memoria (non è ancora visibile nella pagina)
const nuovaCard = document.createElement('div'); //createElement crea il tag, ma non lo inserisce nel DOM

// PASSAGGIO 2: Configurare proprietà, classi e contenuto dell'elemento
nuovaCard.classList.add('card-dinamica'); //classList.add aggiunge una classe all'elemento div creata con createElement
nuovaCard.id = 'card-1'; //id assegna un id all'elemento div creata con createElement

const titoloCard = document.createElement('h3');
titoloCard.textContent = 'Card Generata via JavaScript'; //textContent inserisce testo all'interno dell'elemento

const testoCard = document.createElement('p');
testoCard.textContent = 'Questo elemento è stato creato interamente con document.createElement() e aggiunto al DOM.';

// Assembliamo la struttura interna della card (i figli della card)
nuovaCard.appendChild(titoloCard);
nuovaCard.appendChild(testoCard);

// PASSAGGIO 3: Inserire l'elemento nel DOM vero e proprio

// A) .appendChild(nodo): Aggiunge il nodo come ULTIMO figlio di un contenitore.
contenitoreCard.appendChild(nuovaCard);
console.log('Nuova card aggiunta in fondo con appendChild()');

// B) .append(...nodiOSimboli): Metodo moderno. Permette di aggiungere più elementi O direttamente stringhe di testo in fondo.
const badgeFine = document.createElement('span');
badgeFine.classList.add('badge-nuovo');
badgeFine.textContent = 'In Fondo';
contenitoreCard.append('Testo aggiunto al volo: ', badgeFine);

// C) .prepend(...nodiOSimboli): Aggiunge elementi/testo come PRIMO figlio del contenitore.
const badgeInizio = document.createElement('span');
badgeInizio.classList.add('badge-nuovo');
badgeInizio.textContent = 'In Testa';
contenitoreCard.prepend(badgeInizio);

/* --------------------------------------------------------------------------
   2. POSIZIONAMENTO PRECISO (insertBefore, insertAdjacentHTML)
   -------------------------------------------------------------------------- */
console.log('\n--- 2. POSIZIONAMENTO AVANZATO ---');

const lista = document.getElementById('lista-tutorial');
const step2 = document.getElementById('step-2');

// A) parent.insertBefore(nuovoNodo, nodoRiferimento)
// Inserisce 'nuovoNodo' subito PRIMA di 'nodoRiferimento'
const step1 = document.createElement('li');
step1.id = 'step-1';
step1.textContent = 'Passo 1: Definire i requisiti';

lista.insertBefore(step1, step2);
console.log('Passo 1 inserito prima del Passo 2 con insertBefore()');

// B) element.insertAdjacentHTML(posizione, stringaHTML)
// Molto comodo per inserire frammenti HTML senza distruggere i listener esistenti.
// Posizioni possibili: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'

// Inseriamo il Passo 4 in fondo alla lista usando 'beforeend'
lista.insertAdjacentHTML(
  'beforeend',
  '<li id="step-4">Passo 4: Testing del codice (Inserito con insertAdjacentHTML)</li>'
);

// Inseriamo una nota prima della lista usando 'beforebegin'
lista.insertAdjacentHTML('beforebegin', '<p><em>Nota: Segui gli step in ordine cronologico.</em></p>');

/* --------------------------------------------------------------------------
   3. RIMOZIONE E SOSTITUZIONE (remove, removeChild, replaceWith)
   -------------------------------------------------------------------------- */
console.log('\n--- 3. RIMOZIONE E SOSTITUZIONE ---');

// A) element.remove(): Metodo moderno ed immediato per eliminare se stessi dal DOM
const elementoDaRimuovere = document.getElementById('elemento-da-eliminare');

console.log("Eliminazione dell'elemento 'elemento-da-eliminare'...");
elementoDaRimuovere.remove();

// B) parent.removeChild(figlio): Metodo classico/storico per rimuovere un figlio
// (Utile se abbiamo un riferimento al genitore ma dobbiamo ancora salvare il nodo rimosso)
const contenitoreRimozione = document.getElementById('contenitore-rimozione');
// Se volessimo usare il metodo legacy:
// contenitoreRimozione.removeChild(elementoDaRimuovere);

// C) element.replaceWith(nuovoElemento): Sostituisce direttamente l'elemento nel DOM
const elementoDaSostituire = document.getElementById('elemento-da-sostituire');

const elementoSostituto = document.createElement('div');
elementoSostituto.classList.add('card-dinamica');
elementoSostituto.innerHTML =
  '<strong>Elemento Sostitutivo:</strong> Il vecchio paragrafo è stato rimpiazzato con successo usando <code>replaceWith()</code>.';

elementoDaSostituire.replaceWith(elementoSostituto);
console.log('Elemento sostituito con replaceWith()');

/* --------------------------------------------------------------------------
   4. RIEPILOGO METODI PER GLI STUDENTI
   -------------------------------------------------------------------------- */
/*CONFRONTO METODI INSERIMENTO

.appendChild(nodo) -> Aggiunge 1 singolo NODO in fondo.
.append(...nodi/stringhe) -> Aggiunge più NODI o TESTO in fondo (moderno).
.prepend(...nodi/stringhe) -> Aggiunge più NODI o TESTO all'inizio (moderno).
.insertBefore(nodo, rif) -> Inserisce un NODO prima di un nodo di riferimento.
.insertAdjacentHTML() -> Inserisce direttamente stringhe HTML in posizioni precise.
.remove() -> Rimuove direttamente l'elemento dal DOM*/

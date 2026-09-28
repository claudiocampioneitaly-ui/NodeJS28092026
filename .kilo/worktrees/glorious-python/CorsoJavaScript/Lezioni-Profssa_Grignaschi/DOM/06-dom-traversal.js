/* ==========================================================================
   NAVIGAZIONE NEL DOM (TRAVERSAL) ED EVENT DELEGATION
   ========================================================================== */

console.log('==================================================');
console.log('DOM TRAVERSAL ED EVENT DELEGATION');
console.log('==================================================\n');

/* --------------------------------------------------------------------------
   1. NAVIGAZIONE RELATIVA (parentElement, children, siblings)
   -------------------------------------------------------------------------- */
console.log('--- 1. NAVIGAZIONE RELATIVA ---');

// Partiamo dall'elemento centrale
const target = document.getElementById('figlio-target');
console.log('Elemento di partenza (figlio-target):', target);

// A) RISALIRE IL DOM (Genitori)
const genitore = target.parentElement;
console.log('1A. Genitore diretto (.parentElement):', genitore);

const nonno = target.parentElement.parentElement;
console.log('    Nonno (.parentElement.parentElement):', nonno);

// B) SPOSARSI ORIZZONTALMENTE (Fratelli / Siblings)
const fratelloPrecedente = target.previousElementSibling;
console.log('1B. Fratello precedente (.previousElementSibling):', fratelloPrecedente);

const fratelloSuccessivo = target.nextElementSibling;
console.log('    Fratello successivo (.nextElementSibling):', fratelloSuccessivo);

// C) SCENDERE IL DOM (Figli)
console.log('1C. Tutti i figli del genitore (.children):', genitore.children); // HTMLCollection
console.log('    Primo figlio (.firstElementChild):', genitore.firstElementChild);
console.log('    Ultimo figlio (.lastElementChild):', genitore.lastElementChild);

/* --------------------------------------------------------------------------
   2. RISALITA INTELLIGENTE CON element.closest(selettoreCSS)
   -------------------------------------------------------------------------- */
console.log('\n--- 2. RISALITA CON .closest() ---');

// .closest() parte dall'elemento stesso e risale l'albero del DOM
// finché non trova il primo antenato che corrisponde al selettore CSS.
const contenitoreNonnoViaClosest = target.closest('.nonno');
console.log("Antenato con classe '.nonno' trovato con .closest():", contenitoreNonnoViaClosest);

/* --------------------------------------------------------------------------
   3. DELEGAZIONE DEGLI EVENTI (EVENT DELEGATION)
   -------------------------------------------------------------------------- */
console.log('\n--- 3. EVENT DELEGATION ---');

const listaTask = document.getElementById('lista-task');
const inputTask = document.getElementById('nuova-task-input');
const btnAggiungi = document.getElementById('btn-aggiungi-task');

// INVECE di mettere un eventListener su ogni singolo pulsante,
// inseriamo UN UNICO eventListener sulla lista genitore (<ul>)!
listaTask.addEventListener('click', e => {
  // e.target indica esattamente l'elemento cliccato (es. il <button>)
  const elementoCliccato = e.target;

  // Gestione pulsante "Elimina"
  if (elementoCliccato.classList.contains('btn-elimina')) {
    // Risaliamo dall'elemento cliccato fino al tag <li> corrispondente
    const rigaTask = elementoCliccato.closest('li');
    console.log('Rimozione task:', rigaTask.querySelector('span').textContent);
    rigaTask.remove();
  }

  // Gestione pulsante "Fatto" / Completa
  if (elementoCliccato.classList.contains('btn-completa')) {
    const rigaTask = elementoCliccato.closest('li');
    rigaTask.classList.toggle('completato');
    console.log('Stato task modificato per:', rigaTask.querySelector('span').textContent);
  }
});

// Funzione per inserire una nuova task dinamicamente
btnAggiungi.addEventListener('click', () => {
  const testoTask = inputTask.value.trim();

  if (testoTask === '') {
    alert('Inserisci del testo per la task!');
    return;
  }

  // Creazione dinamica del nuovo <li>
  const nuovaLi = document.createElement('li');
  nuovaLi.innerHTML = `
    <span>${testoTask}</span>
    <div>
      <button class="btn-completa">Fatto</button>
      <button class="btn-elimina">Elimina</button>
    </div>
  `;

  // Aggiungiamo la nuova task alla lista
  listaTask.appendChild(nuovaLi);
  inputTask.value = ''; // Pulisce l'input

  console.log("Nuova task creata! I pulsanti funzionano automaticamente grazie all'Event Delegation.");
});

/* --------------------------------------------------------------------------
   4. PERCHÉ USARE L'EVENT DELEGATION? 
   -------------------------------------------------------------------------- */
/*MEMORIA: Un solo Event Listener invece di decine/centinaia su ogni pulsante.
ELEMENTI DINAMICI: Funziona nativamente anche sugli elementi generati in futuro tramite JS.
CODICE PULITO: Meno righe di codice per gestire liste, tabelle o menu complessi. */

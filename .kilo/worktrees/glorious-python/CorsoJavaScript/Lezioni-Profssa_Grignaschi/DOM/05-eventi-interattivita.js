/* ==========================================================================
   GESTIONE DEGLI EVENTI E INTERATTIVITÀ NEL DOM
   ========================================================================== */

console.log('==================================================');
console.log('  05 - EVENTI E INTERATTIVITÀ NEL DOM');
console.log('==================================================\n');

/* --------------------------------------------------------------------------
   1. EVENTI DEL MOUSE (click, mouseenter, mouseleave) E OGGETTO EVENT
   -------------------------------------------------------------------------- */
console.log('--- 1. EVENTI MOUSE E CONTATORE ---');
//const  btnIncrementa è un collegamento con id="btn-incrementa"
const btnIncrementa = document.getElementById('btn-incrementa');
//constante btnDecrementaè un collegamento con id="btn-decrementa"
const btnDecrementa = document.getElementById('btn-decrementa');
//constante valoreContatoreè un collegamento con id="valore-contatore"
const valoreContatore = document.getElementById('valore-contatore');
let contatore = 0;

// listener di eventi: element.addEventListener(tipoEvento, callback)
btnIncrementa.addEventListener('click', event => {
  contatore++; 
  valoreContatore.innerHTML = "<h1 style='color:red;'>" + contatore + " test </h1>";
  console.log('Pulsante incremento cliccato. Nuovo valore:', contatore);
  console.log("Elemento che ha scatenato l'evento (event.target):", event.target);
});

btnDecrementa.addEventListener('click', () => {
  contatore--;
  valoreContatore.textContent = contatore;
  console.log('Pulsante decremento cliccato. Nuovo valore:', contatore);
});

// Eventi al passaggio del mouse
const areaHover = document.getElementById('area-hover');

areaHover.addEventListener('mouseenter', () => {
  areaHover.classList.add('attivo');
  areaHover.textContent = "Il mouse è DENTRO l'area!";
});

areaHover.addEventListener('mouseleave', () => {
  areaHover.classList.remove('attivo');
  areaHover.textContent = 'Passa il mouse sopra questa zona oppure cliccala!';
});

areaHover.addEventListener('click', e => {
  // L'oggetto evento (e) contiene coordinate spaziali del click
  console.log(`Click registrato alle coordinate X: ${e.clientX}, Y: ${e.clientY}`);
});

/* --------------------------------------------------------------------------
   2. EVENTI DA TASTIERA E INPUT IN TEMPO REALE (input, keydown)
   -------------------------------------------------------------------------- */
console.log('\n--- 2. EVENTI INPUT E TASTIERA ---');

const campoTesto = document.getElementById('campo-testo');
const anteprimaTesto = document.getElementById('anteprima-testo');
const tastoPremuto = document.getElementById('tasto-premuto');

// L'evento 'input' scatta ad ogni singola modifica del valore nel campo
campoTesto.addEventListener('input', e => {
  const testoDigitato = e.target.value; // Oppure campoTesto.value
  anteprimaTesto.textContent = testoDigitato !== '' ? testoDigitato : '---';
});

// L'evento 'keydown' rileva la pressione dei tasti fisici sulla tastiera
campoTesto.addEventListener('keydown', e => {
  tastoPremuto.textContent = `Tasto: ${e.key} (Codice: ${e.code})`;

  if (e.key === 'Enter') {
    console.log('Tasto INVIO premuto! Valore inviato:', campoTesto.value);
  }
});

/* --------------------------------------------------------------------------
   3. GESTIONE FORM E PREVENZIONE DEL COMPORTAMENTO DI DEFAULT (submit)
   -------------------------------------------------------------------------- */
console.log('\n--- 3. EVENTO SUBMIT DEL FORM ---');

const form = document.getElementById('form-registrazione');
const inputEta = document.getElementById('eta-input');
const messaggioErrore = document.getElementById('messaggio-errore');
const esitoForm = document.getElementById('esito-form');

form.addEventListener('submit', e => {
  // FONDAMENTALE: Impedisce il ricaricamento automatico della pagina causato dal form
  e.preventDefault();

  console.log('Tentativo di invio form intercettato con e.preventDefault()!');

  const eta = parseInt(inputEta.value, 10);

  // Validazione personalizzata
  if (isNaN(eta) || eta < 18) {
    messaggioErrore.style.display = 'block';
    esitoForm.textContent = '';
    console.warn('Invio bloccato: Età insufficiente o non valida.');
  } else {
    messaggioErrore.style.display = 'none';
    esitoForm.textContent = '✅ Registrazione completata con successo!';
    console.log('Form valido. Dati inviati con successo!');

    // Reset opzionale del modulo
    form.reset();
    anteprimaTesto.textContent = '---';
  }
});

/* --------------------------------------------------------------------------
   4. RIMOZIONE DI UN LISTENER (removeEventListener)
   -------------------------------------------------------------------------- */
console.log('\n--- RIMOZIONE EVENTI ---');

function messaggioMonouso() {
  console.log("Questo messaggio appare solo la PRIMA volta che clicchi sull'area hover!");
  // Rimuove il listener specificando lo stesso tipo di evento e la stessa funzione riferimento
  areaHover.removeEventListener('click', messaggioMonouso);
}

// Aggiungiamo il listener temporaneo
areaHover.addEventListener('click', messaggioMonouso);

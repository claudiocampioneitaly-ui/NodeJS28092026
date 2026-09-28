/* ==========================================================================
   MODIFICA DEGLI STILI CSS E GESTIONE DELLE CLASSI
   ========================================================================== */

console.log('==================================================');
console.log('  03 - MODIFICA STILI CSS E CLASSI');
console.log('==================================================\n');

/* --------------------------------------------------------------------------
   1. APPLICAZIONE DI STILI INLINE (element.style)
   -------------------------------------------------------------------------- */
console.log('--- 1. STILI INLINE CON element.style ---');

const boxInline = document.getElementById('box-inline');

// REGOLE DI SINTASSI JS PER GLI STILI:
// - Le proprietà CSS con il trattino (kebab-case) diventano in camelCase:
//   background-color  -> backgroundColor
//   font-size         -> fontSize
//   border-radius     -> borderRadius
// - I valori numerici richiedono l'unità di misura espressa come stringa (es. "20px")

boxInline.style.backgroundColor = '#fff3cd'; //se voglio inserire un valore che contiene un - devo usare il camelCase
boxInline.style.color = '#856404';
boxInline.style.fontSize = '18px';
boxInline.style.padding = '20px';
boxInline.style.borderLeft = '5px solid #ffeeba';

console.log('Stile inline applicato a background-color:', boxInline.style.backgroundColor);

/* --------------------------------------------------------------------------
   2. LETTURA DEGLI STILI CALCOLATI (window.getComputedStyle)
   -------------------------------------------------------------------------- */
console.log('\n--- 2. STILI CALCOLATI DAL BROWSER ---');

// NOTA: `element.style` legge SOLO gli stili definiti inline!
// Se uno stile è definito nel file CSS esterno/header, `element.style` risulterà vuoto.
// Per leggere lo stile effettivo rendering dal browser usiamo `getComputedStyle`:

const stiliCalcolati = window.getComputedStyle(boxInline); //getComputedStyle serve per leggere gli stili calcolati dal browser; cioè quelli che vedo quando vado F12inspect
console.log('Colore del testo calcolato (RGB):', stiliCalcolati.color);
console.log('Font-family calcolato dal browser:', stiliCalcolati.fontFamily);

/* --------------------------------------------------------------------------
   3. GESTIONE DELLE CLASSI CON element.classList (APPROCCIO CONSIGLIATO)
   -------------------------------------------------------------------------- */
console.log('\n--- 3. MANIPOLAZIONE DI classList ---');

const card = document.getElementById('card-demo');
const messaggio = document.getElementById('messaggio-avviso');
const statoLabel = document.getElementById('stato-label');

// A) classList.add("nome-classe"): Aggiunge una o più classi
card.classList.add('card-evidenziata');
messaggio.classList.add('testo-pericolo');
statoLabel.textContent = 'Evidenziato e Pericoloso';

console.log('Classi attuali sulla card:', card.className); // Restituisce la stringa delle classi

// B) classList.remove("nome-classe"): Rimuove una classe esistente
setTimeout(() => {
  // Simuliamo una modifica dopo un'azione (o tempo)
  //messaggio.classList.remove('testo-pericolo');
  console.log("Classe 'testo-pericolo' rimossa!");
}, 500);

// C) classList.replace("vecchiaClasse", "nuovaClasse"): Sostituisce una classe con un'altra
// Se la vecchia classe esiste, la sostituisce e restituisce true
//card.classList.replace('card-evidenziata', 'modalita-scura');
statoLabel.textContent = 'Modalità Scura Attiva';

/* --------------------------------------------------------------------------
   4. VERIFICA E TOGGLE DELLE CLASSI (contains / toggle)
   -------------------------------------------------------------------------- */
console.log('\n--- 4. CONTAINS E TOGGLE ---');

const boxToggle = document.getElementById('box-toggle');

// A) classList.contains("nome-classe"): Restituisce true/false se la classe è presente
const haModalitaScura = boxToggle.classList.contains('modalita-scura');
console.log("Il box-toggle ha la classe 'modalita-scura'?", haModalitaScura); // false

// B) classList.toggle("nome-classe"):
// - Se la classe C'È -> la rimuove (e restituisce false)
// - Se la classe NON C'È -> la aggiunge (e restituisce true)

// console.log('Primo toggle (Aggiunge la classe):');
// boxToggle.classList.toggle('modalita-scura');
// console.log("Stato attuale 'modalita-scura':", boxToggle.classList.contains('modalita-scura')); // true

console.log('Secondo toggle (Rimuove la classe):');
boxToggle.classList.toggle('modalita-scura');
console.log("Stato attuale 'modalita-scura':", boxToggle.classList.contains('modalita-scura')); // false

/* --------------------------------------------------------------------------
   5. NOTA: PERCHÉ PREFERIRE classList A element.style?
   -------------------------------------------------------------------------- */
/*USA element.style solo per valori DINAMICI che cambiano continuamente (es. coordinata X/Y del mouse, percentuale di una barra di avanzamento).
USA classList (add/remove/toggle) per tutti gli stati grafici della pagina (es. menu aperto/chiuso, tema chiaro/scuro, campo valido/invalido). In questo modo separi nettamente la Logica (JS) dallo Stile (CSS)!*/

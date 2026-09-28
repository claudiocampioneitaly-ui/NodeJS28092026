// # Esercizio 2 — Orologio asincrono

// **Argomenti coinvolti:** codice asincrono, `setTimeout`, `fs.readFile`, ordine di
// esecuzione, `__dirname`.

// ## Obiettivo

// Scrivere uno script `orologio.js` che:

// 1. Stampa subito `Avvio orologio...`.
// 2. Dopo **1 secondo** (con `setTimeout`), stampa `Tick 1`.
// 3. Dopo **2 secondi** dall'avvio, stampa `Tick 2`.
// 4. Dopo **3 secondi** dall'avvio, legge in modo **asincrono** (con `fs.readFile`, non
//    `fs.readFileSync`) un file `messaggio.txt` che si trova nella stessa cartella dello
//    script (usa `__dirname`, non un percorso scritto a mano) e ne stampa il contenuto.
// 5. Subito dopo aver programmato i tre timer, prima ancora che scatti il primo `Tick`,
//    stampa `Timer impostati, in attesa...`.

// ## Requisiti

// - Crea anche il file `messaggio.txt` con un testo a piacere, nella stessa cartella
//   dello script.
// - Non usare `fs.readFileSync`: la lettura del file deve essere asincrona.
// - Osserva e sappi spiegare l'ordine esatto in cui i messaggi appaiono in console:
//   non è l'ordine in cui le istruzioni sono scritte nel codice.
// - Gestisci l'eventuale errore di lettura del file con un `if (err) { ... }`.

// ## Output atteso (ordine)

// ```
// Avvio orologio...
// Timer impostati, in attesa...
// Tick 1              (dopo 1s)
// Tick 2              (dopo 2s)
// Contenuto del file: ...   (dopo 3s)
// ```

// La soluzione completa è in `esercizio-02-soluzione.js` (`npm run es:g1:02`).





const fs = require('fs'); //Modulo per la gestione dei file
const path = require('path'); //Modulo per la gestione dei percorsi

// 1) Messaggio immediato
console.log("Avvio orologio...");

// 5) Messaggio subito dopo aver impostato i timer
console.log("Timer impostati, in attesa...");

// 2) Tick 1 dopo 1 secondo
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log("Tick " + i);
  }, i * 1000);
}
 

// 4) Tick 3: lettura asincrona del file dopo 3 secondi
setTimeout(() => {
  const filePath = path.join(__dirname, "messaggio.txt");

  fs.readFile(filePath, "utf8", (err, contenuto) => {// callback function
    if (err) { // Controllo errori
      console.log("Errore nella lettura del file:", err.message);
      return;
    }

    console.log("Contenuto del file:", contenuto.trim());
  });
}, 3000);

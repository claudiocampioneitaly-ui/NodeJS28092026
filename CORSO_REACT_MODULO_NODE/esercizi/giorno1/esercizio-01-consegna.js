// # Esercizio 1 — Calcolatrice da riga di comando

// **Argomenti coinvolti:** primo script Node.js, `process.argv`, codice sincrono.

console.log(process.argv); // Array con gli argomenti
// [ 'C:\\Program Files\\nodejs\\node.exe', 'C:\\Users\\RISERVATO\\Documents\\TalentForm\\MAW_FStack_JS_NodeJs-React\\NodeJs\\CORSO_REACT_MODULO_NODE\\eserci', '12', '30', 'somma' ]

// ## Obiettivo

// Scrivere uno script `calcolatrice.js` che riceva da riga di comando due numeri e un'operazione, e stampi il risultato.


// ```bash
// node calcolatrice.js 12 30 somma
// # Risultato: 42

// node calcolatrice.js 12 30 sottrazione
// # Risultato: -18

// node calcolatrice.js 12 30 moltiplicazione
// # Risultato: 360

// node calcolatrice.js 12 30 divisione
// # Risultato: 0.4
// ```

// ## Requisiti

// 1. I tre argomenti (`primoNumero`, `secondoNumero`, `operazione`) vanno letti da
//    `process.argv`.
// 2. Le operazioni supportate sono: `somma`, `sottrazione`, `moltiplicazione`, `divisione`.
// 3. Se l'operazione non è una di queste quattro, stampa un messaggio d'errore chiaro
//    e termina (`process.exit(1)`) invece di proseguire.
// 4. Se manca uno dei tre argomenti, stampa le istruzioni d'uso e termina.
// 5. In caso di divisione per zero, stampa un messaggio d'errore invece di stampare
//    `Infinity`.
// 6. Tutto il codice è **sincrono**: nessuna callback, nessuna Promise, nessun `fs`.

// ## Suggerimento

// Ricorda che gli argomenti passati da riga di comando arrivano sempre come stringhe:
// vanno convertiti in numero con `Number(...)` o `parseFloat(...)` prima di fare i calcoli.

// La soluzione completa è in `esercizio-01-soluzione.js` (`npm run es:g1:01`).


// 1) Controllo che i tre argomenti esistano
if (!process.argv[2] || !process.argv[3] || !process.argv[4]) {
  console.log("Uso corretto:");
  console.log("node calcolatrice.js <num1> <num2> <operazione>");
  console.log("Operazioni disponibili: somma, sottrazione, moltiplicazione, divisione");
  process.exit(1);//Termina il processo con un codice di errore
}

// Leggo gli argomenti da riga di comando
const primoNumero = parseFloat(process.argv[2]);
const secondoNumero = parseFloat(process.argv[3]);
const operazione = process.argv[4];

// 2) Controllo che i numeri siano validi
if (isNaN(primoNumero) || isNaN(secondoNumero)) {
  console.log("Errore: i primi due argomenti devono essere numeri.");
  process.exit(1);
}

// 3) Gestione operazioni
let risultato;

switch (operazione) {
  case "somma":
    risultato = primoNumero + secondoNumero;
    break;

  case "sottrazione":
    risultato = primoNumero - secondoNumero;
    break;

  case "moltiplicazione":
    risultato = primoNumero * secondoNumero;
    break;

  case "divisione":
    if (secondoNumero === 0) {
      console.log("Errore: divisione per zero non consentita.");
      process.exit(1);
    }
    risultato = primoNumero / secondoNumero;
    break;

  default:
    console.log("Errore: operazione non riconosciuta.");
    console.log("Operazioni valide: somma, sottrazione, moltiplicazione, divisione");
    process.exit(1);
}

// 4) Output finale
console.log("Risultato:", risultato);


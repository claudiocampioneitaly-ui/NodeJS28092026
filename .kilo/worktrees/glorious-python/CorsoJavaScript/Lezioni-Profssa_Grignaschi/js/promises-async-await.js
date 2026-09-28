// CREAZIONE DI UNA PROMISE

// Si usa il costruttore new Promise(), che riceve una funzione
// (l'executor) con due parametri: resolve e reject.

function caricaUtente(id) {
  return new Promise((resolve, reject) => { //Promise((resolve, reject) -> sono solo i nomi delle variabili, potrei scrivere anche new Promise((r, r1) => { e avrebbe lo stesso risultato.. questi parametri di ingresso non vengono usati quando si chiama la funzione, ma vengono usati da chi consuma la promise, cioè da chi userà il .then().catch() o .finally().
    setTimeout(() => { //setTimeout-> la funzione che simula il ritardo, l'attesa di 2 secondi.
      if (id > 0) { //se l'id è maggiore di 0, allora la promise viene risolta con successo
        resolve({id: id, nome: 'Mario', cognome: 'Rossi'}); //resolve-> viene chiamata quando la promise viene risolta con successo
      } else {
        reject('ID utente non valido'); //reject-> viene chiamata quando la promise viene rifiutata
      }
    }, 2000); // simula 2 secondi di attesa, come una vera richiesta
  });
}

// =====================================================================
// 4. CONSUMARE UNA PROMISE: then(), catch(), finally()
// =====================================================================

// then()    -> eseguito quando la promise viene risolta con successo
// catch()   -> eseguito quando la promise viene rifiutata
// finally() -> eseguito sempre, in entrambi i casi

//La funzione seguente cerca rappresenta un finto fetch. Qui la prima promise viene chiamata con 0 come parametro in modo tale che venga rifiutata (reject) e quindi venga catturata dal catch()
caricaUtente(0) //-> id non valido->reject->catch->finally
  .then(utente => { //then-> viene chiamata quando la promise viene risolta con successo
    console.log('Utente caricato:', utente.nome, utente.cognome); //console.log-> viene chiamata quando la promise viene risolta con successo
  })
  .catch(errore => { //catch-> viene chiamata quando la promise viene rifiutata
    console.log('Errore:', errore); //console.log-> viene chiamata quando la promise viene rifiutata
  })
  .finally(() => { //finally-> viene chiamata sempre, in entrambi i casi
    console.log('Operazione completata'); //console.log-> viene chiamata sempre, in entrambi i casi
  });
// Output dopo 2 secondi: Utente caricato: Mario Rossi
//                        Operazione completata

caricaUtente(-1)
  .then(utente => {
    console.log('Utente caricato:', utente.nome);
  })
  .catch(errore => {
    console.log('Errore:', errore);
  })
  .finally(() => {
    console.log('Operazione completata');
  });

caricaUtente(1) //id valido->resolve->then->finally
  .then(utente => { //then-> viene chiamata quando la promise viene risolta con successo
    console.log('Utente caricato:', utente.nome); //console.log-> viene chiamata quando la promise viene risolta con successo
  })
  .catch(errore => { //catch-> viene chiamata quando la promise viene rifiutata (in questo caso non verrà eseguita porque la promise è risolta con successo)
    console.log('Errore:', errore); //console.log-> viene chiamata quando la promise viene rifiutata (in questo caso non verrà eseguita porque la promise è risolta con successo)
  })
  .finally(() => { //finally-> viene chiamata sempre, in entrambi i casi
    console.log('Operazione completata'); //console.log-> viene chiamata sempre, in entrambi i casi
  });


// 5. CONCATENAMENTO DELLE PROMISE (CHAINING)

// Ogni then() restituisce a sua volta una nuova promise: questo
// permette di incatenare più operazioni asincrone in sequenza.
// Quello che si passa a resolve() diventa il parametro del then() successivo — a patto di fare return della promise dentro il then().

function caricaOrdini(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {id: 101, prodotto: 'Laptop', userId: userId},
        {id: 102, prodotto: 'Mouse', userId: userId}
      ]);
    }, 1000);
  });
}

function caricaDettaglioOrdine(ordineId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({id: ordineId, prezzo: 999.99, stato: 'spedito'});
    }, 1000);
  });
}

caricaUtente(1)
  .then(utente => {
    console.log('Utente:', utente.nome);
    return caricaOrdini(utente.id);
  })
  .then(ordini => {
    console.log('Numero ordini:', ordini.length);
    return caricaDettaglioOrdine(ordini[0].id);
  })
  .then(dettaglio => {
    console.log('Dettaglio primo ordine:', dettaglio);
  })
  .catch(errore => {
    // un solo catch() finale cattura l'errore di qualsiasi then()
    // precedente nella catena
    console.log('Errore nella catena:', errore);
  });

// =====================================================================
// 6. METODI STATICI DI Promise
// =====================================================================

function caricaProdotti() {
  return new Promise(resolve => {
    setTimeout(() => resolve(['Laptop', 'Mouse', 'Tastiera']), 2000);
  });
}

function caricaCategorie() {
  return new Promise(resolve => {
    setTimeout(() => resolve(['Elettronica', 'Accessori']), 1500);
  });
}

function caricaUtenti() {
  return new Promise(resolve => {
    setTimeout(() => resolve(['Mario', 'Luigi', 'Giulia']), 1000);
  });
}

// --- Promise.all() ---
// Si risolve quando TUTTE le promise sono risolte. Se anche una sola
// viene rifiutata, Promise.all() si rifiuta subito. Le operazioni
// partono tutte insieme: il tempo totale è quello della più lenta
// (qui 2 secondi), non la somma dei tempi.

Promise.all([caricaProdotti(), caricaCategorie(), caricaUtenti()])
  .then(([prodotti, categorie, utenti]) => {
    console.log('Prodotti:', prodotti);
    console.log('Categorie:', categorie);
    console.log('Utenti:', utenti);
  })
  .catch(errore => {
    console.log('Almeno una richiesta è fallita:', errore);
  });

// --- Promise.allSettled() ---
// Aspetta che TUTTE le promise si concludano, senza mai rifiutarsi.
// Restituisce un array di oggetti { status, value } o { status, reason }.

const operazioni = [
  new Promise(resolve => setTimeout(() => resolve('Backup completato'), 1000)),
  new Promise((_, reject) => setTimeout(() => reject('Errore invio email'), 500)),
  new Promise(resolve => setTimeout(() => resolve('Log salvato'), 800))
];

Promise.allSettled(operazioni).then(risultati => {
  risultati.forEach((risultato, indice) => {
    if (risultato.status === 'fulfilled') {
      console.log(`Operazione ${indice + 1}: Successo -`, risultato.value);
    } else {
      console.log(`Operazione ${indice + 1}: Fallita -`, risultato.reason);
    }
  });
});
// Output:
// Operazione 1: Successo - Backup completato
// Operazione 2: Fallita - Errore invio email
// Operazione 3: Successo - Log salvato

// --- Promise.race() ---
// Si risolve o rifiuta non appena la PRIMA promise si conclude,
// qualunque sia l'esito.

function richiestaDati() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Dati ricevuti dal server'), 3000);
  });
}

function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject('Timeout: il server non risponde'), ms);
  });
}

Promise.race([richiestaDati(), timeout(2000)])
  .then(risultato => console.log(risultato))
  .catch(errore => console.log(errore));
// Output: Timeout: il server non risponde
// (il timeout di 2s scade prima della risposta a 3s)

// --- Promise.any() ---
// Si risolve non appena la PRIMA promise ha successo. Si rifiuta
// solo se tutte falliscono (con un AggregateError).

function richiestaServer1() {
  return new Promise(resolve => setTimeout(() => resolve('Risposta dal Server 1'), 3000));
}
function richiestaServer2() {
  return new Promise(resolve => setTimeout(() => resolve('Risposta dal Server 2'), 1000));
}
function richiestaServer3() {
  return new Promise(resolve => setTimeout(() => resolve('Risposta dal Server 3'), 2000));
}

Promise.any([richiestaServer1(), richiestaServer2(), richiestaServer3()]).then(risultato => {
  console.log('Server più veloce:', risultato);
});
// Output: Server più veloce: Risposta dal Server 2

// =====================================================================
// 7. ASYNC/AWAIT
// =====================================================================

// async e await (ES2017) sono sintassi costruita sopra le promise,
// non un meccanismo alternativo. Rendono il codice asincrono simile
// a codice sincrono, riga dopo riga.

// La parola chiave "async" prima di una funzione fa sì che quella
// funzione restituisca sempre una promise. Un return normale viene
// automaticamente incapsulato in una promise risolta.

async function saluta() {
  return 'Ciao!';
}
// equivale a:
// function saluta() { return Promise.resolve("Ciao!"); }

saluta().then(messaggio => console.log(messaggio)); // "Ciao!"

// La parola chiave "await" può essere usata SOLO dentro una funzione
// async. Mette in pausa l'esecuzione della funzione finché la promise
// non si risolve, e restituisce il valore risolto. Gli errori si
// gestiscono con try/catch, come nel codice sincrono.

async function mostraUtente() {
  try {
    console.log('Caricamento in corso...');
    const utente = await caricaUtente(0);
    console.log('Utente:', utente.nome, utente.cognome);
  } catch (errore) {
    console.log('Errore:', errore);
  } finally {
    console.log('Operazione terminata');
  }
}

mostraUtente();
// Output:
// Caricamento in corso...
// (dopo 2 secondi)
// Utente: Mario Rossi
// Operazione terminata

// =====================================================================
// 8. CONCATENAMENTO CON ASYNC/AWAIT
// =====================================================================

// Lo stesso esempio del chaining (sezione 5), riscritto con
// async/await al posto di .then(). Il codice diventa più leggibile.

async function mostraDettaglioOrdine() {
  try {
    const utente = await caricaUtente(1);
    const ordini = await caricaOrdini(utente.id);
    const dettaglio = await caricaDettaglioOrdine(ordini[0].id);
    console.log('Dettaglio:', dettaglio);
  } catch (errore) {
    console.log('Errore:', errore);
  }
}

mostraDettaglioOrdine();

// =====================================================================
// 9. ASYNC/AWAIT CON Promise.all()
// =====================================================================

// Quando più operazioni asincrone sono indipendenti tra loro e
// possono girare in parallelo, si combina await con Promise.all().

async function caricaDashboard() {
  try {
    console.log('Caricamento dashboard...');

    // le tre richieste partono contemporaneamente
    const [prodotti, categorie, utenti] = await Promise.all([caricaProdotti(), caricaCategorie(), caricaUtenti()]);

    console.log('Prodotti:', prodotti);
    console.log('Categorie:', categorie);
    console.log('Utenti:', utenti);
  } catch (errore) {
    console.log('Errore nel caricamento:', errore);
  }
}

caricaDashboard();

// Attenzione: tre await in fila SENZA Promise.all() vengono eseguiti
// in sequenza, non in parallelo. Se ognuno impiega 2 secondi, il
// totale è 6 secondi invece di 2. Verifica dal vivo:

async function caricaDashboardSequenziale() {
  console.time('sequenziale');
  const prodotti = await caricaProdotti(); // 2s
  const categorie = await caricaCategorie(); // altri 1.5s
  const utenti = await caricaUtenti(); // altri 1s
  console.timeEnd('sequenziale'); // ~4.5s totali, somma dei tre tempi
  return [prodotti, categorie, utenti];
}

caricaDashboardSequenziale();

// =====================================================================
// 10. ESEMPIO REALE CON FETCH API
// =====================================================================

// fetch() restituisce una promise che si risolve con l'oggetto
// Response. Per ottenere i dati JSON veri e propri serve un secondo
// passaggio: response.json(), che restituisce a sua volta una promise.
// Per questo servono due then() (o due await).

// Con then/catch:
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore HTTP: ' + response.status);
    }
    return response.json();
  })
  .then(utente => {
    console.log('Nome:', utente.name);
    console.log('Email:', utente.email);
    console.log('Città:', utente.address.city);
  })
  .catch(errore => {
    console.log('Errore:', errore.message);
  });

// Lo stesso esempio con async/await:
async function caricaUtenteDaAPI() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3');

    if (!response.ok) {
      throw new Error('Errore HTTP: ' + response.status);
    }

    const utente = await response.json();
    console.log('Nome:', utente.name);
    console.log('Email:', utente.email);
    console.log('Città:', utente.address.city);
  } catch (errore) {
    console.log('Errore:', errore.message);
  }
}

caricaUtenteDaAPI();

//Fetch da Pokeapi con AbortController
//una Promise, una volta creata, normalmente non si può fermare dall'esterno. Se hai fetch(url) e il server non risponde, quella richiesta resta aperta finché non risponde (o finché il browser/sistema operativo non decide di darle un timeout tutto suo, che può essere anche di minuti). .catch() non serve a questo: cattura un errore se e quando arriva, ma non forza nessun errore a comparire. AbortController è lo strumento pensato apposta per colmare questo buco: dire dall'esterno "basta, fermati", a un'operazione che altrimenti andrebbe avanti da sola

async function caricaPokemon(nome, timeoutMs = 3000) {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
  const controller = new AbortController(); //necessario ad ogni chiamata fetch perchè un controller abortito resta "abortito" per sempre — non si può resettare
  const timer = setTimeout(() => controller.abort(), timeoutMs); //controller abort è la chiamata che fa scattare il signal e interrompe la fetch senza lasciarla appesa

  try {
    const response = await fetch(`${API_URL}${nome}`, {
      signal: controller.signal //proprietà interna dell'abortController passata come parametro alla fetch
    });
    clearTimeout(timer); // risposta arrivata in tempo, il timer non serve più

    if (!response.ok) {
      throw new Error('Errore HTTP: ' + response.status);
    }

    const dati = await response.json();
    console.log('Nome:', dati.name);
    console.log('Altezza:', dati.height);
    console.log(
      'Tipi:',
      dati.types.map(t => t.type.name)
    );
  } catch (errore) {
    if (errore.name === 'AbortError') {
      console.log('Richiesta interrotta: superato il timeout di', timeoutMs, 'ms');
    } else {
      console.log('Errore:', errore.message);
    }
  }
}

caricaPokemon('pikachu'); //charizard bulbasaur snorlax clefairy

// =====================================================================
// 11. ERRORI COMUNI DA EVITARE
// =====================================================================

// 1) Dimenticare il return nel then()
//
// SBAGLIATO - il then successivo riceve undefined:
//   caricaUtente(1)
//     .then(utente => { caricaOrdini(utente.id); }) // manca il return
//     .then(ordini => console.log(ordini)); // undefined
//
// CORRETTO:
//   caricaUtente(1)
//     .then(utente => { return caricaOrdini(utente.id); })
//     .then(ordini => console.log(ordini)); // array di ordini

// 2) Usare await fuori da una funzione async
//
// SBAGLIATO - errore di sintassi:
//   const utente = await caricaUtente(1);
//
// CORRETTO - await solo dentro una funzione async:
//   async function main() {
//     const utente = await caricaUtente(1);
//   }

// 3) Non gestire gli errori
//
// SBAGLIATO - se la promise viene rifiutata, l'errore non è gestito:
//   caricaUtente(-1).then(utente => console.log(utente));
//
// CORRETTO - aggiungere sempre un catch:
//   caricaUtente(-1)
//     .then(utente => console.log(utente))
//     .catch(errore => console.log(errore));

// 4) Usare await in sequenza per operazioni indipendenti
//    (vedi il confronto diretto nella sezione 9: caricaDashboard
//    vs caricaDashboardSequenziale)

// =====================================================================
// RIEPILOGO
// =====================================================================

// - Promise: pending -> fulfilled oppure pending -> rejected
// - then() gestisce il successo, catch() l'errore, finally() sempre
// - il chaining richiede il return della promise dentro ogni then()
// - Promise.all() = tutte insieme, fail-fast al primo errore
// - Promise.allSettled() = tutte insieme, non si rifiuta mai
// - Promise.race() = vince la prima che si conclude, in ogni caso
// - Promise.any() = vince la prima che ha successo
// - async/await è sintassi sopra le promise, non un'alternativa
// - una funzione async restituisce sempre una promise
// - await sospende solo la funzione async in cui si trova
// - gli errori con async/await si gestiscono con try/catch
// - più await in fila = sequenziale; await Promise.all() = parallelo

//TIMEOUT E SETINTERVAL

setTimeout(() => {
  console.log('Eseguito solo una volta dopo 1000ms');
}, 1000);
// Primo argomento: la funzione da eseguire. Secondo argomento: il ritardo in millisecondi.
// Non blocca nulla: il resto del codice sotto continua a girare subito, il console.log arriva dopo 1 secondo, in mezzo ad altre eventuali stampe.

//clearTimeout — annulla un setTimeout prima che scatti

const idTimeout = setTimeout(() => {
  console.log('Questo non verrà mai stampato');
}, 2000);

clearTimeout(idTimeout);

// Uso tipico reale: un pulsante "Annulla" che l'utente preme prima che parta un'azione ritardata (es. l'invio di un'email programmata dopo qualche secondo, con possibilità di annullare).

//setInterval — esegue ripetutamente, ogni N millisecondi, finché non lo fermi

let contatore = 0;
const idInterval = setInterval(() => {
  contatore++;
  console.log('Esecuzione numero', contatore);
  if (contatore === 3) {
    clearInterval(idInterval); //ci deve essere sempre altrimenti continua all'infinito
  }
}, 500);

function countdown(secondi) {
  let rimanenti = secondi;
  const id = setInterval(() => {
    console.log(rimanenti);
    rimanenti--;
    if (rimanenti < 0) {
      clearInterval(id);
      console.log('Tempo scaduto');
    }
  }, 1000);
}
countdown(3);

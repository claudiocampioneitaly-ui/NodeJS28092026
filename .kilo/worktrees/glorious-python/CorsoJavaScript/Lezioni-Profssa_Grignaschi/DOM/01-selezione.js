/* ==========================================================================
   BLOCCO 1: PANORAMICA COMPLETA DI TUTTI I METODI DI SELEZIONE DEL DOM
   ========================================================================== */

console.log('==================================================');
console.log('  01 - PANORAMICA METODI DI SELEZIONE NEL DOM');
console.log('==================================================\n');

/* --------------------------------------------------------------------------
   1. METODI TRADIZIONALI / SPECIFICI
   -------------------------------------------------------------------------- */

// A) document.getElementById(id)
// Restituisce un singolo Elemento (oppure null se non esiste)
const header = document.getElementById('intestazione-principale');
console.log("1A. getElementById('intestazione-principale'):", header);

// B) document.getElementsByClassName(className)
// Restituisce una HTMLCollection (collezione LIVE/dinamica di elementi)
const paragrafiClasse = document.getElementsByClassName('articolo-testo');
console.log("1B. getElementsByClassName('articolo-testo') [HTMLCollection]:", paragrafiClasse);
console.log('    Conteggio elementi con la classe:', paragrafiClasse.length);

// C) document.getElementsByTagName(tagName)
// Restituisce una HTMLCollection con tutti i tag specificati nella pagina
const tuttiIParagrafi = document.getElementsByTagName('p');
console.log("1C. getElementsByTagName('p') [HTMLCollection]:", tuttiIParagrafi);

// D) document.getElementsByName(name)
// Restituisce una NodeList LIVE contenente gli elementi con l'attributo HTML `name="..."`
const campiUsername = document.getElementsByName('username');
console.log("1D. getElementsByName('username') [NodeList]:", campiUsername);

/* --------------------------------------------------------------------------
   2. METODI MODERNI (SELETTORI CSS)
   -------------------------------------------------------------------------- */

// A) document.querySelector(selector)
// Restituisce il PRIMO elemento che corrisponde al selettore CSS
const primoItemLista = document.querySelector('#lista-spesa .item-spesa');
console.log("\n2A. querySelector('#lista-spesa .item-spesa') [Primo elemento]:", primoItemLista);

// Funziona con qualsiasi selettore CSS complesso:
const inputForm = document.querySelector("form#form-login input[name='username']");
console.log('querySelector con selettore CSS complesso:', inputForm);

// B) document.querySelectorAll(selector)
// Restituisce una NodeList (STATICA) di TUTTI gli elementi corrispondenti
const tuttiGliItemLista = document.querySelectorAll('#lista-spesa li');
console.log("2B. querySelectorAll('#lista-spesa li') [NodeList]:", tuttiGliItemLista);

/* --------------------------------------------------------------------------
   3. VISUALIZZAZIONE GRAFICA NEL BROWSER (Aggiunta Badge esplicativi)
   -------------------------------------------------------------------------- */

// getElementById
header.insertAdjacentHTML('beforeend', ' <span class="badge badge-id">Selezionato con getElementById</span>');

// getElementsByClassName (HTMLCollection -> serve Array.from per iterare facilmente)
Array.from(paragrafiClasse).forEach(p => {
  p.insertAdjacentHTML('beforeend', ' <span class="badge badge-class">Selezionato con getElementsByClassName</span>');
});

// getElementsByName
campiUsername[0].insertAdjacentHTML(
  'afterend',
  ' <span class="badge badge-name">Selezionato con getElementsByName</span>'
);

// querySelectorAll (NodeList -> supporta direttamente il metodo .forEach())
tuttiGliItemLista.forEach(li => {
  li.insertAdjacentHTML('beforeend', ' <span class="badge badge-query">Selezionato con querySelectorAll</span>');
});

/* --------------------------------------------------------------------------
   4. CHIARIMENTI: HTMLCollection vs NodeList
   -------------------------------------------------------------------------- */
// - HTMLCollection (da getElementsByClassName/TagName):
//   - È DINAMICA (se aggiungi elementi al DOM con JS, si aggiorna da sola).
//   - Non ha il metodo .forEach() nativo (bisogna convertirla con Array.from()).
// - NodeList (da querySelectorAll):
//   - È STATICA (è una 'fotografia' del DOM al momento della selezione).
//   - Ha il metodo nativo .forEach().

/* ==========================================================================
   BLOCCO 2: MODIFICA DEL CONTENUTO E DEGLI ATTRIBUTI DEL DOM
   ========================================================================== */

console.log("==================================================");
console.log("  02 - MODIFICA CONTENUTO ED ATTRIBUTI");
console.log("==================================================\n");

/* --------------------------------------------------------------------------
   1. DIFFERENZA TRA textContent, innerText e innerHTML
   -------------------------------------------------------------------------- */
console.log("--- 1. MANIPOLAZIONE CONTENUTO ---");

const sorgente = document.getElementById("demo-testo"); // Seleziona il div demo-testo

// A) textContent: Estrae TUTTO il testo puro, inclusi gli elementi nascosti da CSS.
const contenutoTextContent = sorgente.textContent; // Estrae tutto il testo, inclusi gli elementi nascosti
console.log("textContent letto:", contenutoTextContent); // Vede anche gli elementi nascosti
document.getElementById("out-text-content").textContent = contenutoTextContent; // Inserisce il testo nell'elemento out-text-content

// B) innerText: Estrae solo il testo "visibile" all'utente (rispetta lo stile CSS).
const contenutoInnerText = sorgente.innerText;
console.log("innerText letto:", contenutoInnerText); // Non vede gli elementi nascosti
document.getElementById("out-inner-text").innerText = contenutoInnerText;

// C) innerHTML: Legge o scrive il contenuto HTML completo, reinterpretando i tag!
document.getElementById("out-inner-html").innerHTML = "Testo con <mark>tag HTML reinterpretato</mark>!";


/* --------------------------------------------------------------------------
   2. GESTIONE DEGLI ATTRIBUTI STANDARD
   (getAttribute, setAttribute, hasAttribute, removeAttribute)
   -------------------------------------------------------------------------- */
console.log("\n--- 2. ATTRIBUTI STANDARD ---");

const link = document.getElementById("mio-link");

// A) getAttribute(nomeAttributo): Legge il valore
console.log("Valore href iniziale:", link.getAttribute("href"));
console.log("Valore target iniziale:", link.getAttribute("target"));

// B) setAttribute(nomeAttributo, valore): Modifica o crea un attributo
link.setAttribute("href", "https://developer.mozilla.org"); // Cambia l'href
link.setAttribute("target", "_blank"); // Apre il link in una nuova scheda
link.textContent = "Vai alla documentazione MDN (Link Modificato)"; // Cambia il testo

// C) hasAttribute(nomeAttributo): Verifica l'esistenza
console.log("Il link ha l'attributo 'title'?", link.hasAttribute("title"));

// D) removeAttribute(nomeAttributo): Rimuove l'attributo
link.removeAttribute("title");
console.log("Il link ha ancora l'attributo 'title'?", link.hasAttribute("title"));

// Esempio su Immagine:
const img = document.getElementById("mia-immagine");
img.setAttribute("src", "https://picsum.photos/150/150");
img.setAttribute("alt", "Immagine casuale da Picsum");


/* --------------------------------------------------------------------------
   3. ATTRIBUTI CUSTOM DATA-* (element.dataset)
   -------------------------------------------------------------------------- */
console.log("\n--- 3. ATTRIBUTI DATASET (data-*) ---");

const prodotto = document.getElementById("prodotto-101");

console.log("ID Prodotto:", prodotto.dataset.id);
console.log("Categoria:", prodotto.dataset.categoria);
console.log("Prezzo originale:", prodotto.dataset.prezzoInEuro);

// Aggiornamento nell'HTML visibile
document.getElementById("nome-prodotto").textContent = `Prodotto #${prodotto.dataset.id} (${prodotto.dataset.categoria.toUpperCase()})`;
document.getElementById("info-prodotto").textContent = `Prezzo: €${prodotto.dataset.prezzoInEuro} - Disponibile: ${prodotto.dataset.disponibile}`;

// Inserimento nuovo dato via JS
prodotto.dataset.sconto = "15%";
console.log("Nuovo attributo data-sconto aggiunto:", prodotto.dataset.sconto);


/* --------------------------------------------------------------------------
   4. PROPRIETÀ DI FORM E INPUT (.value, .checked, .disabled)
   -------------------------------------------------------------------------- */
console.log("\n--- 4. PROPRIETÀ DEI FORM ---");

const campoNome = document.getElementById("campo-nome");
const chkAccetto = document.getElementById("chk-accetto");
const btnInvia = document.getElementById("btn-invia");

// A) .value
console.log("Valore iniziale input nome:", campoNome.value);
campoNome.value = "Giuseppe Verdi";

// B) .checked
console.log("La checkbox è selezionata?", chkAccetto.checked);
chkAccetto.checked = true;

// C) .disabled
if (chkAccetto.checked) {
  btnInvia.disabled = false;
  console.log("Pulsante 'Invia' abilitato!");
}
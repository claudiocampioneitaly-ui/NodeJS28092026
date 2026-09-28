//DICHIARAZIONE
function nome() {
  console.log('mi chiamo Fulvia');
}

//INVOCAZIONE
nome();

//FUNZIONE SENZA PARAMETRI E SENZA VALORE DI RITORNO
function quattroPiuCinque() {
  let a = 4;
  let b = 5;
  console.log(a + b);
}
let risultato = quattroPiuCinque();
console.log(risultato); //la funzione non ha un valore di ritorno

//FUNZIONE CON PARAMETRI E SENZA VALORE DI RITORNO
function stampaSomma(a, b) {
  console.log(a + b);
}

stampaSomma(4, 5);
console.log(stampaSomma(5, 7));

//FUNZIONE CON PARAMETRI CHE RESTITUISCE UN VALORE DI RITORNO (OUTPUT)
function somma(a, b) {
  return a + b;
}

console.log(somma(2, 2));

//4+2+3
console.log(somma(somma(4, 2), 3));

//SFRUTTANDO QUELLO CHE AVETE IMPARATO CON I CICLI CREATE UNA FUNZIONE CHE DATO UN ARRAY NUMERICO RESTITUISCA LA MEDIA DEI SUOI ELEMENTI
let numeri = [6, 4, 1, 9, 7, 5, 99];
// let somma = 0;
// for (let i = 0; i < numeri.length; i++) {
//   const numero = numeri[i];
//   somma += numero;
// }
// let media = somma / numeri.length;
// console.log('media = ' + media);

function calcolaMediaArr(numeri) {
  let somma = 0;
  for (let i = 0; i < numeri.length; i++) {
    const numero = numeri[i];
    somma += numero;
  }
  let media = somma / numeri.length;
  return media;
}

console.log(calcolaMediaArr([6, 4, 1, 9, 7, 5, 99]));
console.log(calcolaMediaArr([2, 2, 2, 2, 2]));





//scrivi una funzione che restituisca vero se il numero passato come parametro è pari o dispari
function pariOdispari(numero){
    if (numero % 2 === 0) {
        return 'pari';
    }else{
        return 'dispari';
    }
}
console.log(pariOdispari(4));
console.log(pariOdispari(5));


// scrivi una funzione che restituisce la concatenazione degli elementi di un array in formato stringa
 function concatenaArray(array){
  let stringa = '';
  for (let i = 0; i < array.length; i++) {
    const elemento = array[i]+' '; /*aggiungi 2 spazi dopo ogni stringa*/
    stringa += elemento;
  }
  return stringa;
 }

 console.log(concatenaArray([1, 2, 3, 4, 5]));


 //scrivi una funcction normale e arrow che prenda due parametri, una parola e una lunghezza, e restituisca true se la parola è più lunga della lunghezzaspecificata, altrimenti false

function verificaParola(parola, lunghezza){
  return (parola.length > lunghezza); 
}

console.log(verificaParola('ciao', 3));
console.log(verificaParola('ciao', 5));


//trasforma in arrow function con meno codice possibile
const verificaParolaArrow = (parola, lunghezza) => (parola.length > lunghezza); 

console.log(verificaParolaArrow('ciao', 3));
console.log(verificaParolaArrow('ciao', 5));



//definire un'arrow function che restituisca true se un numero è positivo (compreso lo 0), e false altrimenti
const verificaNumero = (numero) => numero >= 0;

console.log(verificaNumero(0));
console.log(verificaNumero(-1));
console.log(verificaNumero(1));


//Scrivi una arrow function che verifica se un array di numeri è in ordine crescente (ogni numero deve essere maggiore del precedente). Restituisce true se tutti i numeri sono in ordine crescente e false se almeno un numero è superiore al successivo

function verificaCrescente(array){
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(verificaCrescente([1, 2, 3, 4, 5]));
console.log(verificaCrescente([1, 2, 3, 4, 2]));




//scrivere una funzione che concatena un numero variabile di parametri e restituisce la stringa finale
function concatenaStringhe(...stringhe) { //... indica che la funzione accetta un numero variabile di parametri
    let stringa = '';
    for (let i = 0; i < stringhe.length; i++) {
        const elemento = stringhe[i];
        stringa += elemento + ' ';
    }
    return stringa;
}
console.log(concatenaStringhe('ciao', 'come', 'stai?'));


//scrivere una funzione che dato un array di stringhe restituisce un un array con tutti gli elementi preceduti da "forse! ";

function trasformaArray(array){
    let arrayRisultato = [];
    for (let i = 0; i < array.length; i++) {
        arrayRisultato.push('forse! ' + array[i]);
    }
    return arrayRisultato;
}
console.log(trasformaArray(['ciao', 'come', 'stai?']));

// Scrivere un funzione che verifichi se in un array di numeri tutti gli elementi sono diversi da 44 e 10
function verificaNumeroArray(array) {
    for (let i = 0; i < array.length; i++) {
        const numero = array[i];
        if (numero === 44 || numero === 10) {
            return false;
        }
    }
    return true;
}
console.log(verificaNumeroArray([1, 2, 3, 4, 5]));
console.log(verificaNumeroArray([1, 2, 3, 4, 44]));
console.log(verificaNumeroArray([1, 2, 3, 4, 10]));


//https://codegrind.it/esercizi/javascript/array Svolgere gli esercizi
// Scrivere un ciclo che stampi la tabellina del 7 : 7x1 = 7
let numero = 7;
for (let i = 1; i <= 10; i++) console.log(`${numero}x${i} = ${numero * i}`);

// Definire un array contenente 7 numeri e stamparne la media aritmetica (es la media di 6,8,10 = (6+8+10) / 3 dove 3 è il numero di elementi dell'array)
let voti = [6, 8, 10, 5, 9, 7, 8];
let sommaVoti = 0;
for (let voto of voti) {
  sommaVoti += voto;
  console.log(sommaVoti);
}


let mediaVoti = sommaVoti / voti.length;
console.log(`La media dei voti è ${mediaVoti}`);

//Definire un array contenente i cognomi di 20 studenti di cognomi che non siano nomi di colori ma cognomi veri.

let studenti = [
  'Roberti',
  'Ferrari',
  'esposito',
  'Jianchi',
  'Ricci',
  'Conti',
  'kusso',
  'Costa',
  'rizzo',
  'Fontana',
  'Moretti',
  'fabbri',
  'Sanna',
  'Neri',
  'Costantini',
  'Sorentino',
  'Ruggero',
  'Pagano',
  'Vitali',
  'Bellini'
];


//Gli studenti il cui cognome inizia con una lettera compresa fra A e J saranno assegnati al prof Rossi, gli altri al prof.Bianchi.Utilizzare un ciclo for e popolare un array per professore contenente i cognomi degli studenti assegnatigli.

let profRossi = [];
let profBianchi = [];
let counterprofRossi = 0, counterprofBianchi = 0;
for (let i = 0; i < studenti.length; i++) {
  const studente = studenti[i];

  if (studente[0] >= 'A' && studente[0] <= 'J') {
    profRossi[counterprofRossi] = studente;
    counterprofRossi++;
  } else {
    profBianchi[counterprofBianchi] = studente;
    counterprofBianchi++;
  }
}
console.log(profRossi);
console.log(profBianchi);




//per estrarre la prima lettera di una stringa possiamo fare stringa[0]

// data una stringa stampa ogni carattere della stessa (la stringa è equiparabile in lettura a un array di caratteri)

let stringa = "ciao";

for (let i = 0; i < stringa.length; i++) {
  console.log(stringa[i]);
}

//data una stringa stamparla al contrario guida -> adiug

let stringa1 = "guida";
let stringaInvertita = "";
for (let i = stringa1.length - 1; i >= 0; i--) {
  stringaInvertita += stringa1[i];
}
console.log(stringaInvertita);

//dato un array di numeri stampa tutti i numeri a meno che vengano trovati i numeri 4 o 7. In questo caso stampiamo "errore" e usciamo;
let numeri = [4, 7, 3, 9, 12];
for (let numero of numeri) {
  if (numero === 4 || numero === 7) {
    console.log("errore");
    break;
  }
  console.log(numero);
}

//dato un array di numeri stampa tutti i numeri tranne  4 o 7.
let numeri1 = [4, 7, 3, 9, 12];
for (let numero of numeri1) {
  if (numero === 4 || numero === 7) {
    continue;
  }
  console.log(numero);
}

//stampa i numeri pari compresi fra 20 e 4 dal più grande al più piccolo
for (let i = 20; i >= 4; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// SIMULA UN GIOCO IN CUI IL COMPUTER PENSA A UN NUMERO COMPRESO FRA 0 E 6 E L'UTENTE DEVE INDOVINARLO. OGNI VOLTA CHE SBAGLIA GLI VIENE RIPROPOSTO IL PROMPT (lanciarlo da un file html)

//gioco numero casuale










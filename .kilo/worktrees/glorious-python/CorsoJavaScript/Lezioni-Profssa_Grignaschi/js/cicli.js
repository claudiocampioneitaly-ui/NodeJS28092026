let regioni = [
  'Abruzzo',
  'Basilicata',
  'Calabria',
  'Campania',
  'Emilia-Romagna',
  'Friuli-Venezia Giulia',
  'Lazio',
  'Liguria',
  'Lombardia',
  'Marche',
  'Molise',
  'Piemonte',
  'Puglia',
  'Sardegna',
  'Sicilia',
  'Toscana',
  'Trentino-Alto Adige',
  'Umbria',
  "Valle d'Aosta",
  'Veneto'
];

//CICLO FOR
for (let i = 0; i < regioni.length; i++) {
  const regione = regioni[i];
  console.log(regione);
}

//Stampare le regioni in ordine decrescente (Veneto....Abruzzo)
for (let i = regioni.length - 1; i >= 0; i--) {
  const regione = regioni[i];
  console.log(regione);
}

//Stampare tutte le regioni tranne una che nella realtà sceglierà l'utente
let regioneDaEscludere = 'Basilicata';
for (let i = 0; i < regioni.length; i++) {
  const regione = regioni[i];
  if (regione === regioneDaEscludere || regione === 'Campania') {
    continue;
  }
  console.log(regione);
}

for (let i = 0; i < regioni.length; i++) {
  const regione = regioni[i];
  if (regione !== regioneDaEscludere && regione !== 'Campania') {
    console.log(regione);
  }
}

//FOR SLEGATO DA ARRAY
//stampare tutti i numeri pari in un range
let da = 7;
let a = 18;

for (let i = da; i <= a; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//SOLUZIONE 2
for (let i = da; i <= a; i++) {
  i++; //se so a priori che parto da un dispari questa può essere una soluzione
  console.log(i);
}

//SOLUZIONE 3
da = 2;
da = da % 2 === 0 ? da : da + 1;
for (let i = da; i <= a; i += 2) {
  console.log(i);
}

let numeri=[4,7,3,9,12];
let somma=0;

for (let numero of numeri){
  somma+=numero;
  console.log(somma);
}
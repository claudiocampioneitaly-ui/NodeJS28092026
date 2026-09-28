//creare un oggetto lampadina con i metodi accendi e spegni sia come oggetto semplice ({}) sia come costruttore


let lampadina = {
  marca: 'Philips',
  modello: 'LED',
  potenza: 10,
  isAccesa: false,
  accendi: function () {
    this.isAccesa = true;
    console.log('lampadina accesa');
  },
  spegni: function () {
    this.isAccesa = false;
    console.log('lampadina spenta');
  }
};
lampadina.accendi(); 
console.log(new lampadina.spegni()); //new non è necessario per i metodi, serve solo per istanziare un nuovo oggettoLampadina eppure 

//creare un oggetto lampadina con i metodi accendi e spegni come costruttore
function Lampadina(marca, modello, potenza) {
  this.marca = marca;
  this.modello = modello;
  this.potenza = potenza;
  this.isAccesa = false;

  this.accendi = function () {
    this.isAccesa = true;
    console.log('lampadina accesa');
    return this.isAccesa;
  };

  this.spegni = function () {
    this.isAccesa = false;
    console.log('lampadina spenta');
    return this.isAccesa;
  };
}


// Crea un'istanza della lampadina
let lampadina1 = new Lampadina('Philips', 'LED', 10);

// Usa i metodi
console.log(lampadina1.accendi()); 
console.log(lampadina1.spegni());











//eserczio 1

//Crea un costruttore Studente che accetta nome e voto. 
function Studente(nome, voto) {
  this.nome = nome;
  this.voto = voto;
}

let studente1 = new Studente('Mario', 10); 
console.log(studente1);  

//Crea un array di almeno cinque istanze. 
let nomi = ['Mario', 'Luigi', 'Peach', 'Yoshi', 'Toad'];
let voti = [10, 9, 8, 7, 6];
let StudenteArray = [];

for (let i = 0; i < 5; i++) {
  StudenteArray[i] = new Studente(nomi[i], voti[i]);  
  console.log(StudenteArray[i]);  
}
// Scrivi una funzione (separata dal costruttore) che riceve l'array e restituisce il nome dello studente con il voto più alto. Stampa il risultato in console.

function trovaMigliore(StudenteArray){
  let studenteMigliore = StudenteArray[0];
  for (let i = 1; i < StudenteArray.length; i++) {
    if (StudenteArray[i].voto > studenteMigliore.voto) {
      studenteMigliore = StudenteArray[i];
    }
  }
  return studenteMigliore.nome;
}
console.log(trovaMigliore(StudenteArray));



//eserczio 2
//Scrivi un costruttore Automobile(marca, modello, km) che inizializza le tre proprietà e aggiunge un metodo percorri(kmAggiunti) che aumenta km del valore passato. Crea tre istanze diverse con new. Scrivi poi una funzione esterna trovaPiuUsata(automobili) che, dato un array di istanze, restituisce quella con più km percorsi. Verifica che ogni istanza mantenga il proprio stato indipendente (modificare i km di una non deve toccare le altre).

function Automobile(marca, modello, km) {
  this.marca = marca;
  this.modello = modello;
  this.km = km;

  this.percorsi = function (kmAggiunti) {
    this.km += kmAggiunti;
  };
} 

let automobili = [];
  automobili[0] = new Automobile('Fiat', 'Pluto', 0);  
  automobili[1] = new Automobile('Opel', 'DiCorsa', 0);  
  automobili[2] = new Automobile('Ferrari', 'TestaRotta', 0);  
  console.log(automobili); 

  automobili[0].percorsi(100); //100
  automobili[1].percorsi(15); //50000
  automobili[2].percorsi(10); //10
  console.log(automobili);  

  function trovaPiuUsata(automobili) {
    let automobilePiuUsata = automobili[0];
    for (let i = 1; i < automobili.length; i++) {
      if (automobili[i].km > automobilePiuUsata.km) {
        automobilePiuUsata = automobili[i];
      }
    } 
    return automobilePiuUsata.marca; //restiuisco solo il nome del modello
  }
  console.log(trovaPiuUsata(automobili));

  //verifica che ogni istanza mantenga il proprio stato indipendente (modificare i km di una non deve toccare le altre).
  automobili[0].percorsi(1); //1000
  automobili[1].percorsi(150); //1500000
  automobili[2].percorsi(10); //10
  console.log(automobili);  
  console.log(trovaPiuUsata(automobili));





//Scrivi un costruttore Magazzino(nome) che inizializza nome e una proprietà prodotti come oggetto vuoto (non array). 
//Aggiungi un metodo aggiungiProdotto(nomeProdotto, quantita) che inserisce una nuova chiave in prodotti. 
//Aggiungi un metodo quantitaTotale() per sommare tutte le quantità e restituire il totale. Crea un'istanza, aggiungi almeno 4 prodotti diversi, e verifica che quantitaTotale() restituisca il numero corretto.
function Magazzino(nome) {
  this.nome = nome;
  this.prodotti = {};
  this.aggiungiProdotto = function (nomeProdotto, quantita) {
    this.prodotti[nomeProdotto] = quantita;
  }; 
  this.quantitaTotale = function () {
    let totale = 0;
    for (let nomeProdotto in this.prodotti) {
      totale += this.prodotti[nomeProdotto];
    }   
    return totale;
  }; 
}

let magazzino1 = new Magazzino("Magazzino1");
magazzino1.aggiungiProdotto("Prodotto1", 10);
magazzino1.aggiungiProdotto("Prodotto2", 20);
magazzino1.aggiungiProdotto("Prodotto3", 30);
console.log(magazzino1);
console.log(magazzino1.prodotti);
console.log(magazzino1.quantitaTotale());




magazzino1.prodotti = { //questo fa vedere che posso modificare i prodotti
  "Prodotto4": 40,
  "Prodotto5": 50, 
  "Prodotto6": 60
};
console.log(magazzino1); 
console.log(magazzino1.prodotti); //questo fa vedere che posso modificare i prodotti quando voglio
console.log(magazzino1.quantitaTotale());//questo fa vedere che posso modificare i prodotti quando voglio









//Scrivi un costruttore Pagella(nomeStudente) che inizializza nomeStudente e una proprietà materie come oggetto vuoto, dove ogni chiave sarà il nome di una materia e il valore il voto (es. { matematica: 8 }). 
// Aggiungi un metodo aggiungiMateria(nome, voto). Aggiungi un metodo stampaPagella()  per stampare a console ogni riga nel formato materia: voto. Aggiungi un metodo materieInsufficienti()  per restituire un array con i soli nomi delle materie dove il voto è inferiore a 6 

function Pagella(nomeStudente) {   
  this.nomeStudente = nomeStudente;
  this.materie = {};
  this.aggiungiMateria = function (nomeMateria, voto) { //definisce la chiave(l'attributo), il nome della materia e il valore voto 
    this.materie[nomeMateria] = voto; //inserisce la materia e il voto nell'oggetto materie  . materie[nomeMateria] è   
  };
  this.stampaPagella = function () { //per stampare la pagella    
    for (let nomeMateria in this.materie) {   
      console.log(nomeMateria + ': ' + this.materie[nomeMateria]); //stampa la materia e il voto
    }
  };
  this.materieInsufficienti = function () { //per stampare le materie insufficienti    
    let insufficienti = []; //inizializza l'array delle materie insufficienti
    for (let nomeMateria in this.materie) {   
      if (this.materie[nomeMateria] < 6) { //se il voto è minore di 6
        insufficienti.push(nomeMateria); //aggiunge la materia all'array
      }
    }
    return insufficienti;
  };
} 


let pagella1 = new Pagella('Mario');
console.log(pagella1);   
pagella1.aggiungiMateria('matematica', 10);
pagella1.aggiungiMateria('inglese', 5);
pagella1.aggiungiMateria('scienze', 8);
pagella1.stampaPagella(); 
console.log(pagella1.materie);   

console.log(pagella1.materieInsufficienti());

let pagella2 = new Pagella('Antonio');
console.log(pagella2);   
pagella2.aggiungiMateria('informatica', 10);
pagella2.aggiungiMateria('inglese', 7);
pagella2.aggiungiMateria('scienze', 8);
pagella2.stampaPagella(); 
console.log(pagella2.materie);   










//creare un oggetto lampadina con i metodi accendi e spegni sia come oggetto semplice ({}) sia come costruttore
//Crea un costruttore Studente che accetta nome e voto. Crea un array di almeno cinque istanze. Scrivi una funzione (separata dal costruttore) che riceve l'array e restituisce il nome dello studente con il voto più alto. Stampa il risultato in console.

// Crea un costruttore Temperatura che accetta un valore in gradi Celsius. Aggiungi un metodo inFahrenheit() che restituisce il valore convertito in Fahrenheit (formula: C * 9/5 + 32). Crea tre istanze con temperature diverse e stampa la conversione di ciascuna.
//Crea un array di 4 oggetti dipendente, ciascuno con nome, stipendio, reparto. Scrivi tre funzioni separate:filtraPerReparto(dipendenti, reparto) — restituisce solo i dipendenti di un dato reparto stipendioTotale(dipendenti) — somma tutti gli stipendi aumentaStipendi(dipendenti, percentuale) — restituisce un nuovo array con gli stipendi aumentati, senza modificare l'array originale (usa map e lo spread operator sull'oggetto)

//Scrivi un costruttore Automobile(marca, modello, km) che inizializza le tre proprietà e aggiunge un metodo percorri(kmAggiunti) che aumenta km del valore passato. Crea tre istanze diverse con new. Scrivi poi una funzione esterna trovaPiuUsata(automobili) che, dato un array di istanze, restituisce quella con più km percorsi. Verifica che ogni istanza mantenga il proprio stato indipendente (modificare i km di una non deve toccare le altre).

//Scrivi un costruttore Magazzino(nome) che inizializza nome e una proprietà prodotti come oggetto vuoto (non array). Aggiungi un metodo aggiungiProdotto(nomeProdotto, quantita) che inserisce una nuova chiave in prodotti. Aggiungi un metodo quantitaTotale() per sommare tutte le quantità e restituire il totale. Crea un'istanza, aggiungi almeno 4 prodotti diversi, e verifica che quantitaTotale() restituisca il numero corretto.

//Scrivi un costruttore Pagella(nomeStudente) che inizializza nomeStudente e una proprietà materie come oggetto vuoto, dove ogni chiave sarà il nome di una materia e il valore il voto (es. { matematica: 8 }). Aggiungi un metodo aggiungiMateria(nome, voto). Aggiungi un metodo stampaPagella()  per stampare a console ogni riga nel formato materia: voto. Aggiungi un metodo materieInsufficienti()  per restituire un array con i soli nomi delle materie dove il voto è inferiore a 6.
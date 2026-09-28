let auto = {
  marca: 'Fiat',
  modello: 'Panda',
  anno: 1977,
  motore: {
    cilindri: 4,
    valvole: 8,
    numeroMotore: '768758494'
  },
  coloriDisponibili: ['viola', 'fuchsia', 'verde acido']
  //   accendi: function () {
  //     console.log('accesa');
  //   },
  //   spegni: function () {
  //     console.log();
  //   }
};

console.log(`La marca è: ${auto.marca}`);
console.log(`Il modello è: ${auto['modello']}`);
console.log(`Dati motore: cilindri ${auto.motore.cilindri}, valvole ${auto.motore.valvole}...`);
console.log(`Colori disponibili: ${auto.coloriDisponibili.join()}.`);
let prop = 'anno';
console.log(`Anno di costruzione: ${auto[prop]}`);
for (let prop in auto) {
  if (typeof auto[prop] != 'function') {
    console.log(`${prop}: ${auto[prop]}`);
  }
}

//RIASSEGNAZIONE DI UNA PROPRIETA'
auto.modello = 'reacty panda';
console.log(auto);

//AGGIUNTA DI UNA PROPRIETA'
auto.numeroRuote = 4;
console.log(auto);

//ELIMINAZIONE DI UNA PROPRIETA'(delete)
delete auto.numeroRuote;
console.log(auto);

//SHALLOW COPY CON OBJECT.CREATE
let auto2 = Object.create(auto);
console.log(auto2);
console.log(auto);

auto2.anno = 2026;
console.log(auto2);
console.log(auto);

auto2.motore.valvole = 16;
console.log(auto2);
console.log(auto.motore.valvole);

//DEEP COPY CON STRUCTUREDCLONE

let auto3 = structuredClone(auto);
auto3.motore.valvole = 32;
console.log(auto3.motore.valvole);
console.log(auto.motore.valvole);

// SHALLOW COPY CON JSON

//N.B. auto2 essendo stata creata con object create è come se ereditasse proprietà e metodi del prototipo e JSON.stringify li ignora
console.log(JSON.stringify(auto2));

auto.accendi = function () {
  console.log('auto accesa');
};
console.log(auto);

console.log(JSON.stringify(auto)); //Nota che i metodi non vengono considerati
let auto4 = JSON.parse(JSON.stringify(auto));
console.log(auto4);

//COSTRUTTORE
function Studente(nome, cognome, cf, codiceCorso, monteore) {
  this.nome = nome;
  this.cognome = cognome;
  this.cf = cf;
  this.codiceCorso = codiceCorso;
  this.monteOre = monteore;
}

let studenti = [];

function creaStudente(nome, cognome, cf, codiceCorso, monteore) {
  studenti.push(new Studente(nome, cognome, cf, codiceCorso, monteore));
}

creaStudente('Claudio', 'Campione', 'ojgjk89658956', 'TF1', 240); //ipotetici dati che ricevo da un ipotetico form
creaStudente('Federica', 'Ippoliti', 'ojgjk89658956', 'TF1', 241);
console.log(studenti);

let arrToJsonString = JSON.stringify(studenti);
console.log(arrToJsonString);

studenti = JSON.parse(arrToJsonString);
console.log(studenti);

//creare un oggetto lampadina con i metodi accendi e spegni sia come oggetto semplice ({}) sia come costruttore

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
new lampadina.accendi(); //il new non è necessario ma tecnicamente posso usarlo quando chiamo una funzione
new lampadina.spegni();

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
console.log(lampadina1.spegni());
// Usa i metodi
console.log(lampadina1.accendi());
console.log(lampadina1.spegni());

//PRINCIPALI METODI OBJECT

//Object.keys restituisce l'array delle proprietà compresi i metodi
console.log(Object.keys(lampadina1).filter(key => typeof lampadina1[key] != 'function').length);

//Object.values restituisce l'array dei valori compresi i metodi
console.log(Object.values(lampadina1).filter(val => typeof val != 'function'));

//Object.entries restituisce un array di array. Ogni array interno contiene due elementi (chiave e valore)

const entries = Object.entries(lampadina1).filter(el => typeof el[1] != 'function');

for (let entry of entries) {
  console.log(entry[0] + ': ' + entry[1]);
}

//riscrivo con la destrutturazione
for (let [chiave, valore] of entries) {
  console.log(chiave + ': ' + valore);
}

//OPERATORE IN
console.log('marca' in lampadina1);

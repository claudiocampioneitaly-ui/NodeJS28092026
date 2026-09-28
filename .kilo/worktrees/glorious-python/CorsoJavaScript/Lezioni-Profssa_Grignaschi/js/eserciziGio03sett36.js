//esercizigio03sett36

//1.Dichiarare una variabile chiamata "numero" e assegnarle il valore 5. Stampare il valore della variabile sulla console.

let numero = 5;
console.log(numero); 

//2.Dichiarare una variabile chiamata "nome" e assegnarle il valore "Marco". Successivamente, modificare il valore della variabile in "Luca". Stampare il nuovo valore sulla console.

let nome = "Marco";
console.log(nome);

nome = "Luca";
console.log(nome);


//3.Dichiarare tre variabili di tipo stringa e valorizzarle con tre nomi femminili.
let nome1 = "Marika";
let nome2 = "Greta";
let nome3 = "Giada";

//usando il templateLiteral stampare "le mie sorelle si chiamano ... seguite dai tre nomi separati da una virgola"
console.log(`le mie sorelle si chiamano ${nome1}, ${nome2}, ${nome3}`);

//4. stampare il risultato della seguente espressione 10-6+ variabileIncrementataDi1 -4 +8 dopo aver dichiarato e inizializzato la variabile. L'operazione deve utilizzare la variabile già incrementata

let variabileIncrementataDi1 = 5;
console.log(10-6+ ++variabileIncrementataDi1 -4 +8);


//5. Cambiare il segno a una variabile numerica (cambiando effettivamente la variabile)
let variabilepositiva = 5;
let variabileNegativa = - variabilepositiva;
console.log(variabileNegativa);

//6. Trasformare la variabile numero = "505" (di tipo stringa) in una variabile numerica di pari valore.
let numero2 = "505";
++numero2;
console.log(--numero2);


//7. data la variabile simpatico=true utilizzarla per rispondere alla domanda "E' antipatico?"

let simpatico = true;
console.log(simpatico);
console.log(!simpatico);

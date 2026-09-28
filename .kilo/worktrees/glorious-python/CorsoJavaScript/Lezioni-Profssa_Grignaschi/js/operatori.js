let num1 = 10;
console.log(-num1); //num1 non viene modificato
console.log(num1 + 10 - 14);
num1 = -num1; //num1 viene modificato
console.log(num1);
//Voglio cambiare effettivamente il segno di num1
num1 = -num1; //num1 viene modificato
console.log((num1 = 3)); //num1 viene modificato
console.log(num1);
let num2 = '5';
console.log(num2);
console.log(+num2); //num2 non viene modificato
console.log(num2);
//Voglio trasformare effettivamente num2 in un numero
num2 = +num2;
console.log(num2);

let bool1 = true;
console.log(!bool1);

// let num3 = 7;
// num3++;
// console.log(num3);
// ++num3;
// console.log(num3);
// console.log(num3++);
// console.log(num3);
// console.log(++num3);
// console.log(num3);

let num3 = 7;

num3 = 7;
console.log('num3: ', num3);
console.log('++num3: ', ++num3);
console.log('num3: ', num3);

num3 = 7;
console.log('num3: ', num3);
console.log('num3++: ', num3++);
console.log('num3: ', num3);

num3 = 7;
console.log('num3: ', num3);
console.log('--num3: ', --num3);
console.log('num3: ', num3);

num3 = 7;
console.log('num3: ', num3);
console.log('num3--: ', num3--);
console.log('num3: ', num3);

let num = 1;
console.log(10 + ++num + 4);
console.log(num);

num = 1;
console.log(10 + num++ + 4);
console.log(num);

//area triangolo
let base = 5;
let altezza = 10;
console.log((base * altezza) / 2);

//calcola 10 diviso 3 stampa risultato e resto
console.log(10 / 3);
console.log(10 % 3);


num1 = 10;
//Incrementa num1 di 5
num1 += 5;
console.log(num1);
//Assegna a num1 il risultato di  num1*4
num1 *= 4;
console.log(num1);
//Assegna a num1 il risultato di  num1/4
num1 /= 4;
console.log(num1);



let nome = "pippo";
let nome2 = "Claudio";
// testa e stampa se nome e nome2 sono uguali per valore e tipo e se sono entrambi diversi da "Giovanni"
console.log(nome === nome2 && nome !== "Giovanni" && nome2 !== "Giovanni");

num=5;
num2=10;
//testa e stampa se num maggiore di num2 e se num compreso fra 4 e 20
console.log(num > num2 && num >= 4 && num <= 20);





//Con operatore ternario verifica se un numero è pari e stampa pari o dispari a seconda del caso.

let num4 = 42;
console.log(num4 % 2 === 0 ? "pari" : "dispari");

//testa se una variabile è undefined e in quel caso stampa "variabile non inizializzata" altrimenti stampa il valore della variabile
let num5;
console.log(num5 === undefined ? "variabile non inizializzata" : num5);
num5 = 7;
console.log(num5 === undefined ? "variabile non inizializzata" : num5);

//dato un numero num e due variabili da a che definiscono un intervallo numerico testare se il numero è compreso nell'intervallo o no. Stampare "compreso" o "escluso" a seconda dei casi
 
let num6 = 5;
let a = 1;
let b = 10;
console.log(num6 >= a && num6 <= b ? "compreso" : "escluso");
num6 = 15; 
console.log(num6); 
console.log((a <= num6 && num6<= b) ? "compreso" : "escluso");
console.log((a <= num6<= b) ? "compreso" : "escluso");

 



// 1. Inversione delle cifre
// Data una intero, restituisci l'intero con le cifre invertite, lavorando solo con % e divisione. 1234 → 4321, 900 → 9.

// 2. Conta le cifre
// Conta quante cifre ha un intero senza convertirlo in stringa. 70432 → 5. Gestisci anche lo zero (0 → 1) e i negativi.

// 3. Radice numerica (digital root)
// Somma le cifre; se il risultato ha più di una cifra, ripeti finché resta una sola cifra. 9875 → 9+8+7+5=29 → 2+9=11 → 1+1=2. Serve un ciclo esterno che racchiude quello sulle cifre.

// 4. Palindromo numerico
// Determina se un intero è palindromo ragionando solo sui numeri (niente stringhe). 12321 → true, 12345 → false.

// 5. Numero di Armstrong
// Un numero è di Armstrong se la somma delle sue cifre elevate al numero di cifre dà il numero stesso. 153 = 1³+5³+3³. Devi prima contare le cifre, poi calcolare la potenza con un ciclo (niente Math.pow).

// Numeri primi e divisori

// 6. Primi in un intervallo
// Stampa tutti i primi tra a e b. Verifica di primalità con un ciclo che arriva alla radice del numero (calcolata con i*i <= n, non con Math.sqrt). Il risultato è a cicli annidati.

// 7. Primi gemelli sotto N
// Stampa tutte le coppie (p, p+2) in cui entrambi sono primi, con p+2 < N. N=20 → (3,5) (5,7) (11,13) (17,19).

// 8. Numero perfetto
// Un numero è perfetto se la somma dei suoi divisori propri lo eguaglia. 28 = 1+2+4+7+14. Scrivi la funzione che lo verifica.

// 9. Classificazione difettivo / perfetto / abbondante
// Per ogni numero in [2, N] calcola la somma dei divisori propri e classificalo come difettivo (somma minore), perfetto (uguale) o abbondante (maggiore). Cicli annidati: uno sui numeri, uno sui divisori.

// Sequenze

// 10. Massimo Fibonacci ≤ N
// Trova il più grande numero di Fibonacci minore o uguale a N, tenendo solo due variabili di appoggio (niente array). N=100 → 89.

// 11. Sequenza di Collatz
// Dato n: se pari n/2, se dispari 3n+1, finché arrivi a 1. Restituisci sia il numero di passi sia il valore massimo raggiunto nel percorso. n=6 → 8 passi, massimo 16.

// Pattern con cicli annidati

// 12. Tabellina N×N allineata
// Stampa la tavola pitagorica N×N con le colonne allineate. L'allineamento va costruito a mano con uno spazio aggiunto in base al numero di cifre (niente padStart).

// 13. Piramide centrata
// Data un'altezza H, stampa una piramide di asterischi centrata. Con H=4:

//    *
//   *
//  ***
// ***

// Gli spazi a sinistra e gli asterischi si generano con cicli, concatenando su una stringa.

// 14. Rettangolo cavo
// Data larghezza W e altezza H, stampa il contorno di un rettangolo di asterischi lasciando vuoto l'interno. La cella è un asterisco solo se sei sul bordo (prima/ultima riga o prima/ultima colonna).

// Algoritmi numerici

// 15. MCD ed mcm
// Calcola il massimo comune divisore con l'algoritmo di Euclide (while con il modulo), poi ricava l'mcm come a*b/mcd. a=12, b=18 → MCD 6, mcm 36.

// 16. Esponenziazione veloce
// Calcola a elevato a b senza Math.pow, usando l'elevamento al quadrato: se l'esponente è dispari moltiplichi il risultato per la base, poi dimezzi l'esponente e elevi al quadrato la base. Deve funzionare in un numero di iterazioni proporzionale a log(b), non a b.

// 17. Radice quadrata intera
// Trova la parte intera della radice quadrata di n senza Math.sqrt, cercando il più grande i tale che i*i <= n. n=50 → 7.

// 18. Zeri finali di N!
// Conta quanti zeri finali ha N! senza calcolare il fattoriale (che diventa enorme). Suggerimento: dipende solo da quanti fattori 5 compaiono, quindi somma N/5 + N/25 + N/125 + .... N=100 → 24.
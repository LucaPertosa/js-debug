/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// // ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// // ESERCIZIO 1 CORREZIONE
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Questo codice è un ciclo for che restituisce il valore di "i" scritto in console ad ogni ciclo per (come in questo caso) 5 volte da 0 a 4
    2- Il ciclo for non funziona perchè la condizione è i > 5 è sempre rispettata e quindi il ciclo non parte mai
    3- dipende se si vuole stampare i numeri da 0 a 5 o da 0 a 4 in quel caso basta aggiungere = alla condizione i <= 5

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// // ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// // ESERCIZIO 2 CORREZIONE
// function addIfEven(num) {
//     if (num % 2 === 0) {
//         return num + 5;
//     } else {
//         return num;
//     }
// }
// console.log(addIfEven(4));
/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Questo codice rappresenta una funzione che aggiunge 5 al numero inserito come parametro solo se è pari
    2- Si nel primo if la condizione era impostata come assegnazione non come uguagliaza
    3- No ma si potrebbe aggiungere il secondo return come condizione opposta alla prima definendolo nel'else 

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// // ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// // ESERCIZIO 3 CORREZIONE
// function loopToFive() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// }
// loopToFive()
/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Questo codice è una funzione che crea un ciclo for per 5 volte e per ogni ciclo stampa i in console
    2- Nella condizione del ciclo for venivano usati come separatore la "," mentre vanno usati il ";"
    3- Si, visto il nome della funzione penso sia corretto dare a i il valore di 1 e far fare un ciclo fino a 5 come da nome della funzione

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/



// // ESERCIZIO 4 (suggerimento: ci sono 8 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // [2,4,6,8]

// ESERCIZIO 4 (suggerimento: ci sono 8 errori) CORREZIONE
function displayEvenNumbersC() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    console.log(evenNumbers);
}
displayEvenNumbersC(); // [2,4,6,8]
/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Questo codice è una funzione che ritorna un array di numeri prendendo come valori i numeri pari presenti in un array chiamato numbers
    2- Gli errori di sintassi sono: molti ; di troppo (uno nella condizione del ciclo for e una dopo quella dell'if all'interno del ciclo for), la condizione del ciclo for era impostata in modo da non prendere l'ultimo valore dell'array, la condizione dell'if all'interno del ciclo for non prendeva i valori all'interno dell'array ma il numero corrispondente alla posizione del numero nell'array
    3- console.log al posto di return per far si che la funzione esegua a display come intuibile dal nome(?)

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/
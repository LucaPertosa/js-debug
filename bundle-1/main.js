/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// // ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     let message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

// // ESERCIZIO 1 CORREZIONE
// function checkAgeC(myAge) {
//     let message = '';

//     if (myAge <= 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
//     return message;
// }
// console.log(checkAgeC(18));
/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Questo codice è una funzione che tramite la dichiarazione di una costante che in questo caso rappresenta l'età, tramite un controllo restituisce un messaggio dicendo se hai piu o meno di 18 anni
    2- Si, il "message" segnato come const non ha la possibilità di essere riscritto quindi è stato modificato con let, e mancava il return della funzione
    3- Per come è stato scritto il message generato dall'if ho pensato fosse opportuno cambiare la condizione dell'if come da correzione e di inserire la costante myAge come parametro della funzione per far si di poter riutilizzare la funzione stessa

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// // ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

// // ESERCIZIO 2 CORREZIONE
// function printColorsNumberC() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumberC();
/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Questo codice è una funzione che dato un array di colori restituisce in un messaggio in console la lunghezza di un array per definire quanti colori ci sono nella palette
    2- nel template literal era sbagliato length
    3- no

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/



// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// // ESERCIZIO 3 CORREZIONE
// function addNumbersC() {
//     const userNumber = parseInt(prompt('Inserisci un numero'));
//     if (isNaN(userNumber)) {
//         console.log('Input non valido! Ricarica la pagina e inserisci un numero.');
//         return;
//     }
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbersC();
/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Questo codice è una funzione che assegna a una costante un numero chiesto all'utente tramite un prompt, in seguito assegna a un altra costante la somma tra il numero chiesto all'utente e un altro numero e restituisce la stessa costante in un messaggio in console
    2- il prompt generato riportava una stringa che nella somma generava una somma di stringhe, per risolvere ho implementato il parseInt alla costante con il prompt cosi che avvenga una somma tra numeri
    3- No ma si potrebbe implementare un controllo per far si che l'utente inserisca per forza un numero altrimenti esce un messaggio di errore in console

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// ESERCIZIO 4 CORREZIONE
function checkAccessC() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessC();
/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Questo codice è una funzione  che consente l'accesso tramite l'inserimento della mail che viene assegna a una costante chiesta all'utente tramite un prompt, in seguito gestisce l'accesso definendo grantAccess come false e tramite la condizione dell'if se l'indirizzo è presente o meno nell'array di email consentite, genera il messaggio in console
    2- Si, grantAccess era definito come stringa "false" e messo in === con true come valore booleano il risultato è sempre false, quindi è stato scritto come valore booleano
    3- no

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

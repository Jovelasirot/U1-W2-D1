/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
string = una sequenza di lettere e/o numeri.
number = dato numerico, numero intero (20) o numero decimale (3.14159).
boolean = dato che può assumere due valori true o false.
null = dato che ci spiega che l'assenza di un valore.
undefined = dato che non ha un valore assegnato 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* 
let firstName = "Jovel";
let secondName = "Jhon";
let thirdName = "Marcko";
let name = "Asirot";
let completeName =
  firstName + " " + secondName + " " + thirdName + " " + name;

console.log("What is your full name?", completeName); 
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 
let a = 12;
let b = 20;
let sum = a + b

console.log("the sum of a and b equals", sum)
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* 
let x = 12;

console.log("valore", x);
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* 
const name = Asirot;
let name = Smith;

console.log("surname", name);
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
let x = 12;
let y = 4;

y -= x;
console.log("substraction", y);
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let name1 = "john";
let name2 = "John";

console.log("Are the names identical?", name1 === name2);

let lowerCaseName2 = name2.toLowerCase();
console.log(lowerCaseName2);
let lowerCaseName1 = name1.toLowerCase();
console.log(lowerCaseName1);

console.log("Are the names identical?", lowerCaseName1 === lowerCaseName2);
*/

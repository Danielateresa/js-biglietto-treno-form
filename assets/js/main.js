/*Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il riepilogo dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/


//chiedere all'utente i km da percorrere
const km = Number(prompt("Quanti km dovrai percorrere?"));
console.log(km);

//chiedere all'utente l'età del passeggero
const passengerAge = Number(prompt("Quanti anni ha il passeggero?"));
console.log(passengerAge);

//calcolare il costo del biglietto in base ai km (0.21 € al km)
const price = km * 0.21;
//va applicato uno sconto 10del 20% per i minorenni
discountMinors = price * 0.20;
priceMinors = price - discountMinors;
//va applicato uno sconto del 40% per gli over 65.
discountOver65 = price * 0.40;
priceOver65 = price - discountOver65;


if (passengerAge < 18) {
    console.log("Dato che sei minorenne, il tuo biglietto scontato costerà €" + priceMinors);
} else if (passengerAge > 65) {
    console.log("Dato che hai più di 65 anni, il tuo biglietto scontato costerà €" + priceOver65);
} else {
    console.log("Il tuo biglietto costerà €" + price);
}



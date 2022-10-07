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

//racchiudo l'id del pulsante in una variabile per poi utilizzarla 
const resultButton = document.getElementById('button');

//al click sul pulsante..
resultButton.addEventListener('click', function () {
    //console.log('hai cliccato');

    //prendo il valore immesso nell'imput distance
    const km = document.getElementById('distance').value;
    console.log(km);

    //calcolare il costo del biglietto in base ai km (0.21 € al km)
    const price = km * 0.21;

    //prendo il valore immesso nell'imput age
    const passengerAge = document.getElementById('age').value;
    console.log(passengerAge);

    //va applicato uno sconto 10del 20% per i minorenni
    discountMinors = price * 0.20;
    priceMinors = price - discountMinors.toFixed(2);

    //va applicato uno sconto del 40% per gli over 65.
    discountOver65 = price * 0.40;
    priceOver65 = price - discountOver65.toFixed(2);

    if (passengerAge < 18) {
        console.log('Dato che sei minorenne, il tuo biglietto scontato costerà €' + priceMinors);
        //stampo a schermo inserendo nel DOM il risultato
        document.getElementById('final_price').innerHTML = 'Dato che sei minorenne, il tuo biglietto scontato costerà €' + priceMinors;
    } else if (passengerAge > 65) {
        console.log('Dato che hai più di 65 anni, il tuo biglietto scontato costerà €' + priceOver65);
        //stampo a schermo inserendo nel DOM il risultato
        document.getElementById('final_price').innerHTML = 'Dato che hai più di 65 anni, il tuo biglietto scontato costerà €' + priceOver65;
    } else {
        console.log('Il tuo biglietto costerà €' + price);
        //stampo a schermo inserendo nel DOM il risultato
        document.getElementById('final_price').innerHTML = 'Il tuo biglietto costerà €' + price;
    }
})

const burgerMenuEl = document.querySelector('.burger_menu');

burgerMenuEl.addEventListener('click', function () {
    console.log('ciao');
    document.querySelector('.menu_drop').style.display = 'block';
})








var prezzo_al_km = 0.21;

var sconto_giovani = 0;

var sconto_senior = 0;


var km_desiderati = prompt("Quanti chilometri vuoi percorrere?");

var eta_utente = prompt("Quanti anni hai?");


var prezzo_pieno_biglietto = km_desiderati * prezzo_al_km;


console.log(km_desiderati + " " + "chilometri desiderati," + " " + eta_utente + " " +
"eta' utente," + " " + prezzo_pieno_biglietto + "$ prezzo pieno del biglietto.");


if (eta_utente < 18){
  sconto_giovani = (prezzo_pieno_biglietto * 20) / 100
}
else if (eta_utente > 65){
  sconto_senior = (prezzo_pieno_biglietto * 40) / 100
}
// else {
  console.log(sconto_giovani);
// }


// if eta_utente < 18 consolo.log sconto_giovani
// else eta_utente > 65 consolo.log sconto_senior






//
// if {eta_utente > 18 = var sconto_giovani}







// var prezzo_biglietto = function calculate() (km * 0.21);
// }
//
// console.log(prezzo_biglietto);

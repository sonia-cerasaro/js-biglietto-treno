
var prezzo_al_km = 0.21;

var sconto_giovani = 0;

var sconto_senior = 0;


var km_desiderati = prompt("Quanti chilometri vuoi percorrere?");

var eta_utente = prompt("Quanti anni hai?");


console.log(km_desiderati + " " + eta_utente);



// var prezzo_pieno_biglietto = km_desiderati * prezzo_al_km;




//
// if {eta_utente > 18 = var sconto_giovani}







// var prezzo_biglietto = function calculate() (km * 0.21);
// }
//
// console.log(prezzo_biglietto);



if (eta < 18){
  sconto_giovani = (eta * 20) / 100
}
else if (eta > 65){
  sconto_senior = (eta * 40) / 100
}

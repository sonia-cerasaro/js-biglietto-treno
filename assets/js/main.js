var prezzo_al_km = 0.21;

var prezzo_scontato = 0;

var km_desiderati = prompt("Quanti chilometri vuoi percorrere?");

var eta_utente = prompt("Quanti anni hai?");

var prezzo_pieno_biglietto = km_desiderati * prezzo_al_km;

console.log(km_desiderati + " " + "chilometri desiderati," + " " + eta_utente + " " +
"eta' utente," + " " + prezzo_pieno_biglietto + "$ prezzo pieno del biglietto.");

if (eta_utente < 18){
  prezzo_scontato = Math.floor(prezzo_pieno_biglietto - ((prezzo_pieno_biglietto * 20) / 100));
  alert("Sconto giovani: " + prezzo_scontato + "$");
  console.log("Sconto giovani: " + prezzo_scontato + "$");
  document.getElementById('prova').innerHTML = "For only " + " " + prezzo_scontato + "$ you'll get a";
}
else if (eta_utente > 65){
  prezzo_scontato = Math.floor(prezzo_pieno_biglietto - ((prezzo_pieno_biglietto * 40) / 100));
  alert("Sconto senior: " + prezzo_scontato + "$");
  console.log("Sconto senior: " + prezzo_scontato + "$");
  document.getElementById('prova').innerHTML = "For only " + " " + prezzo_scontato + "$ you'll get a";
}
else {
  alert("Prezzo pieno: " + prezzo_pieno_biglietto + "$");
  console.log("Prezzo pieno: " + prezzo_pieno_biglietto + "$");
  document.getElementById('prova').innerHTML = "For only " + " " + prezzo_pieno_biglietto + "$ you'll get a";
}

// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha
// visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono stati individuati

var totaleNumeriRandom = 5;

var numeriCasuali = numeriRandom(totaleNumeriRandom);
alert(numeriCasuali);

setTimeout(inserisciNumeri, 3000);

listaNumerImmessiUtente = inserisciNumeri();
console.log(listaNumerImmessiUtente);
//Creo una funzione che mi generi tanti prompt quanti sono i numeri che ho visualizzato all'inizio
function inserisciNumeri() {
  var listaNumeriImmessi = [];
  for (var i = 0; i < totaleNumeriRandom; i++) {
    var numeroImmesso = parseInt(prompt('Inserisci i numeri che hai visto'));
    listaNumeriImmessi .push(numeroImmesso);
    console.log(numeroImmesso);

  }
return listaNumeriImmessi;
}

//Creo una funzione che mi generi 5 numeri casuali e li metta in un array
function numeriRandom(numero) {
  var listaNumeriRandom = [];
  for (var i = 0; i < numero; i++) {
    var numeroRandom = Math.floor(Math.random() * (100 - 1));
    listaNumeriRandom.push(numeroRandom);
  }
return listaNumeriRandom;
}

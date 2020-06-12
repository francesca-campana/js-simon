// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha
// visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono stati individuati

var totaleNumeriRandom = 5;

var numeriCasuali = numeriRandom(totaleNumeriRandom);
 alert(numeriCasuali);



setTimeout(function() {
  var listaNumeriVincenti = []
    for (var i = 0; i < totaleNumeriRandom; i++) {
    var numeroImmesso = parseInt(prompt('Inserisci i numeri che hai visto'));

    // console.log(listaNumeriImmessi);
      if (numeroImmesso === numeriCasuali[i]) {
        listaNumeriVincenti.push(numeroImmesso);
        console.log( 'I numeri indovinati sono '+ listaNumeriVincenti + '-' + 'il Totale dei  numeri indovinati sono ' + listaNumeriVincenti.length);
      }else {
        console.log( 'i numeri sono errati');
      }
    }

    return listaNumeriVincenti;

}, 3000);




//Creo una funzione che mi generi 5 numeri casuali e li metta in un array
function numeriRandom(numero) {
  var listaNumeriRandom = [];
  for (var i = 0; i < numero; i++) {
    var numeroRandom = Math.floor(Math.random() * (100 - 1));
    listaNumeriRandom.push(numeroRandom);
  }
return listaNumeriRandom;
}

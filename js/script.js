// BLOCCO1 ***************************************
// JSnack 1 BLOCCO1
/*L’utente inserisce due numeri in successione, con due prompt.
  Il software stampa il maggiore.*/

var numeroUno = document.getElementById("js_numero1");
var numeroDue = document.getElementById("js_numero2");

var buttonUno = document.getElementById("js_button1");
var risultatoUno = document.getElementById("js_risultato1");

buttonUno.addEventListener("click",
function() {
  risultatoUno.innerHTML = `Sono due numeri uguali`;
  if (numeroUno.value > numeroDue.value ) {
    risultatoUno.innerHTML = `Di questi due numeri il numero ${numeroUno.value} è il maggiore`;
  } else if (numeroUno.value < numeroDue.value ) {
    risultatoUno.innerHTML = `Di questi due numeri il numero ${numeroDue.value} è il maggiore`;
  }
});

// JSnack 2 BLOCCO1
/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

var parolaUno = document.getElementById("js_parola1");
var parolaDue = document.getElementById("js_parola2");

var buttonDue = document.getElementById("js_button2");
var risultatoDue = document.getElementById("js_risultato2");

buttonDue.addEventListener("click", function(){
  risultatoDue.innerHTML = `Le due parole hanno la stessa lunghezza`;
  if (parolaUno.value.length > parolaDue.value.length) {
    risultatoDue.innerHTML = `la parola ${parolaUno.value} è piu lunga della parola ${parolaDue.value}.`;
  } else if (parolaUno.value.length < parolaDue.value.length) {
    risultatoDue.innerHTML = `la parola ${parolaDue.value} è piu lunga della parola ${parolaUno.value}.`
  }
});

// JSnack 3 BLOCCO1
/*Il software deve chiedere per 5 volte all’utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti. Esegui questo
  programma in due versioni, con il for e con il while.*/



var buttonTre = document.getElementById("js_button3");
var risultatoTre = document.getElementById("js_risultato3");
buttonTre.addEventListener("click",
function() {

  var numberOne = document.getElementById("js_number1");
  console.log(numberOne)
  var numberTwo = document.getElementById("js_number2");
  var numberThree = document.getElementById("js_number3");
  var numberFour = document.getElementById("js_number4");
  var numberFive = document.getElementById("js_number5");
  var numbers = [parseInt(numberOne.value), parseInt(numberTwo.value), parseInt(numberThree.value), parseInt(numberFour.value), parseInt(numberFive.value)];
  console.log(numbers)


  var somma = 0;
  for (var i = 0; i < numbers.length; i++) {
  somma += numbers[i];
  }
  risultatoTre.innerHTML = somma;
});

// JSnack 4 BLOCCO1
/*In un array sono contenuti i nomi degli invitati alla festa del
  grande Gatsby, chiedi all’utente il suo nome e comunicagli se può
  partecipare o no alla festa.*/

var nomeForm = document.getElementById('js_nome-form');

var listaFesta = ['Aldo', 'Beto', 'Ale', 'Maria', 'Paolo'];
// Tasti Email!!!
var buttonQuattro = document.getElementById('js_button4');
var alert = document.getElementById('js_alert');


var nomeCorretto = false;

// Elementi da nascondere!!!

// Evento dopo il "Click" sul tasto "Invio"
buttonQuattro.addEventListener('click',
function() {
  // Se inseriscono una mail della lista, autorizziamo l'acceso!!!
  for ( var i = 0; i < listaFesta.length; i++) {
     if (listaFesta[i] === nomeForm.value) {
     nomeCorretto = true;
   }
  }
  if (nomeCorretto) {
    // Nel caso sia autorizzato l'acceso, nascondiamo la prima finestra, e apriamo quella del gioco!!
    alert.innerHTML = 'Sei nella lista, puoi accedere';
  } else {
    // Nel caso non si inserisca una mail della lista, viene fuori un messaggio!!
    alert.innerHTML = 'Mi dispiace non sei nella lista, NON puoi accedere';
  }

})

// JSnack 5 BLOCCO1
/*Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte
  le cifre che compongono il numero.*/

var numberoQuattroCifre = document.getElementById('js_numero-quattro');


var buttonCinque = document.getElementById('js_button5');
var risultatoCinque = document.getElementById('js_risultato5');

buttonCinque.addEventListener('click',
function(){
  var numberoQuattroCifreArray = numberoQuattroCifre.value.split('');
  console.log(numberoQuattroCifreArray)
  var somma2 = 0;
  for(var i = 0; i < numberoQuattroCifreArray.length; i++) {
    somma2 += parseInt(numberoQuattroCifreArray[i]);
    risultatoCinque.innerHTML = somma2
  }
})

// END BLOCCO1 ***************************************

// BLOCCO2 ***************************************

// JSnack6 BLOCCO2 (Jsnack2)
/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista
  di cognomi, Gatsby vuole generare una falsa lista di invitati.*/

var listaFinta = document.getElementById('js_lista-finta');

var nomi = ['Aldo', 'Alex', 'Rosy', 'Carlo', 'Francesco'];

var cognomi = ['Rossi', 'Matussi', 'Cadore', 'Grandi', 'Bauli'];

var lista = [];
// console.log(lista)

for(var i = 1; i <= 5; i++){
listaFinta.innerHTML = lista[i] ;
  var nomeCognomeFinto = generaCoppiaDiElementiInArray(nomi, cognomi)
  // console.log(nomeCognomeFinto)
  lista.push('<br>' + i + ') ' +  nomeCognomeFinto)
}
listaFinta.innerHTML = lista;


/*FUNZIONE:
 --> Questa funzioni genera una copia di elementi random, pressi da altri Array!*/
function generaCoppiaDiElementiInArray(arrayUno, arrayDue) {
  var  arryNomeECognomiCompleto = [];
  while( arryNomeECognomiCompleto.length <= 1){
    var numeroCasualeUno = Math.floor(Math.random() * (arrayUno.length));
    var elementoUno = arrayUno[numeroCasualeUno];
    arryNomeECognomiCompleto.push(elementoUno);

    var numeroCasualeDue = Math.floor(Math.random() * (arrayDue.length));
    var elementoDue = arrayDue[numeroCasualeDue];
    arryNomeECognomiCompleto.push(elementoDue);
  }
return arryNomeECognomiCompleto;
}


// JSnack7 BLOCCO2  (JSnack 4)
/* Crea due array che hanno un numero di elementi diversi. Aggiungi elementi
  casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.*/

// --> Stampa degli Array in HTML 'PRIMA' di uttilizzare la funzione.
var arrayPrimoPrima = document.getElementById('js_array-primo-prima');
var arraySecondoPrima = document.getElementById('js_array-secondo-prima');

var arrayPrimo = [2, 23, 45, 8, 12, 19, 12, 23, 45, 8, 12, 19];
var arraySecondo = [1, 34, 67, 102, 67, 9, 17];

arrayPrimoPrima.innerHTML = '<b>Array 1: </b>' + '[' + arrayPrimo + ']';
arraySecondoPrima.innerHTML = '<b>Array 2: </b>' + '[' + arraySecondo + ']';

// --> Stampa degli Array in HTML 'DOPO' di uttilizzare la funzione.
var arrayPrimoDopo = document.getElementById('js_array-primo-dopo');
var arraySecondoDopo = document.getElementById('js_array-secondo-dopo');
pareggiaArray(arrayPrimo, arraySecondo)


arrayPrimoDopo.innerHTML = '<b>Array 1: </b>' + '[' + arrayPrimo + ']';
arraySecondoDopo.innerHTML = '<b>Array 2: </b>' + '[' + arraySecondo + ']';


/*Funzione:
 --> Questa funzione mette in confronto 2 array, ed aggiunge ellementi a
quello piu corto fino a raggiungere la stessa lughezza del altro.*/
function pareggiaArray (arrayUno, arrayDue) {
  while (arrayUno.length < arrayDue.length) {
    var elementoNuovo = Math.floor(Math.random() * (100 - 1)) + 1;
    arrayUno.push('<b>' + elementoNuovo + '</b>')
  }
  while (arrayUno.length > arrayDue.length) {
    var elementoNuovo = Math.floor(Math.random() * (100 - 1)) + 1;
    arrayDue.push('<b>' + elementoNuovo + '</b>')
  }
}


// JSnack 8 BLOCCO2 (Blocco 3/ JSnack 2)
/* Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno
  formato da 10 numeri casuali tra 1 e 100.
  Ogni volta che ne crei uno, stampalo a schermo.*/
var prompt = parseInt(prompt('quanti?'))

var arraySingolo = [];
for(var i = 1; i <= 10; i++) {
  var elementoArray = Math.floor(Math.random() * (100 - 1)) + 1;
  arraySingolo.push(elementoArray)
}
console.log(arraySingolo)



// JSnack 9 BLOCCO2
/*Crea due tag div con due id diversi: un div avrà il testo colorato di rosso
  mentre l’altro di verde.
  Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari
  e in verde i numeri pari.*/

var arrayVerde = document.getElementById('js_coloreverde');
var arrayRosso = document.getElementById('js_colorerosso');

var arrayNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(var i = 0; i < arrayNumeri.length; i++){
  if (arrayNumeri[i]%2==0){
    arrayVerde.innerHTML +=  '[ ' + arrayNumeri[i] + ' ]';
  }else{
    arrayRosso.innerHTML += '[ ' + arrayNumeri[i]  + ' ]';
  }
}


// END BLOCCO2 ***************************************

// JSnack 1
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

// JSnack 2
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

// JSnack 3
/*Il software deve chiedere per 5 volte all’utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti. Esegui questo
  programma in due versioni, con il for e con il while.*/

var numberOne = document.getElementById("js_number1");
var numberTwo = document.getElementById("js_number2");
var numberThree = document.getElementById("js_number3");
var numberFour = document.getElementById("js_number4");
var numberFive = document.getElementById("js_number5");
var numbers = [numberOne.value, numberTwo.value, numberThree.value, numberFour.value, numberFive.value];
var buttonTre = document.getElementById("js_button3");
var risultatoTre = document.getElementById("js_risultato3");


buttonTre.addEventListener("click",
function() {
  var somma = 0;
  for (var i = 0; i < numbers.length; i++) {
  somma += numbers[i];
  }
  risultatoTre.innerHTML = somma;
});

// JSnack 4
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

// JSnack 5
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

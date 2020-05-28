// JS_SNAKE-1
//L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


// Chiedere informazione al utente!!!

// Chiedere di inserire la prima parola!
var primaParola = prompt('Dimmi la prima parola');

// Chiedere di inserire la seconda parola!
var secondaParola = prompt('Dimmi la seconda parola');

// Stampare la parola piu lunga!!
var messaggio;
//  Vedere quale è la parola piu lunga!!
if( primaParola.length > secondaParola.length ) {
  messaggio = 'la parola ' + secondaParola + ' e piu corta della parola ' + primaParola;
} else if( primaParola.length < secondaParola.length ) {
  messaggio = 'la parola ' +  primaParola + ' e piu corta della parola ' + secondaParola;
} else {
  messaggio = 'le due parole hanno la stessa lunghezza'
}

alert(messaggio);
// END JS_SNAKE-1

// JS_SNAKE-2
// Il software deve chiedere per 5 volte all’utente di
// inserire un numero. Il programma stampa la somma di
// tutti i numeri inseriti. Esegui questo programma in
// due versioni, con il for e con il while.
var somma = 0;
for(var i = 1; i <= 5; i++) {
  var numero= parseInt(prompt('insiriesce un numero'));
  somma = somma + numero;
}
alert('la somma è ' + somma);
// END JS_SNAKE-2

// JS_SNAKE-3
 // In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 // chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var nomeForm = document.getElementById('js_nome-form');

var listaFesta = ['Aldo', 'Beto', 'Ale', 'Maria', 'Paolo'];
// Tasti Email!!!
var buttonInviaUno = document.getElementById('js_button-invia-1');
var alert = document.getElementById('js_alert');


var nomeCorretto = false;

// Elementi da nascondere!!!

// Evento dopo il "Click" sul tasto "Invio"
buttonInviaUno.addEventListener('click',
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
// END JS_SNAKE-3

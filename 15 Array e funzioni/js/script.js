/*Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari  e poi creare funzione di ciò..*/
//creo array numeri interi
var mioArray = [10,20,30,40,50,60,70,80,90];
console.log("il mio array è composto dai seguenti numeri : " , mioArray);


//inserisco la funzione con dentro la somma di tutti i numeri in posizione dispari
function miaFunzione(nomeArray){
 var somma = 0;//variabile di appoggio

 for (var i = 0; i < nomeArray.length; i++) {
  if (i % 2 !== 0 ) {
   somma = somma + nomeArray[i];
   console.log("i numeri estrapolati dal ciclo for sono : " , mioArray[i]);
  }
 }
 console.log("la somma del risultato dei numeri in posizione dispari è : " , somma);
 return somma
}

//stampo in console il risultato richiamando la funzione
var risultato = miaFunzione(mioArray);
console.log("la somma del risultato dei numeri in posizione dispari invocando la funzione è : " , risultato);

// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
/*
var numeri = [1,2,3,4,5,6,7,8,9,10];
console.log(numeri);

function somma(params) {
    total = 0;
    for (var i =0; i<numeri.length; i++){
        if (numeri[i] % 2 != 0 ){
            total += numeri[i];
        }
    }
    return total;
}
var dispari = somma(numeri);
console.log( 'somma numeri dispari : ' , dispari);

 */
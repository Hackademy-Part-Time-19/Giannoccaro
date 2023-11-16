//CALCOLATRICE//

var num1=1

var num2=2

console.log("prima variabile",num1)

console.log("prima variabile",num2)

somma= num1+num2

console.log("totale somma",somma)

sottrazione= num2-num1

console.log("totale sottrazione ",sottrazione)

moltiplicazione= num1*num2

console.log("totale moltiplicazione ",moltiplicazione)

divisione= num1/num2

console.log("totale divisione",divisione)


//DIMMI ETA'//

const attuale=2023

const cent=100

var anno_nascita1=1995

var anno_nascita2=1963

età1= attuale-anno_nascita1

età2= attuale-anno_nascita2

rimanenza1= cent-età1

rimanenza2= cent-età2

console.log("hai",età1,"e ti mancano",rimanenza1,"anni per compiere 100 anni")

console.log("hai",età2,"e ti mancano",rimanenza2,"anni per compiere 100 anni")

//SOMMA SU HTML//

document.getElementById("button").onclick = function() {pinco()};

function pinco(){

    var x=0

    var y=0

    x = parseInt(prompt("inserisci il primo numero:"))

    y = parseInt(prompt("inserisci secondo numero."))

    sommaV=x+y

    sotV=x-y

    divV=x/y

    molV=x*y

    potV=x**y

    document.write("somma:",sommaV+"sottrazione:"+sotV+"divisione:"+divV+"moltiplicazione:"+molV+"potenza:"+potV)}




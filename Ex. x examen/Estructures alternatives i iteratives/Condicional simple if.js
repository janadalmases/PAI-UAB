/*13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el
número llegit és negatiu” si el número és més petit que zero.
let num= parseInt(prompt("Escriu un número: "));
if (num<0); 
    console.log("el número llegit és negatiu");

13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
número llegit és parell” si el número es parell.
let num= parseInt(prompt("Escriu un número: "));
if (num%2==0); 
    console.log("el número llegit és parell");

13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit
és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if
per cada cas.
let num= parseInt(prompt("Escriu un número: "));
if (num%2==0){
    console.log("el número llegit és parell");
}
if (num%2!=0){
    console.log("el número llegit és senar");
}

13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més
gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.*/
let num1= parseInt(prompt("Escriu un número: "));
let num2= parseInt(prompt("Escriu un altre número: "));
if (num1>num2){
    console.log("el primer número és més gran que el segon");
}
if (num1<num2){
    console.log("el segon número és més gran que el primer");
}
/*12.1.- Fes un programa que, donat un número (que demanarem per pantalla fent servir
prompt() escrigui a la consola el doble, el triple i el quadrat del número llegit.
let num= parseInt(prompt("Escriu un numero"));
doble= num**2;
triple= num**3;
quadrat= num**4;
console.log(doble, triple, quadrat);

12.2.- Fes un programa en JavaScript que calculi el perímetre i l’àrea d’un rectangle de 20 i
80 metres de costat. Modifica el programa perquè els valors dels costats es demanin amb
prompt().
costat1= 20;
costat2= 80;
perímetre= (costat1+costat2)*2;
àrea= costat1*costat2;
document.write("Perímetre: " + perímetre + "<br>Àrea: " + àrea);

12.3.- Fes un programa que, donat el radi d’una circumferència, calculi, a una nova variable
i escrigui a la consola, la longitud de la circumferència i l’àrea del cercle. Fes servir una
constant per guardar el número pi (3,141593) a) Longitud de la circumferència: 2 * 3.1416 *
ràdio b) Àrea del cercle: 3.1416 * radio^2 
const PI = 3.141593;
let radi = parseInt(prompt("Escriu el radi de la circumferència:"));
longitud = 2 * PI * radi;
àrea = PI * radi**2;
console.log(longitud, àrea);

12.4.- Escriu un programa en JavaScript que calculi el sou mensual a partir del nombre
d’hores treballades (160 hores) i el preu per hora treballada (12€). Prova amb altres valors. 
hores= 160;
preu= 12;
sou= hores * preu
document.write("Sou:" + sou);

12.6.- Fes un programa que escrigui a la consola el cub d’un número llegit per teclat (amb el
prompt()) 
let num = parseInt(prompt("Escriu un numero:"));
console.log(num**2)

12.8.- Escriu un programa de dues línies que demani el nom de l’usuari amb un prompt() i
escrigui un text a la consola que digui “Hola nomUsuari” */
let nom= prompt("Escriu el teu nom:");
console.log("Hola "+ nom);
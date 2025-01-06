/*21.1.- Fes un programa que faci el següent:
- Defineix una variable de tipus taula, buida.
- Afegeixi el valor “Hola” a la posició 0.
- Afegeixi el valor “Adeu” a la posició 1.
- Escrigui a la consola el contingut de la taula
variable= [];
variable[0]= "Hola"; 
variable[1]= "Adeu";
console.log(variable);

21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log())
per a fer el següent:
- Afegeixi el valor “Nom” a la posició 2 de la taula.
- Escrigui a la consola el contingut de la taula.
- Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “
- Escrigui a la consola el contingut de la taula.
variable= [];
variable[0]= "Hola"; 
variable[1]= "Adeu";
variable[2]= "Nom";
console.log(variable);
variable[1]= ";";

21.3.- Fes un programa que faci el següent:
- Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
- Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
- Guardi a la posició 6 de la taula la suma dels elements
- Escrigui a la consola el contingut de la taula. Què passa a la posició 5?
taula= [23,45,98,73];
suma= taula[0] + taula[2];
console.log(suma);
taula [6]= suma;
console.log(taula);

21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servirprompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la taula a la consola.
let num = parseInt(prompt("Escriu un número:"));
dobleItriple= [num*2, num*3];
console.log(dobleItriple);

21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la multiplicació i la divisió dels dos valors introduïts.
let num1 = parseInt(prompt("Escriu un número:"));
let num2 = parseInt(prompt("Escriu un número:"));
operacions= [num1+num2, num1-num2, num1*num2, num1/num2];
console.log(operacions);

21.6.- Donada aquesta taula: let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició de la taula.
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
console.log(taula[0], taula[taula.length-1]);

21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la taula, un a un.
for (let i; i<taula.length; i++){ 
    console.log(taula[i]);
}

21.8.- Fes un programa que escrigui a la consola la suma tots els valors emmagatzemats a la taula
for (let index = 0; index < taula.length; index++) {
    const suma = suma + taula[index];
    console.log(suma);    
}

21.9.- Fes un programa que crei una segona taula i emmagatzemi a ella tots els valors de la taula, tot sumant-los 25 (així les tres primeres posicions de la nova taula emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la nova taula a la consola.
let segona = [];
for (let index = 0; index < taula.length; index++) {
    segona[index] = taula[index] + 25; 
}
console.log(segona);

21.10.- Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula i l’escrigui a la consola (la mitjana es calcula sumant tots els valors i dividint pel nombre de valors).
let suma= 0
for (let index = 0; index < taula.length; index++) {
    const suma = taula[index]+ suma;
}
console.log(suma/ taula.length);

21.11.- Fes un programa que calculi i escrigui a la consola els valors més gran i més petit de la taula.
let gran= 0;
let petit= 0;
for (let index = 0; index < taula.length; index++) {
    if (index>gran){
        gran= index;
    }else{
        petit= index;
    }
}
console.log(gran, petit);

21.12.- Fes un programa que crei una nova taula on s’emmagatzemin només els valors parells de la taula i que escrigui el contingut d’aquesta nova taula a la consola.
novaTaula= [];
for (let index = 0; index < taula.length; index++) {
    if (taula[index]%2 === 0) {
        novaTaula= taula[index];  
    }
}
console.log(novaTaula);

21.13.- Fes un programa que demani a l’usuari un valor (fent servir prompt()) i escrigui a la consola quants cops apareix aquest valor a la taula.
valor= parseInt(prompt("Escriu un número:"));
contador= 0;
for (let index = 0; index < taula.length; index++) {
    if (taula[index] === valor) {
        contador += 1;
    }
}
console.log(contador);

21.14.- Fes un programa que, donats dos arrays de números, comprovi si tots dos tenen el mateix número d’elements i, si és així, crei una nova taula que contingui la suma de cada element que es trobi a la mateixa posició als dos arrys. Exemple: [1,2,3] + [2,3,4] → [3,5,7]
sumaElements= [];
suma= 0;
if (primera.length == segona.length) {
    for (let index = 0; index < primera.length; index++) {
        suma= primera[index] + primera[index]; sumaElements.push(suma);        
    }
}

21.16.- Fes un programa que demani un número a l’usuari (fent servir prompt()) i escrigui a la consola si es troba o no a la taula. IMPORTANT: Fes-lo fent servir un while de manera que si es troba l’element, s’acabi el bucle.
numero= parseInt(prompt("Escriu un número:"));
while (taula[index] === numero) {
    console.log("El teu número es troba a la taula.");
}

21.17.- Fes un programa que demani un número a l’usuari (fent servir prompt()) i escrigui a la consola si hi ha algun valor més gran a la taula. IMPORTANT: Fes-lo fent servir un while de manera que si es troba que hi ha un element més gran, s’acabi el bucle.
numero= parseInt(prompt("Escriu un número:"));
index= 0;
gran= 0;
while (index < taula.length & index++) {
    if (index > gran){
        break;
    }
}
21.18.- Fes un programa que escrigui “Sí” si el primer número de la taula està repetit i “No” en cas contrari.
let si= false;
for (let index = 0; index < array.length; index++) {
    if (taula[0] === array[index]){
        si= true;
    }else{
        si= false;
    }
}
if (si === true) {
    alert("Sí");
}else{
    alert("No");
}

21.19.- Fes un programa que donades dues taules de la mateixa mida, crei una nova taula amb la unió de les dues taules de manera alterna. Per exemple: [1,2,3] unió [4,5,6] → [1,4,2,5,3,6]
taula1= [1,2,3];
taula2= [4,5,6];
taulaAlerna=[];
for (let i = 0; i < taula1.length; i++) {
    taulaAlerna[i]= taula1[i];
    for (let j = 0; j < taula2.length; j++) {
        taulaAlerna[j]= taula1[j];
    }
}

21.20.- Fes un programa que, donada una taula i un valor, crei una nova taula sense el valor proporcionat.
senseValor= [];
for (let i = 0; i < taula.length; i++) {
    if (taula[i] != valor) {
        senseValor [i]= taula[i];
    }
}

21.21.- Fes un programa que, donada una taula i una posició, guardi a una altra taula la taula inicial, però des de la posició donada fins al final. Per exemple [1,2,3,5,6,7,8,9,0] i 4 → [6,7,8,9,0]
let taula = [1, 2, 3, 5, 6, 7, 8, 9, 0];
let posicio = parseInt(prompt("Introdueix una posició inicial (índex) per copiar a la nova taula21:"));
posicioFinsFinal= [];
j= 0;
for (let i = taula[posicio]; i < taula.length; i++) {
    posicioFinsFinal [j]= taula[posicio];    
}
console.log(posicioFinsFinal)

21.22.- Fes un programa que, donada una taula escrigui a la pantalla el primer número que estigui repetit.*/ 
for (let i = 0; i < taula.length; i++) {
    while (i !== j && taula.length) {
        j++ 
        break
    }
}

console.log(j);

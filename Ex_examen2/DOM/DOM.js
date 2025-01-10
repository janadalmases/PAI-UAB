/*5.1. - A partir de la pàgina web proporcionada (ex5_1.html) fes servir el DOM per mostrar per pantalla amb la funció alert() la següent informació:
a. Número d'enllaços que hi ha a la pàgina.
b. Adreça (URL) del penúltim enllaç.
c. Numero d'enllaços que ho fan a http://www.uab.cat
d. Número d'enllaços al tercer paràgraf.
// b.
function e51b(){
    alert (document.links(N-1));
}

//c.
function e51c(){
    let contador= 0;
    if (document.links === "http://www.uab.cat") {
        contador ++;
    }
    alert("el Numero d'enllaços de la UAB són:" + contador);
}

//d.
function e51d(){
    alert("el Número d'enllaços al tercer paràgraf són" + document.length.links.paragraf(3));
}


5.2. - A partir de la pàgina web proporcionada (Ex5_1.html) afegeix un paràgraf nou, amb el text “Hola món!”:
a. Al final de dels paràgrafs existents.
b. Entre el segon i el tercer paràgraf.
//b. Entre el segon i el tercer paràgraf.
function e52b(){
    let posicio= document.paragraf.length[2];
    let paragraf= document.createElement("p").posicio;
    let contingut= document.createElement("Hola món!");
    document.appendChild(paragraf, contingut);
}


5.3. - Afegeix codi JavaScript al fitxer proporcionat (Ex5_4.html) per tal insereixi un nou element a la llista, en penúltima posició, amb el text “Salve Mundi!” (a.). A més cal canviar l’estil per defecte de tota la llista i fer que no es mostrin els puntets al començament de cada element (b.).
// a.
function e53a(){	
    let TotalTextos= document.getElementsByTagName("text");
    let nouText= document.getElementTextNode("text");
    let contingut= document.getElementByTextNode("Salve Mundi!");
    nouText.appendChild(contingut);
    TotalTextos[-1],appendChild(nouText);
    document.StylePropertyMap("text");
}
 

5.4. - Al document html tens un botó per a aquest exercici que es diu Amagar paràgraf. Quan es cliqui aquest botó, cal amagar el paràgraf 2 (display: none) i canviar el text del botó per a que digui Mostrar paràgraf. Al clicar de nou el botó es desfan els canvis. Es torna a mostrar el paràgraf i al botó torna a posar Amagar paràgraf.
function e54(){
    let paragrafs= document.getElementByTagName("p");
    let p2= paragrafs[1]; 
    let amagar= document.getElementById("Amagar")
    let mostrar= document.creatElementTextNode("Mostrar"); 
    if (amagar == "True") {
        p2.style.display= "none";
        mostrar;
    } else{
        p2;
        amagar;
    }
}


Exercici 1: Canvia el text d’un paràgraf amb un botó. Afegeix un botó que canviï el text d’un paràgraf concret amb un missatge personalitzat.
function e1() {
    let boto= document.creatElement("button"); 
}


Exercici 2: Afegeix una classe a un element. Crea un botó que afegeixi una classe CSS a un paràgraf per canviar-ne l'estil.
function e2() {
    boto= document.getElementById("estil");
    paragraf= document.getElementByTagName("p");
    if (boto) {
        
    }
    paragraf.style.
}


Exercici 3: Afegeix un element a una llista. Crea una funció que permeti afegir un element nou a una llista.
function e3() {
    let lloc= document.createElement("p");
    let element= document.createTextNode("Element nou");
    llista= document.getElementsByTagName("li");
    lloc.appendChild(element); 
    llista.appendChild(lloc); 
}

Exercici 4: Elimina l’últim element d’una llista. Crea un botó que elimini l'últim element d'una llista.
function e4() {
    let element= document.getElementById("llista");
    element[-1].remove();
}

Exercici 6: Mostrar la longitud del contingut d’un paràgraf. Crea un botó que mostri la longitud (número de caràcters) d’un paràgraf.
function e6() {
    paragraf= document.getElementsByTagName("p");
    paragraf.length; 
}


Exercici 7: Alternar la visibilitat d’un element. Crea un botó que amagui o mostri un paràgraf.*/


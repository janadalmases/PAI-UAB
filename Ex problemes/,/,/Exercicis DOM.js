/*
DOM= plantilla d'html!!!!!!!!!

Exercici 5.1:
A partir de la pàgina web proporcionada (ex5_1.html) fes servir el DOM per mostrar per pantalla amb la
funció alert() la següent informació:*/
// a.	Número d'enllaços que hi ha a la pàgina
function e51a(){
	alert("Número d'enllaços: " + document.links.length);
}
// b.	Adreça (URL) del penúltim enllaç
function e51b(){
    alert("El penúltim enllaç: " + document.links[document.links.length-2].href);
    //href: agafa tots els enllaços, si mires tots els igualen amb això. length-2 perq el primer és 0 i et demana el penúltim
}
//c.	Numero d'enllaços que ho fan a http://www.uab.cat
function e51c(){
    let uabEnllacos = 0; // Comptador inicialitzat a 0
    for (let i = 0; i < document.links.length; i++) { // Iterem per tots els enllaços
        if (document.links[i].href === "http://www.uab.cat/") { // Comprovem si l'enllaç apunta a uab.cat
            uabEnllacos++; // Si és així, incrementem el comptador
        }
    }
    alert(`Número d'enllaços que apunten a http://www.uab.cat: ${uabEnllacos}`);
}
    
//d.	Número d'enllaços al tercer paràgraf.
function e51d(){
    var parrafs = document.getElementsByTagName("p");
	enllaços = parrafs[2].getElementsByTagName("a");
	alert("Número d'enllaços del tercer pàragraf: "+enllaços.length);
}
/****** Exercici 5.2 ******/
// a. Al final de dels paràgrafs existents.
function e52a(){ 

}
// b. Entre el segon i el tercer paràgraf.
function e52b(){

}


/****** Exercici 5.3 ******/
// Afegir "Salve Mundi!" a la llista en penúltima posició. 
function e53a(){	

}
// Canviar l'estil de la llista
function e53b(){
	
}


/****** Exercici 5.4 ******/
// Amagar el 2on paràgraf
function e54(){

}
/*Tenim aquesta definició de l’objecte cotxe i dues variables:
function Auto(marca, modelo, potencia, antiguedad , precio) {
 this.marca = marca;
 this.modelo = modelo;
 this.potencia = potencia;
 this.antiguedad = antiguedad;
 this.precio = precio;
}
let miAuto = new Auto("Seat","Ibiza",90,2010,5000);
let otroAuto = new Auto("Opel","Astra",92,1995,500);
21.23.- Fes un programa que et digui el model i la marca del vehicle més antic.
if (console.log(miAuto["antiguedad"]) > console.log(otroAuto["antiguedad"])) {
    console.log(otroAuto["modelo" && "marca"])
}else{
    console.log(miAuto["modelo" && "marca"])
}


EXERCICI 1: fer un llistat de les empreses que tenen deutes pendents.
EXERCICI 2: fer un llistat dels paquets pendents de ser lliurats. Aquest llistat ha d’incloure nom de l’empresa origen, nom de l’empresa final i cost que té l’enviament del paquet. */
// Definició de les classes 
class Empresa {
  constructor(nom, adreca) {
    this.nom = nom;
    this.adreca = adreca;
    this.deute = 0; // Quan creem l'empresa té deute 0
  }
  incrementaDeute(n) {
    this.deute += n;
  }
  totPagat() {
    this.deute = 0;
  }
}

class Paquet {
  constructor(origen, destinacio, cost) {
    this.origen = origen;
    this.destinacio = destinacio;
    this.cost = cost;
    this.lliurat = false;
  }
  lliuramentFet() {
    this.origen.incrementaDeute(this.cost);
    this.lliurat = true;
  }
}

// Definició de funcions de llistat
function deutesPendents(Empresa) {
    let llistatDeutes= [];
    if (Empresa.deute!= 0) {
        llistatDeutes.push(Empresa.deute);
    }
}

function paquetsPendents(Paquet) {
    let llistatPaquets= [];
    if (Paquet.lliurat === false) {
        llistatPaquets= Paquet.origen, Paquet.destinacio, Paquet.cost;
    }
} 


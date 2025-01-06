/*19.1.- Crea una funció que rebi un nombre i retorni aquest nombre elevat al quadrat
function nombre(nombre) {
    console.log(nombre*2);
}

19.2.- Crea una funció que rebi un nombre i retorni aquest nombre elevat al cub.
function cub (nombre){
    return nombre*3;
}

19.4.- Crea una funció que donat un valor en milles retorni la seva equivalència en metros. 1 milla = 1852 metros.
function milles (valor){
    return valor * 1852; 
}

19.5.- Crea una funció que, donat un nombre del 0 al 10 retorni una cadena de caràcters amb el nom del nombre donat. 
function nombre(num) {
    switch (num) {
        case 0:
            return "Zero";
            break;
        
        case 1:
            return "Un";
            break;

        case 2:
            return "Dos";
            break;
    
        default:
            break;
    }
}

19.6.- Crea una funció que, rebut un nombre de segons retorni una cadena de caràcters on es digui quantes hores minuts i segons són*/
let hores= 0; 
let minuts= 0; 
let segons= 0;
function segon(nombre) {
    hores= nombre / 360; 
    minuts= nombre / 60; 
    segons= nombre;
}
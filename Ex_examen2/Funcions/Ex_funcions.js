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

19.6.- Crea una funció que, rebut un nombre de segons retorni una cadena de caràcters on es digui quantes hores minuts i segons són
let hores= 0; 
let minuts= 0; 
let segons= 0;
function segon(nombre) {
    hores= nombre / 3600; 
    minuts= nombre / 60; 
    segons= nombre;
}

19.8.- Fer una funció que, donat un any, retorni si és de traspàs o no. Un any és de traspàs si és divisible per 4 i no per 100, però sí si és divisible per 400. El valor retornat per la funció haurà de ser un valor booleà
let traspa= false; 
function traspas(any) {
    if (any/4 || any/400) {
        traspa= true; 
    }else{
        traspa= false;
    }
    console.log(traspa);  
}

19.11.- Crea una funció que rebi una cadena de caràcters i retorni aquesta cadena codificada segons les següents regles:
● Es posaran les paraules en l’ordre invers
● Els caràcters que conformen les paraules també s’han d’invertir.
● Les vocals que apareguin s’han de canviar pel seu número equivalent (a=1, e=2, i=3, o=4 i u=5)
Per exemple, donada la frase “The cat is in the roof.” Es retornarà això: .f44r 2ht n3 s3 t1c 2hT
let cadena= "The cat is in the roof.";
let cadenaInvers= [];
function cadenes (cadena) {
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === "a"){
            cadena[i] = 1; 
        }if (cadena[i] === "e"){
            cadena[i] = 2;
        }if (cadena[i] === "i"){            
            cadena[i] = 3;     
        }if (cadena[i] === "o"){            
            cadena[i] = 4;
        }if (cadena[i] === "u"){            
            cadena[i] = 5;           
        }
    cadena.push(cadena[i])
    }
}

19.12.- Crea una funció que rep els tres paràmetres següents: 2 nombres i un dels següents valors "+", "-", "*", "/", "%", "pot" i retorni el resultat de l'operació realitzada. Fes servir la instrucció switch.
let num1= 1;
let num2= 2;
let operacio= "+";
function operacions (num1, num2, operacio){
    if (operacio === "+"){  //O AMB UN SWITCH CASE!!!!!!!!
        return num1 + num2;
    }
}

19.16.- Crea una funció que, donada una cadena de caràcters tipus "abcdefghijklmn." acabada sempre en punt, retorni quantes a hi ha a la cadena (podem decidir que la cadena s’acaba quan arribem al punt o fer servir la propietat .length)
let cadena= "abcdefghijklmn.";
let resultat= a(cadena);
console.log(resultat);
function a (cadena){
    let contador= 0;
    for (let i=0; i<cadena.length; i++) {
        if (cadena[i] === "a") {
            contador++;
        }
    }
}

19.18.- Donada una cadena de caràcters on les paraules estan separades només per un espai en blanc i acabada en un punt, comptar quantes paraules de la frase tenen la ce trencada (ç).
let cadena= "La puça és al jaç de la plaça.";
resultat= Ctrencada(cadena); 
console.log(resultat);
function Ctrencada (cadena){
    let contador= 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == "ç"){
            contador ++;
        }
    }
}

19.19.- Donada una taula amb números entre 0 i 99, retorni una altra taula de 100 posicions, on hi hagi guardat a cada posició el número de vegades que apareix un determinat número. Exemple (amb números entre 0 i 9): Ens donen la taula [2,3,4,5,3,2,3,4,5,6,8,6,5,2,3,4,5,6,0]. Ens hauria de tornar la taula[1,0,3,4,3,4,3,0,1,0,0]
let taula= [2,3,4,5,3,2,3,4,5,6,8,6,5,2,3,4,5,6,0];
resultat= contar(taula);
console.log(resultat);
function contar(taula) {
    let tornar= [];
    for (let i = 0; i < taula.length; i++) {
        for (let j = 0; j < taula.length; j++) {
            if (taula[i] == taula[j]) {
                tornar [i]= tornar [i] + 1;
        }   
        }
    }
}

19.21.- Donada una cadena de caràcters on les paraules estan separades per espais en blanc (un o més) i acabada en punt i un número N retorni quantes paraules hi ha amb N caràcters.
cadena="Obviusly the glass and the spoon are on the shelf.";
function Ncaract(cadena) {
    let cont= 0;

    for (let i = 0; i < taula.length; i++) {
        for (taulla[i] == " " && taula) {
            const element = array[i];
            
        }
        const element = array[i];
        
    }
}

3.1. - Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció.
let enter= parseInt(prompt("Escriu un nombre enter:"));
function IMparell (enter) {
    if (enter%2 === 0) {
        return "El número és parell."
    }else{
        return "El número és imparell."
    }
}

3.3. - Feu un script que inclogui una funció que, donat un enter N, retorni ∑ (1 / n2 ) per a 0 < n ≤ N.
let enterN= 3;
function operacio(enterN) {
    let suma= 0;
    for (let i = 0; i <= enterN; i++) {
        suma+= 1/i**2; 
    }
    console.log(suma);
}

3.4. -Feu una funció que calculi la nota final d'un alumne. L'script ha de rebre per teclat el següent:  Nota final d’avaluació continuada, Nota de pràctiques i Nota d’examen, i es mostrarà per pantalla la nota final en base a les formules donades...
function notaFinal (avaluacio, practiques, examen) {
    let nota= 0;
    if (avaluacio>= 5) {
        nota= 0,2 * avaluacio + 0,4 * practiques + 0,4 * examen;  
    } else {
        nota= 0,4 * practiques + 0,6 * examen; 
    }

    if (nota<5) {
        return "La nota final és de", nota, "que equival a una D";
    } else if (nota>=5 && 6,5>nota) {
        return "La nota final és de", nota, "que equival a una C";
    } else if (nota<8 && 6,5<=nota) {
        return "La nota final és de", nota, "que equival a una B";
    } else if (nota>=8 && 10>nota) {
        return "La nota final és de", nota, "que equival a una A";
    } else if (nota= 10) {
        return "La nota final és de", nota, "que equival a una H";
    } else{
        return "Suspens"
    }
}

19.21.- Donada una cadena de caràcters on les paraules estan separades per espais en blanc (un o més) i acabada en punt i un número N retorni quantes paraules hi ha amb N caràcters.*/
function Ncaract(cadena) {
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i]) {
            const element = array
        }
        
    }
}

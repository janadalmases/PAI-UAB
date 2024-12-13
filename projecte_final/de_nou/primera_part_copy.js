let errors = false

// Nom i cognoms
let majusculesCorrectes = true
const nom = document.getElementById("nom_cognoms");
const nomValors = nom.value.toLowerCase().split(" "); // Divideix el text en paraules
for (let paraula of nomValors) {
  if (paraula[0] !== paraula[0].toUpperCase()) {
    // Si la primera lletra no és majúscula, marca l'error
    majusculesCorrectes = false;
    break;
  }
}

if (!majusculesCorrectes) {
  document.getElementById("error-nom").textContent = "Escriviu en majúscules la primera lletra de cada paraula.";
  errors = true;
} else {
  document.getElementById("error-nom").textContent = "";
}

/*for (let i = 0; i < paraules.length; i++) {
  if (paraules[i].lenght > 0) {
    paraules[i]= paraules[i][0].toUpperCase() + paraules[i].slice(1).toLowerCase();
  }
}
nom.value= paraules.join(" ");*/



// Resultat
if (!errors) {
  document.getElementById("resultat").textContent = "Formulari enviat correctament!";
} else {
  document.getElementById("resultat").textContent = "";
}
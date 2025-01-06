let errors = false

// Quan cliqui algun dels dos botons, els enviarà a les respectives funcions.
document.getElementById("enviar").addEventListener("click", validarFormulari);
document.getElementById("esborrar").addEventListener("click", esborrarFormulari);

// Nom i cognoms
function noms(){  
  const nom = document.getElementById("nom_cognoms");
  let nomValors = nom.value.trim().split(/\s+/); // Divideix el text en paraules i treu els espais.
  let majusculesCorrectes = true;

  for (let paraula of nomValors) {
    if (paraula[0] !== paraula[0].toUpperCase()) {
      // Si la primera lletra no és majúscula, marca l'error.
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
}

// Rang d'edats
function rang_edats(){
  const edat = document.getElementById("rang_edats");
  const selecciona= "Selecciona una opció";
  if (edat.value === selecciona) {
      // Si l'opció seleccionada és igual a "Selecciona una opció", marca l'error.
    document.getElementById("error-edat").innerHTML = "Seleccioneu un rang d'edat.";
    errors = true;
  } else {
    document.getElementById("error-edat").textContent = "";
  }
}

// Codi postal
function codi(){
  const codi = document.getElementById("codi_postal");
  if ((codi.length !== 5) || (true=== isNaN(codi.value))){
      // Si la longitud al codi marcat per l'usuari no és 5 o el valor no és numéric, marca l'error.
      document.getElementById("error-codi").textContent = "Escriviu un codi postal vàlid (5 dígits i números).";
    errors = true;
  } else {
    document.getElementById("error-codi").textContent = "";
  }
}

// Validar correu electrònic
function validarEmail() {
  const email = document.getElementById("email");
  // Comprova que hi hagi exactament una '@'
  const atIndex = email.value.indexOf("@");
  const lastAtIndex = email.value.lastIndexOf("@");
  // Comprova que hi hagi un punt després de la '@'
  const hasDotAfterAt = email.value.indexOf(".", atIndex) > atIndex;
  // Condicions de validació (si no hi ha una @ retorna un -1).
  if (atIndex === -1 || atIndex !== lastAtIndex || !hasDotAfterAt) {
    document.getElementById("error-email").textContent = "Escriviu un correu vàlid.";
    errors = true;
  } else {
    document.getElementById("error-email").textContent = "";
  }
}

// Validar contrasenya
function validarContrasenya() {
  const contrasenya = document.getElementById("contrasenya").value;
  const error = document.getElementById("error-contrasenya");

  if (
      contrasenya.length >= 8 && // Longitud mínima
      /[a-z]/.test(contrasenya) && // Una minúscula
      /[A-Z]/.test(contrasenya) && // Una majúscula
      /\d/.test(contrasenya) && // Un dígit
      /[!@#$%^&*(),.?":{}|<>]/.test(contrasenya) // Un caràcter especial
  ) {
      error.textContent = ""; // Sense error
  } else {
      error.textContent = "La contrasenya ha de tenir almenys 8 caràcters, una majúscula, una minúscula, un dígit i un caràcter especial.";
  }
}

// Mostrar o ocultar contrasenya
function mostrarContrasenya() {
  const contrasenya = document.getElementById("contrasenya");
  const mostrar = document.getElementById("mostrar-contrasenya");

  if (mostrar.checked) {
      contrasenya.type = "text"; // Mostra la contrasenya
  } else {
      contrasenya.type = "password"; // Oculta la contrasenya
  }
}

// Confirmar contrasenya
function confirmar(){
  const contrasenya = document.getElementById("contrasenya").value;
  const confirmar = document.getElementById("confirmar_contrasenya").value;
  if (confirmar !== contrasenya) {
    // Si la contrasenya anterior no és igual a la contrasenya de confirmació, marca l'error.
    document.getElementById("error-confirmar").textContent = "Les contrasenyes no coincideixen.";
    errors = true;
  } else {
    document.getElementById("error-confirmar").textContent = "";
  }
}

// Mostrar o ocultar confirmació
function mostrarConfirmacio() {
  const contrasenya = document.getElementById("confirmar_contrasenya");
  const mostrar = document.getElementById("mostrar-confirmar");

  if (mostrar.checked) {
      contrasenya.type = "text"; // Mostra la contrasenya
  } else {
      contrasenya.type = "password"; // Oculta la contrasenya
  }
}

// Checkbox de privacitat
function privacitat(){
  const privacitat = document.getElementById("privacitat");
  if (!privacitat.checked) {
    // Si el checkbox no està maracat, dona l'error.
    document.getElementById("error-privacitat").textContent = "Accepteu la política de privacitat.";
    errors = true;
  } else {
    document.getElementById("error-privacitat").textContent = "";
  }
}

// Validar formulari
function validarFormulari() {
  errors = false; // Reiniciar errors abans de cada validació

  // Nom i cognoms
  noms();

  // Rang d'edats
  rang_edats();

  // Codi postal
  codi();

  // Correu electrònic
  validarEmail();

  // Contrasenya
  validarContrasenya();

  // Mostrar o amagar la contrasenya
  mostrarContrasenya()
  
  // Confirmar contrasenya
  confirmar();

    // Mostrar o amagar confirmació
    mostrarConfirmacio()

  // Checkbox de privacitat
  privacitat();

  // Resultat
  if (!errors) {
    document.getElementById("resultat").textContent = "Formulari enviat correctament!";
  } else {
    document.getElementById("resultat").textContent = "";
  }
}


// Esborrar formulari
function esborrarFormulari() {
  document.getElementById("formulari").reset();
  document.querySelectorAll(".error").forEach(error => error.textContent = "");
    // Posa els errors buits per reiniciar.

}
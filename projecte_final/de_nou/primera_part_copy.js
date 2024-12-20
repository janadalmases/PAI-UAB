let errors = false

document.getElementById("enviar").addEventListener("click", validarFormulari);
document.getElementById("esborrar").addEventListener("click", esborrarFormulari);

// Nom i cognoms
function noms(){  
  const nom = document.getElementById("nom_cognoms");
  let nomValors = nom.value.toLowerCase().trim().split(/\s+/); // Divideix el text en paraules
  let majusculesCorrectes = true;

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
}

// Rang d'edats
function rang_edats(){
  const edat = document.getElementById("rang_edats");
  const selecciona= "Selecciona una opció";
  if (edat.value === selecciona) {
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
    document.getElementById("error-codi").textContent = "Escriviu un codi postal vàlid (5 dígits i números).";
    errors = true;
  } else {
    document.getElementById("error-codi").textContent = "";
  }
}

// Validar correu electrònic
function validarEmail() {
  const email = document.getElementById("email").value;
  const error = document.getElementById("error-email");

  // Comprova el format correcte d'un correu electrònic
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (emailValid) {
      error.textContent = ""; // Sense error
  } else {
      error.textContent = "Escriviu un correu electrònic vàlid.";
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
    document.getElementById("error-confirmar").textContent = "Les contrasenyes no coincideixen.";
    errors = true;
  } else {
    document.getElementById("error-confirmar").textContent = "";
    confirmar.disabled = false;
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
    document.getElementById("error-privacitat").textContent = "Accepteu la política de privacitat.";
    errors = true;
  } else {
    document.getElementById("error-privacitat").textContent = "";
    privacitat.disabled = false;
  }
}

// Validar formulari
function validarFormulari() {

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
}
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
  if (edat.value === "Selecciona una opció") {
    document.getElementById("error-edat").innerHTML = "Seleccioneu un rang d'edat.";
    errors = true;
  } else {
    document.getElementById("error-edat").textContent = "";
    // rang_edats.disabled = false;
  }
}

// Codi postal
function codi(){
  const codi = document.getElementById("codi_postal");
  if ((codi.value.length !== 5) && (isNaN(codi.value))){
    document.getElementById("error-codi").textContent = "Escriviu un codi postal vàlid (5 dígits i números).";
    errors = true;
  } else {
    document.getElementById("error-codi").textContent = "";
    codi.disabled = false;
  }

  /* const error= document.getElementById("error-codi");
  const codi = document.getElementById("codi_postal");
  if ((codi.value.length !== 5) && (isNaN(codi.value))){
    error.textContent = "Escriviu un codi postal vàlid (5 dígits i números)."
    return false;
  } else {
    error.textContent = "";
    return true;
    codi.disabled = false;
  }*/
}

// Correu electrònic
function email(){
  const email = document.getElementById("email");
  /* Comprova que hi hagi exactament una '@'*/
  const atIndex = email.value.indexOf("@");
  const lastAtIndex = email.value.lastIndexOf("@");
  // Comprova que hi hagi un punt després de la '@'
  const hasDotAfterAt = email.value.indexOf(".", atIndex) > atIndex;
  // Condicions de validació
  if (atIndex === -1 || atIndex !== lastAtIndex || !hasDotAfterAt) {
    document.getElementById("error-email").textContent = "Escriviu un correu vàlid.";
    errors = true;
  } else {
    document.getElementById("error-email").textContent = "";
    email.disabled = false;  
  }
}

// Contrasenya
function contrasenya(){
  const contrasenya = document.getElementById("contrasenya").value;
  let majuscula = false;
  let minuscula = false;
  let digits = 0;
  let especial = false;
  const especials = "!@#$%^&*()_+[]-={};:\\|,.<>/?";
  if (contrasenya.length < 8) {
    document.getElementById("error-contrasenya").textContent = "Escriviu una contrasenya amb almenys 8 caràcters.";
    errors = true;
  } else {
      for (let i = 0; i < contrasenya.length; i++) {
        const char = contrasenya[i];
        if (char >= "A" && char <= "Z") {
          majuscula = true;
        } else if (char >= "a" && char <= "z") {
          minuscula = true;
        } else if (char >= "0" && char <= "9") {
          digits++;
        } else if (especials.includes(char)) {
          especial = true;
        }
        // Si totes les condicions ja s'han complert, no cal continuar
        if (majuscula && minuscula && digits >= 2 && especial) {
          break;
        }
      }

      // Valida que totes les condicions s'han complert
      if (!majuscula) {
        document.getElementById("error-contrasenya").textContent = "La contrasenya ha de tenir almenys una majúscula.";
        errors = true;
      }
      if (!minuscula) {
        document.getElementById("error-contrasenya").textContent = "La contrasenya ha de tenir almenys una minúscula.";
        errors = true;
      }
      if (digits < 2) {
        document.getElementById("error-contrasenya").textContent = "La contrasenya ha de tenir almenys dos dígits.";
        errors = true;
      }
      if (!especial) {
        document.getElementById("error-contrasenya").textContent = "La contrasenya ha de tenir almenys un caràcter especial (!@#$%^&*()_+[]-={};:\\|,.<>/?).";
        errors = true;
      }

    // Si és vàlida, buida l'error
    document.getElementById("error-contrasenya").textContent = "";
    errors = false;
    contrasenya.disabled = false;
  }

  const mostrarCheckbox = document.getElementById("mostrar-confirmar");
  // Afegim un esdeveniment al checkbox
  mostrarCheckbox.addEventListener("change", () => {
    if (mostrarCheckbox.checked) {
      // Canvia el tipus de "password" a "text" per mostrar la contrasenya
      contrasenya.type = "text";
    } else {
      // Torna a "password" per ocultar la contrasenya
      contrasenya.type = "password";
    }
  });
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

  const mostrarCheckbox = document.getElementById("mostrar-confirmar");
  // Afegim un esdeveniment al checkbox
  mostrarCheckbox.addEventListener("change", () => {
    if (mostrarCheckbox.checked) {
      // Canvia el tipus de "password" a "text" per mostrar la contrasenya
      contrasenya.type = "text";
    } else {
      // Torna a "password" per ocultar la contrasenya
      contrasenya.type = "password";
    }
  });
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
  // errors = false;

  // Nom i cognoms
  noms();

  // Rang d'edats
  edats();

  // Codi postal
  codi();

  // Correu electrònic
  email();

  // Contrasenya
  contrasenya();
  
  // Confirmar contrasenya
  confirmar();

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
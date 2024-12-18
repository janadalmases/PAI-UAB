document.getElementById("enviar").addEventListener("click", validarFormulari);
document.getElementById("esborrar").addEventListener("click", esborrarFormulari);

// Validar formulari
function validarFormulari() {
  let errors = false;

  // Nom i cognoms
  const nom = document.getElementById("nom_cognoms");
  nom.value[0]== nom.value[0].toUpperCase()
  function majuscules(){
    for (let i= 0; nom.value[i]==' '; i++){
      if (nom.value[i+1] !== nom.value[i+1].toUpperCase()) {
        document.getElementById("error-nom").textContent = "Escriviu en majúscules la primera lletra de cada paraula.";
        errors = true;
      } else {
        document.getElementById("error-nom").textContent = "";
      }
    }
  }

  // Rang d'edats
  const edat = document.getElementById("rang_edats");
  if (edat.value === "") {
    document.getElementById("error-edat").textContent = "Seleccioneu un rang d'edat.";
    errors = true;
  } else {
    document.getElementById("error-edat").textContent = "";
  }

  // Codi postal
  const codi = document.getElementById("codi_postal");
  if (codi.value.length !== 5 || isNaN(codi.value)) {
    document.getElementById("error-codi").textContent = "Escriviu un codi postal vàlid (5 dígits).";
    errors = true;
  } else {
    document.getElementById("error-codi").textContent = "";
  }

  // Correu electrònic
  function email(){
    const email = document.getElementById("email");
    const emailValue = email.value;
    /* Comprova que hi hagi exactament una '@'*/
    const atIndex = emailValue.indexOf("@");
    const lastAtIndex = emailValue.lastIndexOf("@");
    // Comprova que hi hagi un punt després de la '@'
    const hasDotAfterAt = emailValue.indexOf(".", atIndex) > atIndex;
    // Condicions de validació
    if (atIndex === -1 || atIndex !== lastAtIndex || !hasDotAfterAt) {
      document.getElementById("error-email").textContent = "Escriviu un correu vàlid.";
      errors = true;
    } else {
      document.getElementById("error-email").textContent = "";
    }
  }

  // Contrasenya
  const contrasenya = document.getElementById("contrasenya");
  if (contrasenya.value.length < 8) {
    document.getElementById("error-contrasenya").textContent = "Escriviu una contrasenya amb almenys 8 caràcters.";
    errors = true;
  } else {
    document.getElementById("error-contrasenya").textContent = "";
  }
  
  // Confirmar contrasenya
  const confirmar = document.getElementById("confirmar-contrasenya");
  if (confirmar.value !== contrasenya.value) {
    document.getElementById("error-confirmar").textContent = "Les contrasenyes no coincideixen.";
    errors = true;
  } else {
    document.getElementById("error-confirmar").textContent = "";
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

  // Checkbox de privacitat
  const privacitat = document.getElementById("privacitat");
  if (!privacitat.checked) {
    document.getElementById("error-privacitat").textContent = "Accepteu la política de privacitat.";
    errors = true;
  } else {
    document.getElementById("error-privacitat").textContent = "";
  }

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
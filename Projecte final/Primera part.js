document.getElementById("esborrar").addEventListener("click", esborrarFormulari);
document.getElementById("enviar").addEventListener("click", validarFormulari);

// Esborrar formulari
function esborrarFormulari() {
  document.getElementById("formulari").reset();
  document.querySelectorAll(".error").forEach(error => error.textContent = "");
}

// Validar formulari
function validarFormulari() {
  let errors = false;

  // Nom i cognoms
  const nom = document.getElementById("nom_cognoms");
  function majuscules(){
    for (let i= 0; i==' '; i++){
      if (nom[i+1] !== nom[i+1].toUpperCase()) {
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
  if (!codi.value.match(/^\d{5}$/)) {
    document.getElementById("error-codi").textContent = "Escriviu un codi postal vàlid (5 dígits).";
    errors = true;
  } else {
    document.getElementById("error-codi").textContent = "";
  }

  // Correu electrònic
  const email = document.getElementById("email");
  if (!email.value.match(/^[^@]+@[^@]+\.[a-z]{2,}$/i)) {
    document.getElementById("error-email").textContent = "Escriviu un correu vàlid.";
    errors = true;
  } else {
    document.getElementById("error-email").textContent = "";
  }

  // Contrasenya
  const contrasenya = document.getElementById("contrasenya");
  if (!contrasenya.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()_+[]-={};:\|,.<>/?]).{8,}$/)) {
    document.getElementById("error-contrasenya").textContent = "Contrasenya no vàlida: almenys 8 caràcters (una majúscula, una minúscula, dos dígits i un caràcter especial).";
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
document.getElementById("enviar").addEventListener("click", validarFormulari);

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


  // Resultat
  if (!errors) {
    document.getElementById("resultat").textContent = "Formulari enviat correctament!";
  } else {
    document.getElementById("resultat").textContent = "";
  }
}
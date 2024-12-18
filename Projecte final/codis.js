  // Contrasenya
  const contrasenya = document.getElementById("contrasenya");
  if (contrasenya.value.length < 8) {
    document.getElementById("error-contrasenya").textContent = "Escriviu una contrasenya amb almenys 8 caràcters.";
    errors = true;
  } else {
    document.getElementById("error-contrasenya").textContent = "";
  }



  // Contrasenya
const contrasenya = document.getElementById("contrasenya");

function validarContrasenya() {
  const value = contrasenya.value;
  let majuscula = false;
  let minuscula = false;
  let digitCount = 0;
  let caracterEspecial = false;
  const especials = "!@#$%^&*()_+[]-={};:\\|,.<>/?";

  if (value.length < 8) {
    document.getElementById("error-contrasenya").textContent = "La contrasenya ha de tenir almenys 8 caràcters.";
    return true; // Indica error
  }

  for (let i = 0; i < value.length; i++) {
    const char = value[i];

    if (char >= "A" && char <= "Z") {
      majuscula = true;
    } else if (char >= "a" && char <= "z") {
      minuscula = true;
    } else if (char >= "0" && char <= "9") {
      digitCount++;
    } else if (especials.includes(char)) {
      caracterEspecial = true;
    }
  }

  if (!majuscula) {
    document.getElementById("error-contrasenya").textContent = "La contrasenya ha de contenir almenys una majúscula.";
    return true;
  }

  if (!minuscula) {
    document.getElementById("error-contrasenya").textContent = "La contrasenya ha de contenir almenys una minúscula.";
    return true;
  }

  if (digitCount < 2) {
    document.getElementById("error-contrasenya").textContent = "La contrasenya ha de contenir almenys dos dígits.";
    return true;
  }

  if (!caracterEspecial) {
    document.getElementById("error-contrasenya").textContent = "La contrasenya ha de contenir almenys un caràcter especial.";
    return true;
  }

  // Si passa tots els requisits
  document.getElementById("error-contrasenya").textContent = "";
  return false; // Indica que no hi ha errors
}

// Comprovació al fer clic al botó "Enviar"
document.getElementById("enviar").addEventListener("click", () => {
  if (validarContrasenya()) {
    // Errors presents
    console.log("Contrasenya no vàlida.");
  } else {
    // Contrasenya vàlida
    console.log("Contrasenya vàlida.");
  }
});

document.getElementById("formulari").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita l'enviament predeterminat del formulari

    let errors = false; // Inicialitza la variable d'errors

    // Validacions dels camps
    if (!validarNom()) errors = true;
    if (!validarRangEdats()) errors = true;
    if (!validarCodiPostal()) errors = true;
    if (!validarEmail()) errors = true;
    if (!validarContrasenya()) errors = true;
    if (!validarConfirmacioContrasenya()) errors = true;
    if (!validarPrivacitat()) errors = true;

    // Mostra el resultat
    if (!errors) {
        document.getElementById("resultat").textContent = "Formulari enviat correctament!";
        document.getElementById("formulari").reset(); // Esborra els camps
    } else {
        document.getElementById("resultat").textContent = "";
    }
});

// Funcions de validació
function validarNom() {
    const nom = document.getElementById("nom_cognoms").value.trim();
    const error = document.getElementById("error-nom");
    if (!nom || !nom.includes(" ")) {
        error.textContent = "Escriviu el vostre nom i cognoms.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarRangEdats() {
    const edat = document.getElementById("rang_edats").value;
    const error = document.getElementById("error-edat");
    if (!edat) {
        error.textContent = "Seleccioneu un rang d'edat.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarCodiPostal() {
    const codi = document.getElementById("codi_postal").value.trim();
    const error = document.getElementById("error-codi");
    if (codi.length !== 5 || isNaN(codi)) {
        error.textContent = "El codi postal ha de tenir exactament 5 dígits.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("error-email");
    if (!email.includes("@") || !email.includes(".")) {
        error.textContent = "Escriviu un correu electrònic vàlid.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarContrasenya() {
    const contrasenya = document.getElementById("contrasenya").value.trim();
    const error = document.getElementById("error-contrasenya");
    if (contrasenya.length < 8) {
        error.textContent = "La contrasenya ha de tenir almenys 8 caràcters.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarConfirmacioContrasenya() {
    const contrasenya = document.getElementById("contrasenya").value.trim();
    const confirmacio = document.getElementById("confirmar_contrasenya").value.trim();
    const error = document.getElementById("error-confirmar");
    if (contrasenya !== confirmacio) {
        error.textContent = "Les contrasenyes no coincideixen.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarPrivacitat() {
    const privacitat = document.getElementById("privacitat").checked;
    const error = document.getElementById("error-privacitat");
    if (!privacitat) {
        error.textContent = "Heu d'acceptar la política de privacitat.";
        return false;
    }
    error.textContent = "";
    return true;
}

let errors = false

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


// Correu electrònic
function email(){
  const email = document.getElementById("email").value.trim();
  const atIndex = email.value.indexOf("@");
  const lastAtIndex = email.value.lastIndexOf("@");
  const hasDotAfterAt = email.value.indexOf(".", atIndex) > atIndex;
  if (atIndex === -1 || atIndex !== lastAtIndex || !hasDotAfterAt) {
    document.getElementById("error-email").textContent = "Escriviu un correu vàlid.";
    errors = true;
  } else {
    document.getElementById("error-email").textContent = "";
  }
} 
// Vinculem la validació al camp email
document
  .getElementById("email")
  .addEventListener("blur", validarEmail); // Quan sortim del camp, validem

  /*  const email = document.getElementById("email").value;
  if (email === ""){
    alert("Escriviu un correu.");
    return false;
  }
  if (!email.includes("@") || !email.includes(".")){
    alert("Escriviu un correu vàlid.");
    return false;
  }
  return true;
  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  const majus= "ABCDEFGHIJKLMNOPKRSTWXYZ"
  const min= "abcdefghijklmnopqrstwxyz"*/
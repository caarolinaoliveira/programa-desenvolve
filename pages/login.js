function validateInput(input) {
  const label = document.getElementById(`${input.id}-label`);
  if (input.validity.valid) {
    label.textContent = "Válido";
    label.classList.add("valid-message");
  } else {
    label.textContent = getErrorMessage(input);
    label.classList.remove("valid-message");
  }
}

function getErrorMessage(input) {
  if (input.validity.valueMissing) {
    return "Campo obrigatório.";
  } else if (input.validity.tooShort) {
    return `Deve ter pelo menos ${input.minLength} caracteres.`;
  } else if (input.validity.typeMismatch) {
    return "Formato inválido.";
  }
  return "Valor inválido.";
}

function entrarSemLogin() {
  window.location.href = "index.html"; // Redireciona para index.html
}

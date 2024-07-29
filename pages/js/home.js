function voltarParaLogin() {
  window.location.href = "index.html"; // Redireciona para index.html
}

function abrirMenuHamburguer() {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.visibility = "visible";
}

function fecharMenuHamburguer() {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.visibility = "hidden";
}

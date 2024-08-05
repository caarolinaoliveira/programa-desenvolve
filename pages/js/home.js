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
function adicionarFavorito(icon) {
  // Verifica se a imagem é o ícone vermelho
  if (icon.src.includes("icone-favorito-vermelho.png")) {
    // Se for vermelho, volta para o ícone padrão
    icon.src = "assets/icone-favorito.png";
  } else {
    // Se não for vermelho, muda para o ícone vermelho
    icon.src = "assets/icone-favorito-vermelho.png";
  }
}

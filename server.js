// import http from "http";
// biblioteca nativa do node
import app from "./pages/js/crud.js";

const PORT = 3000;

const rotas = {
  "/": "Boti Students iniciando...",
  "/produtos": "Entrei na rota de produtos",
};

app.listen(PORT, () => {
  console.log("servidor escutando... ");
});

// node server.js

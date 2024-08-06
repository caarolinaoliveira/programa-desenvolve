import express from "express";

const app = express();
app.use(express.json());
// toda vez que chega um dado via body, ele chega como string. para conseguir utilizar como json, precisa converter para json

const produtos = [
  {
    id: 1,
    titulo: "Alfa Arbutina e Vitamina C",
    preço: "R$ 135,00",
  },
  {
    id: 2,
    titulo: "Gel de olhos lifting",
    preço: "R$ 100,00",
  },
];

function buscaProduto(id) {
  return produtos.findIndex((produto) => {
    return produto.id === Number(id);
  });
}

// BUSCAR TODOS
app.get("/", (req, res) => {
  res.status(200).send("Boti Students .....");
});
app.get("/produtos", (req, res) => {
  res.status(200).json(produtos);
});

// GET COM ID
app.get("/produtos/:id", (req, res) => {
  const index = buscaProduto(req.params.id);
  res.status(200).json(produtos[index]);
});

// ADICIONAR PRODUTO
app.post("/produtos", (req, res) => {
  produtos.push(req.body);
  res.status(201).send("Produto cadastrado com sucesso");
});

// ALTERAR ALGUM PRODUTO COM ID
app.put("/produtos/:id", (req, res) => {
  const index = buscaProduto(req.params.id);
  produtos[index].titulo = req.body.titulo;
  res.status(200).json(produtos);
});

// DELETANDO ALGUM PRODUTO

app.delete("/produtos/:id", (req, res) => {
  const index = buscaProduto(req.params.id);
  produtos.splice(index, 1);
  res.status(200).send("produtos removido com sucesso!");
});
export default app;

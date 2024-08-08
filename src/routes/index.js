// import express from "express";
// import produtos from "./produtosRoutes.js";

// const routes = (app) => {
//   app.route("/").get((req, res) => res.status(200).send("botistudents"));

//   app.use(express.json(), produtos);
// };

// export default routes;

import express from "express";
import cors from "cors"; // Importe o middleware cors
import produtos from "./produtosRoutes.js";

const routes = (app) => {
  // Use o middleware cors para permitir requisições de qualquer origem
  app.use(cors());

  // Outras configurações
  app.route("/").get((req, res) => res.status(200).send("botistudents"));

  // Use o middleware para rotas específicas
  app.use(express.json(), produtos);
};

export default routes;

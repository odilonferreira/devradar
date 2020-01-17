//criando servidor
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-i98sh.mongodb.net/semana10?retryWrites=true&w=majority",
  {
    // tirando erros de depreciacao mongoose
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

// Métodos HTTP: get, post, put, delete

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ..)
// Route Params: request.params (Identificar um recurso na alteracao ou remocao)
// Body: request.body (Dados para criacao ou alteracao de um registro)

app.use(express.json());
app.use(routes);

app.listen(3333);

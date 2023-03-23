const express = require("express");
require("dotenv").config();
const connectDB = require("./src/database/database"); // arquivo de conexão com o banco de dados
const app = express();
const port = 3000;
const usuarioRouter = require("./src/router/usuario.router"); // arquivo de rotas do usuário
const authRouter = require("./src/router/auth.router"); // arquivo de rotas de autenticação
const produtoRouter = require("./src/router/produto.router"); // arquivo de rotas do produto

app.use(express.json());

connectDB(); // conectando com o banco de dados

app.use("/usuario", usuarioRouter); // chamando as rotas do usuário
app.use("/produto", produtoRouter); // chamando as rotas do produto
app.get("/", (req, res) => {
    res.send({ message: "Bem vindo ao Market Place..." });
});
app.use("/auth", authRouter); // chamando as rotas de autenticação

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});


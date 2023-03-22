const express = require("express");
const connectDB = require("./src/database/database"); // arquivo de conexão com o banco de dados
const app = express();
const port = 3000;
const usuarioRouter = require("./src/router/usuario.router"); // arquivo de rotas do usuário

app.use(express.json());

connectDB(); // conectando com o banco de dados

app.use("/usuario", usuarioRouter); // chamando as rotas do usuário
app.get("/", (req, res) => {
    res.send({ message: "Bem vindo ao Market Place..." });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})


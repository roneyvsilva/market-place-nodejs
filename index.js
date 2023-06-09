const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./src/database/database"); // arquivo de conexão com o banco de dados
const app = express();
const port = 3000;
const usuarioRouter = require("./src/router/usuario.router"); // arquivo de rotas do usuário
const authRouter = require("./src/router/auth.router"); // arquivo de rotas de autenticação
const produtoRouter = require("./src/router/produto.router"); // arquivo de rotas do produto
const categoriaRouter = require("./src/router/categoria.router"); // arquivo de rotas da categoria
const carrinhoRouter = require("./src/router/carrinho.router"); // arquivo de rotas do carrinho
const pedidoRouter = require("./src/router/pedido.router"); // arquivo de rotas do pedido
const docsRouter = require("./src/router/docs.router"); // arquivo de rotas de docs

app.use(express.json());
app.use(cors(
    {
        origin: ["localhost:3001", "localhost:3002"],
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
));

connectDB(); // conectando com o banco de dados

app.use("/usuario", usuarioRouter); // chamando as rotas do usuário
app.use("/produto", produtoRouter); // chamando as rotas do produto
app.use("/categoria", categoriaRouter); // chamando as rotas da categoria
app.use("/carrinho", carrinhoRouter); // chamando as rotas do carrinho
app.use("/pedido", pedidoRouter); // chamando as rotas do pedido
app.use("/docs", docsRouter); // chamando as rotas do pedido

app.get("/", (req, res) => {
    res.send({ message: "Bem vindo ao Market Place..." });
});
app.use("/auth", authRouter); // chamando as rotas de autenticação

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});


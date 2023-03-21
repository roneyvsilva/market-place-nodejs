const express = require("express");
const connectDB = require("./src/database/database");
const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send({ message: "Bem vindo ao Market Place..." });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})


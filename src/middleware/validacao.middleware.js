const validaUsuario = (req, res, next) => {
    if (!req.body.nome) {
        return res.status(400).send({ message: `Nome não foi informado.` });
    }
    if (!req.body.email) {
        return res.status(400).send({ message: `Email não foi informado.` });
    }
    if (!req.body.senha) {
        return res.status(400).send({ message: `Senha não foi informada.` });
    }
    if (!req.body.imagem) {
        return res.status(400).send({ message: `Imagem não foi informada.` });
    }
    if (!req.body.admin) {
        return res.status(400).send({ message: `Campo 'admin' não foi informado.` });
    }

    return next();
}

const validaProduto = (req, res) => {

    let erros = [];
    if (!req.body.nome) {
        erros.push("nome");
    }
    if (!req.body.descricao) {
        erros.push("descricao");
    }
    if (!req.body.precoUnitario) {
        erros.push("precoUnitario");
    }
    if (!req.body.imagem) {
        erros.push("imagem");
    }
    if (!req.body.codigoBarra) {
        erros.push("codigoBarra");
    }

    if (erros.length > 0) {
        return res.status(400).send({ message: `O(s) campo(s) [${erros}] precisa(m) ser preenchido(s).` });
    }
    return next();
}

const validaCategoria = (req, res) => {

    let erros = [];
    if (!req.body.nome) {
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido.` });
    }

    return next();
}

module.exports = {
    validaUsuario,
    validaProduto,
    validaCategoria
};

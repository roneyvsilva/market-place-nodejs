const carrinhoService = require("../service/carrinho.service");

const findCarrinhoByIdController = async (req, res) => {
    try {
        return res.status(200).send(await carrinhoService.findCarrinhoByIdService(req.params.id));
    } catch (e) {
        if (e.kind == "ObjectId") {
            return res.status(400).send({ message: `ID informado está incorreto.` });
        }
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const findAllCarrinhoController = async (req, res) => {
    try {
        return res.status(200).send(await carrinhoService.findAllCarrinhoService(req.query.limit, req.query.offset));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const createCarrinhoController = async (req, res) => {
    try {
        const body = {
            ...req.body,
            userId: req.userId
        }
        return res.status(201).send(await carrinhoService.createCarrinhoService(body));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const addProdutoCarrinhoController = async (req, res) => {
    try {
        const categoria = await carrinhoService.addProdutoCarrinhoService(req.params.id, req.body);
        if (categoria.value != null) {
            res.status(201).send({ message: `Produto adicionado ao carrinho com sucesso.` });
        } else {
            res.status(400).send({ message: `Algo de errado com o produto. Produto não adicionado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const removeProdutoCarrinhoController = async (req, res) => {
    try {
        const categoria = await carrinhoService.removeProdutoCarrinhoService(req.params.id, req.body);
        if (categoria.value != null) {
            res.status(200).send({ message: `Produto removido do produto com sucesso.` });
        } else {
            res.status(400).send({ message: `Algo de errado com o produto. Produto não removido.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const updateCarrinhoController = async (req, res) => {
    try {
        return res.status(200).send(await carrinhoService.updateCarrinhoService(req.params.id, req.body));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const deleteCarrinhoController = async (req, res) => {
    try {
        return res.status(200).send(await carrinhoService.deleteCarrinhoService(req.params.id));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

module.exports = {
    findCarrinhoByIdController,
    findAllCarrinhoController,
    createCarrinhoController,
    updateCarrinhoController,
    deleteCarrinhoController,
    addProdutoCarrinhoController,
    removeProdutoCarrinhoController
}

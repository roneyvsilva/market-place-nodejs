const Carrinho = require("../model/Carrinho");

const findCarrinhoByIdService = (id) => {
    return Carrinho.findById(id);
}

const findAllCarrinhoService = () => {
    return Carrinho.find();
}

const createCarrinhoService = (body) => {
    return Carrinho.create(body);
}

const addCarrinhoCarrinhoService = (id, produto) => {
    return Carrinho.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                produtos: {
                    _id: produto._id,
                    createdAt: produto.createdAt
                }
            }
        },
        {
            rawResult: true
        }
    );
}

const removeCarrinhoCarrinhoService = (id, produto) => {
    return Carrinho.findOneAndUpdate(
        {
            _id: id
        },
        {
            $pull: {
                categorias: {
                    _id: produto._id
                }
            }
        },
        {
            rawResult: true
        }
    );
}

const updateCarrinhoService = (id, body) => {
    return Carrinho.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const deleteCarrinhoService = (id) => {
    return Carrinho.findByIdAndRemove(id);
}


module.exports = {
    findCarrinhoByIdService,
    findAllCarrinhoService,
    createCarrinhoService,
    updateCarrinhoService,
    deleteCarrinhoService,
    addCarrinhoCarrinhoService,
    removeCarrinhoCarrinhoService
}

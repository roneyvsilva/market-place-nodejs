const Produto = require("../model/Produto");

const findProductByIdService = async (id) => {
    return Produto.findById(id);
}

const findAllProductService = async () => {
    return Produto.find();
}

const createProductService = async (body) => {
    return Produto.create(body);
}

const addCategoriaProdutoService = async (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                categorias: {
                    _id: categoria._id,
                    createdAt: categoria.createdAt
                }
            }
        },
        {
            rawResult: true
        }
    );
}

const removeCategoriaProdutoService = async (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id
        },
        {
            $pull: {
                categorias: {
                    _id: categoria._id
                }
            }
        },
        {
            rawResult: true
        }
    );
}

const updateProductService = async (id, body) => {
    return Produto.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const deleteProductService = async (id) => {
    return Produto.findByIdAndRemove(id);
}


module.exports = {
    findProductByIdService,
    findAllProductService,
    createProductService,
    updateProductService,
    deleteProductService,
    addCategoriaProdutoService,
    removeCategoriaProdutoService
}

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
    deleteProductService
}

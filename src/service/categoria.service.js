const Categoria = require("../model/Categoria");

const findCategoriaByIdService = async (id) => {
    return Categoria.findById(id);
}

const findAllCategoriaService = async () => {
    return Categoria.find();
}

const createCategoriaService = async (body) => {
    return Categoria.create(body);
}

const updateCategoriaService = async (id, body) => {
    return Categoria.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const deleteCategoriaService = async (id) => {
    return Categoria.findByIdAndRemove(id);
}


module.exports = {
    findCategoriaByIdService,
    findAllCategoriaService,
    createCategoriaService,
    updateCategoriaService,
    deleteCategoriaService
}

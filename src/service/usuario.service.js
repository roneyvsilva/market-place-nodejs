const Usuario = require("../model/Usuario");

const findUserByIdService = (id) => {
    return Usuario.findById(id);
}

const findAllUserService = (limit, offset) => {
    return Usuario.find().limit(limit).skip(offset);
}

const createUserService = (body) => {
    return Usuario.create(body);
}

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const removeUserService = (id) => {
    return Usuario.findByIdAndRemove(id);
}

const addUserAddressService = (id, endereco) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                enderecos: endereco
            }
        },
        {
            rawResult: true
        }
    );
}

const removeUserAddressService = (id, endereco) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id
        },
        {
            $pull: {
                enderecos: {
                    _id: endereco.Id
                }
            }
        },
        {
            rawResult: true
        }
    );
}

const addUserFavProductService = (id, produto) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                produtosFavoritos: {
                    _id: produto._id
                }
            }
        },
        {
            rawResult: true
        }
    );
}

const removeUserFavProductService = (id, produto) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id
        },
        {
            $pull: {
                produtosFavoritos: {
                    _id: produto._Id
                }
            }
        },
        {
            rawResult: true
        }
    );
}

module.exports = {
    findUserByIdService,
    findAllUserService,
    createUserService,
    updateUserService,
    removeUserService,
    addUserAddressService,
    removeUserAddressService,
    addUserFavProductService,
    removeUserFavProductService
}

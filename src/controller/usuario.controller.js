const usuarioService = require("../service/usuario.service");


const findUserByIdController = async (req, res) => {
    try {
        const usuario = await usuarioService.findUserByIdService(req.params.id);
        if (!usuario) {
            return res.status(404).send({ message: "Usuário não encontrado." });
        }
        return res.status(200).send(usuario);
    } catch (e) {
        if (e.kind == "ObjectId") {
            return res.status(400).send({ Message: `ID informado está incorreto.` });
        }
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const findAllUsersController = async (req, res) => {
    try {
        return res.status(200).send(await usuarioService.findAllUserService());
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const createUserController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({ Message: `O campo 'nome' não foi informado.` });
        }
        return res.status(201).send(await usuarioService.createUserService(body));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const updateUserController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({ Message: `O campo 'nome' não foi informado.` });
        }
        return res.status(200).send(await usuarioService.updateUserService(req.params.id, body));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const deleteUserController = async (req, res) => {
    try {
        const usuario = await usuarioService.removeUserService(req.params.id);

        if (usuario != null) {
            return res.status(200).send({ Message: `Usuário excluído com sucesso.` });
        } else {
            return res.status(404).send({ Message: `Usuário não encontrado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const addUserAddressController = async (req, res) => {
    try {
        req.body.createdAt = new Date();
        const endereco = await usuarioService.addUserAddressService(req.params.id, req.body);
        if (endereco.ok == 1) {
            res.status(201).send({ Message: `Endereço adicionado ao usuário com sucesso.` });
        } else {
            res.status(400).send({ Message: `Algo de errado com o endereço. Endereço não adicionado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const removeUserAddressController = async (req, res) => {
    try {
        const endereco = await usuarioService.removeUserAddressService(req.body.id, req.body.enderecoId);
        if (endereco.ok == 1) {
            res.status(200).send({ Message: `Endereço removido do usuário com sucesso.` });
        } else {
            res.status(400).send({ Message: `Algo de errado com o endereço. Endereço não removido.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const addUserFavProductController = async (req, res) => {
    try {

    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const removeUserFavProductController = async (req, res) => {
    try {

    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    deleteUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProductController,
    removeUserFavProductController
}

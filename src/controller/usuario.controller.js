const findUserByIdController = async (req, res) => {
    try {

    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const findAllUsersController = async (req, res) => {
    try {

    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const createUserController = async (req, res) => {
    try {

    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const updateUserController = async (req, res) => {
    try {

    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const deleteUserController = async (req, res) => {
    try {

    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const addUserAddressController = async (req, res) => {
    try {

    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ Message: `Erro inesperado. Tente novamente!` });
    }
};

const removeUserAddressController = async (req, res) => {
    try {

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

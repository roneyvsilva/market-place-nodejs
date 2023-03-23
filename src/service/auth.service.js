const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

const segredo = "ed727127-8f55-420b-b992-c9792b546475";
const loginService = (email) => Usuario.findOne({ email: email }).select("senha");
const generateToken = (userId) => jwt.sign({ id: userId }, segredo, { expiresIn: "1d" });


module.exports = {
    loginService,
    generateToken,
    segredo
}

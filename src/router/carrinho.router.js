const router = require("express").Router();
const carrinhoController = require("../controller/carrinho.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaCarrinho, validaId } = require("../middleware/validacao.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, validaId, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, carrinhoController.findAllCarrinhoController);
// rotas POST
router.post("/create", authMiddleware, validaCarrinho, carrinhoController.createCarrinhoController);
router.post("/addProduto/:id", authMiddleware, validaId, carrinhoController.addProdutoCarrinhoController);
// rotas PUT
router.put("/update/:id", authMiddleware, validaId, validaCarrinho, carrinhoController.updateCarrinhoController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, validaId, carrinhoController.deleteCarrinhoController);
router.delete("/removeProduto/:id", authMiddleware, validaId, carrinhoController.removeProdutoCarrinhoController);

module.exports = router;

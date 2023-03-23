const router = require("express").Router();
const carrinhoController = require("../controller/carrinho.controller");
const authMiddleware = require("../middleware/auth.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, carrinhoController.findAllCarrinhoController);
// rotas POST
router.post("/create", authMiddleware, carrinhoController.createCarrinhoController);
router.post("/addProduto/:id", carrinhoController.addProdutoCarrinhoController);
// rotas PUT
router.put("/update/:id", authMiddleware, carrinhoController.updateCarrinhoController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, carrinhoController.deleteCarrinhoController);
router.delete("/removeProduto/:id", carrinhoController.removeProdutoCarrinhoController);

module.exports = router;

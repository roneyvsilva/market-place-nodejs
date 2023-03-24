const router = require("express").Router();
const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto, validaId } = require("../middleware/validacao.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, validaId, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, produtoController.findAllProductController);
// rotas POST
router.post("/create", authMiddleware, validaProduto, produtoController.createProductController);
router.post("/addCategoria/:id", authMiddleware, validaId, produtoController.addCategoriaProdutoController);
// rotas PUT
router.put("/update/:id", authMiddleware, validaId, validaProduto, produtoController.updateProductController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, validaId, produtoController.deleteProductController);
router.delete("/removeCategoria/:id", authMiddleware, validaId, produtoController.removeCategoriaProdutoController);

module.exports = router;




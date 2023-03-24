const router = require("express").Router();
const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto } = require("../middleware/validacao.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, produtoController.findAllProductController);
// rotas POST
router.post("/create", validaProduto, authMiddleware, produtoController.createProductController);
router.post("/addCategoria/:id", produtoController.addCategoriaProdutoController);
// rotas PUT
router.put("/update/:id", validaProduto, authMiddleware, produtoController.updateProductController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, produtoController.deleteProductController);
router.delete("/removeCategoria/:id", produtoController.removeCategoriaProdutoController);

module.exports = router;




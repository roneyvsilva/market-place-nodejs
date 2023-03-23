const router = require("express").Router();
const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, produtoController.findAllProductController);
// rotas POST
router.post("/create", authMiddleware, produtoController.createProductController);
router.post("/addCategoria/:id", produtoController.addCategoriaProdutoController);
// rotas PUT
router.put("/update/:id", authMiddleware, produtoController.updateProductController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, produtoController.deleteProductController);
router.delete("/removeCategoria/:id", produtoController.removeCategoriaProdutoController);

module.exports = router;




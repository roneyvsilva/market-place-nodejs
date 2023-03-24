const router = require("express").Router();
const categoriaController = require("../controller/categoria.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaCarrinho, validaId } = require("../middleware/validacao.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, validaId, categoriaController.findCategoriaByIdController);
router.get("/findAll", authMiddleware, categoriaController.findAllCategoriaController);
// rotas POST
router.post("/create", authMiddleware, validaCategoria, categoriaController.createCategoriaController);
// rotas PUT
router.put("/update/:id", authMiddleware, validaId, validaCategoria, categoriaController.updateCategoriaController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, validaId, categoriaController.deleteCategoriaController);

module.exports = router;

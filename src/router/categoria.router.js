const router = require("express").Router();
const categoriaController = require("../controller/categoria.controller");
const authMiddleware = require("../middleware/auth.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, categoriaController.findCategoriaByIdController);
router.get("/findAll", authMiddleware, categoriaController.findAllCategoriaController);
// rotas POST
router.post("/create", authMiddleware, categoriaController.createCategoriaController);
// rotas PUT
router.put("/update/:id", authMiddleware, categoriaController.updateCategoriaController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, categoriaController.deleteCategoriaController);

module.exports = router;

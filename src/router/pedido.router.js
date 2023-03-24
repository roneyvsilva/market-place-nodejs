const router = require("express").Router();
const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaPedido, validaId } = require("../middleware/validacao.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, validaId, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, pedidoController.findAllPedidoController);
// rotas POST
router.post("/create", authMiddleware, validaPedido, pedidoController.createPedidoController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, validaId, pedidoController.deletePedidoController);
//rotas PATCH
router.patch("/updateStatus/:id", authMiddleware, validaId, pedidoController.udpateStatusPedidoController);

module.exports = router;

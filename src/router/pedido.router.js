const router = require("express").Router();
const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaPedido } = require("../middleware/validacao.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, pedidoController.findAllPedidoController);
// rotas POST
router.post("/create", authMiddleware, validaPedido, pedidoController.createPedidoController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, pedidoController.deletePedidoController);
//rotas PATCH
router.patch("/updateStatus/:id", authMiddleware, pedidoController.udpateStatusPedidoController);

module.exports = router;

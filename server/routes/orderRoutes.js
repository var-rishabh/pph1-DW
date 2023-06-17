const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");
const { checkAuth } = require("../middlewares/authMiddleware");

router.post("/checkout", checkAuth, orderController.checkout);
router.post("/approve/:orderID", orderController.approveOrder);
router.post("/cancel/:orderID", orderController.cancelOrder);

router.get("/userorders", checkAuth, orderController.getOrdersOfUser);
router.get("/activeservices", checkAuth, orderController.getActiveServices);

router.get("/", orderController.getAllOrders);
router.get("/:orderID", orderController.getOrder);

module.exports = router;

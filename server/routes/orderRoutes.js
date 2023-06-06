const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");
const { checkAuth } = require("../middlewares/authMiddleware");

// router.get("/", checkAuth, orderController.getBalance);

module.exports = router;

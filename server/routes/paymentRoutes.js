const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/paymentController");
const { checkAuth } = require("../middlewares/authMiddleware");

router.get("/checkout", checkAuth, paymentController.checkout);
router.get("/verification", checkAuth, paymentController.verification);

module.exports = router;

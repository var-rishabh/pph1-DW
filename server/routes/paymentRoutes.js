const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/paymentController");
const { checkAuth } = require("../middlewares/authMiddleware");

router.post("/checkout", paymentController.checkout);
router.post("/verification", paymentController.verification);
// router.post("/checkout", checkAuth, paymentController.checkout);
// router.post("/verification", checkAuth, paymentController.verification);

module.exports = router;

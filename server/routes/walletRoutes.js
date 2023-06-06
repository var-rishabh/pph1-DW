const express = require("express");
const router = express.Router();

const walletController = require("../controllers/walletController");
const { checkAuth } = require("../middlewares/authMiddleware");

router.get("/getbalance", checkAuth, walletController.getBalance);
router.post("/checkout", checkAuth, walletController.checkout);
router.post("/verification", walletController.verification);
router.post("/userverification", checkAuth, walletController.userverification);
router.get(
  "/transactionhistory",
  checkAuth,
  walletController.transactionHistory
);

module.exports = router;

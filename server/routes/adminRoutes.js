const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const { adminAuth } = require("../middlewares/adminAuthMiddleware");

router.post("/register", adminController.addAdmin);
router.post("/login", adminController.loginAdmin);

module.exports = router;

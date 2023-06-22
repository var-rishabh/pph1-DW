const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { checkAuth } = require("../middlewares/authMiddleware");

router.post("/addUser", checkAuth, userController.addUser);
router.get("/getAllUsers", userController.getAllUsers);
router.get("/:userID", userController.getUser);

module.exports = router;

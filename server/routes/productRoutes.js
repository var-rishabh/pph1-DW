const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const { needAuth } = require("../middlewares/needAuthMiddleware");

router.post("/addProduct", productController.addProduct);
router.get("/getAllProducts", needAuth, productController.getAllProducts);
router.get("/:productID", needAuth, productController.getProductByID);
router.get("/", needAuth, productController.getProductsByCategory);
router.put("/update/:productID", productController.updateProduct);
router.delete("/:productID", productController.deleteProduct);

module.exports = router;

const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.post("/addProduct", productController.addProduct);
router.get("/getAllProducts", productController.getAllProducts);
router.get("/:productID", productController.getProductByID);
router.get("/", productController.getProductsByCategory);
router.put("/update/:productID", productController.updateProduct);
router.delete("/:productID", productController.deleteProduct);

module.exports = router;

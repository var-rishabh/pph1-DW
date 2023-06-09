const express = require("express");
const router = express.Router();

const couponController = require("../controllers/couponController");
const { checkAuth } = require("../middlewares/authMiddleware");

router.post("/generate", couponController.generateCoupon);
router.get("/all", couponController.getAllCoupons);
router.delete("/delete/:couponID", couponController.deleteCoupon);
router.post("/apply", checkAuth, couponController.applyCoupon);
router.post("/remove", checkAuth, couponController.removeCoupon);

module.exports = router;

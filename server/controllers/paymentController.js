const Payment = require("../models/paymentModel");
const crypto = require("crypto");
const { instance } = require("../config/razorpay");

module.exports.checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    console.log("order -- ", order);
    return res.status(200).json({
      status: "success",
      message: "Order Placed.",
      data: order,
    });
  } catch (err) {
    return res.status(401).json({
      status: "failure",
      message: err.message,
    });
  }
};

module.exports.verification = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    console.log("body -- ", req.body);
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
    .update(body.toString())
    .digest("hex");
    console.log("expectedSignature -- ", expectedSignature);
    
    const isAuthentic = expectedSignature === razorpay_signature;
    console.log("isAuthentic -- ", isAuthentic);
    if (isAuthentic) {
      // Database comes here
  
      // await Payment.create({
      //   razorpay_order_id,
      //   razorpay_payment_id,
      //   razorpay_signature,
      // });
  
      return res.status(200).json({
        status: "success",
        message: "Payment done successfully.",
        data: isAuthentic,
      });
    } else {
      return res.status(401).json({
        status: "failure",
        message: "Payment not authenticated.",
        data: null
      });
    }

  } catch (err) {
    return res.status(401).json({
      status: "failure",
      message: err.message,
    });
  }
};

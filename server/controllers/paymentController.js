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
    const users = await User.find();

    return res.status(200).json({
      status: "success",
      message: "All users found.",
      data: users,
    });
  } catch (err) {
    return res.status(401).json({
      status: "failure",
      message: err.message,
    });
  }
};

const Transaction = require("../models/transactionModel");
const User = require("../models/userModel");

const crypto = require("crypto");
const { instance } = require("../config/razorpay");
const { getCurrentBalance } = require("../services/walletServices");

module.exports.getBalance = async (req, res) => {
  try {
    const userFireId = req.user.user_id;
    const userData = await User.findOne({ user_firebase_id: userFireId });
    if (userData) {
    } else {
      return res.status(404).json({
        status: "failure",
        message: "User not found.",
        data: null,
      });
    }
  } catch (err) {
    return res.status(401).json({
      status: "failure",
      message: err.message,
    });
  }
};

module.exports.checkout = async (req, res) => {
  try {
    const userFireId = req.user.user_id;
    const userData = await User.findOne({ user_firebase_id: userFireId });
    if (userData) {
      const currentBalance = await getCurrentBalance(userData._id);
      const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
      };
      const order = await instance.orders.create(options);
      if (order.status === "created") {
        const userTransaction = new Transaction({
          // order_type: req.body.order_type,
          order_type: "recharge",
          user_id: userData._id,
          balance: currentBalance,
          amount: req.body.amount,
          payment_response: "pending",
          amount: req.body.amount,
          razorpay_order_id: order.id,
        });
        await userTransaction.save();
        return res.status(200).json({
          status: "success",
          message: "Order Placed.",
          data: order,
        });
      } else {
        return res.status(401).json({
          status: "failure",
          message: "Order not created.",
          data: order,
        });
      }
    } else {
      return res.status(404).json({
        status: "failure",
        message: "User not found.",
        data: null,
      });
    }
  } catch (err) {
    return res.status(401).json({
      status: "failure",
      message: err.message,
    });
  }
};

module.exports.verification = async (req, res) => {
  try {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET_KEY;
    console.log(req.body);

    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    console.log(digest, req.headers["x-razorpay-signature"]);

    if (digest === req.headers["x-razorpay-signature"]) {
      console.log("payment legit");
    }
    return res.status(200).json({
      status: "success",
      message: "Payment done successfully.",
      data: null,
    });
  } catch (err) {
    return res.status(401).json({
      status: "failure",
      message: err.message,
    });
  }
};

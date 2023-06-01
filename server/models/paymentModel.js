const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["refund", "recharge", "payment"],
      default: "recharge",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    payment_response: {
      type: String,
      enum: ["success", "failed", "pending"],
      required: true,
    },
    razorpay_order_id: {
      type: String,
      required: true,
    },
    razorpay_payment_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = Payment;

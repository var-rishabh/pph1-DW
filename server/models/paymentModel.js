const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["refund", "recharge"],
      default: "recharge",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
    },
    payment_response: {
      type: String,
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
    razorpay_signature: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = Payment;

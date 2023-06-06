const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  alt_address: {
    type: String,
    required: true,
  },
  order_type: {
    type: String,
    enum: ["buy", "trial", "subscribe"],
    required: true,
    default: "buy",
  },
  approved: {
    type: String,
    enum: ["approved", "pending", "cancelled", "completed"],
    default: "pending",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;

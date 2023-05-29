const mongoose = require("mongoose");

const WalletSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      default: 0,
      required: true,
    },
    transactions: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Wallet = mongoose.model("Wallet", WalletSchema);
module.exports = Wallet;

const Transaction = require("../models/transactionModel");
const User = require("../models/userModel");

const { getCurrentBalance } = require("../services/walletServices");

module.exports.getBalance = async (req, res) => {
  try {
    const userFireId = req.user.user_id;
    const userData = await User.findOne({ user_firebase_id: userFireId });
    if (userData) {
      const currentBalance = await getCurrentBalance(userData._id);
      return res.status(200).json({
        status: "success",
        message: "User current balance.",
        data: currentBalance,
      });
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

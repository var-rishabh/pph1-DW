const Transaction = require("../models/transactionModel");

module.exports.getCurrentBalance = async (userID) => {
  var balance = 0;
  const transaction = await Transaction.findOne({
    user_id: userID,
    payment_response: "success",
  }).sort({ _id: -1 });
  if (transaction) {
    balance = transaction["balance"];
  }

  return balance;
};

module.exports.debitAmount = async (userID, amount, currentBalance, orders) => {
  const userTransaction = new Transaction({
    user_id: userID,
    order_type: "order",
    orders: orders,
    transaction_type: "debit",
    amount: amount,
    balance: currentBalance - amount,
    payment_response: "success",
  });
  await userTransaction.save();
};

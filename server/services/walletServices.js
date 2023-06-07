const Transaction = require("../models/transactionModel");

module.exports.getCurrentBalance = async (userID) => {
  var balance = 0;
  const transaction = await Transaction.findOne({
    user_id: userID, payment_response: "success"
  }).sort({ _id: -1 });
  if (transaction) {
    balance = transaction["balance"];
  }
  console.log(transaction, balance);
  return balance;
};

const Transaction = require("../models/transactionModel");

module.exports.getCurrentBalance = async (userID) => {
  var balance = 0;
  const transaction = await Transaction.findOne({
    user_id: userID,
  }).sort({ _id: -1 });
  if (transaction &&  transaction["payment_response"] === "success") {
    balance = transaction["balance"];
  }

  return balance;
};

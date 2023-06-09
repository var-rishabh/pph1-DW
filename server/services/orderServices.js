const Order = require("../models/orderModel");

module.exports.checkFirstOrder = async (userID) => {
  var firstOrder = true;

  const order = await Order.findOne({
    user_id: userID, status: "completed"
  });
  if (order) {
    firstOrder = true;
  }

  return firstOrder;
};

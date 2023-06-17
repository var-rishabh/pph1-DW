const User = require("../models/userModel");

module.exports.checkFirstTrial = async (userID) => {
  const user = await User.findById(userID);
  return user["first_trial"];
};

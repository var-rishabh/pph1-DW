const User = require("../models/userModel");

module.exports.addUser = async (req, res) => {
  try {
    const userFireId = req.user.user_id;  
    const userData = await User.findOne({  user_firebase_id: userFireId});
    if(!userData) {
        const newUser = new User();
        newUser['user_firebase_id'] =  userFireId;
        newUser.save();

        return res.status(200).json({
          status: "success",
          message: "User added successfully.",
          data: newUser
        });
    }
    return res.status(409).json({
      status: "success",
      message: "User already exist.",
      data: userData.user_firebase_id
    });
  } catch (err) {
    return res.status(401).json({
      status: "failure",
      message: err.message
    });
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
        status: "success",
        message: "All users found.",
        data: users
    });
  } catch (err) {
    return res.status(401).json({
      status: "failure",
      message: err.message
    });
  }
};

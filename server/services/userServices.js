const User = require("../models/userModel");

const admin = require("../config/firebase");
const db = admin.firestore();

module.exports.checkFirstTrial = async (userID) => {
  const user = await User.findById(userID);
  return user["first_trial"];
};

module.exports.getAllUserDetails = async () => {
  const allUsers = [];
  const snapshot = await db.collection("users").get();
  for (const doc of snapshot.docs) {
    const user = await User.findOne({ user_firebase_id: doc.id });
    var userData = {
      _id: user._id,
      vip: user.vip,
      first_trial: user.first_trial,
      ...doc.data(),
    };
    allUsers.push(userData);
  }
  return allUsers;
};

module.exports.getUserDetail = async (userID) => {
  const userData = await User.findOne({ _id: userID });
  if (userData) {
    const docId = userData["user_firebase_id"];
    const doc = await db.collection("users").doc(docId).get();
    const userDoc = {
      _id: userData._id,
      vip: userData.vip,
      first_trial: userData.first_trial,
      ...doc.data(),
    };
    return {
      status: "success",
      message: "User found successfully.",
      data: userDoc,
    };
  } else {
    return {
      status: "failure",
      message: "User not found.",
      data: null,
    };
  }
};

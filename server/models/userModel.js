const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    user_firebase_id: {
      type: String,
      required: true,
      unique: true,
    },
    vip: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;

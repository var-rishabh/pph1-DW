const User = require("../models/userModel");
const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");
const Trial = require("../models/trialModel");
const Subscribe = require("../models/subscribeModel");

const {
  getCurrentBalance,
  debitAmount,
} = require("../services/walletServices");
const { createOrder } = require("../services/orderServices");

module.exports.checkout = async (req, res) => {
  try {
    const userFireId = req.user.user_id;
    const { phone, address } = req.body;
    const userData = await User.findOne({ user_firebase_id: userFireId });
    if (userData) {
      const userCart = await Cart.findOne({ user_id: userData._id });
      if (userCart) {
        if (userCart["items"].length > 0) {
          const currentBalance = await getCurrentBalance(userData._id);
          if (currentBalance >= userCart["total"]) {
            const orders = [];
            for (const item in userCart["items"]) {
              const userOrder = await createOrder(
                userData._id,
                item,
                phone,
                address,
                userCart
              );
              orders.push({
                order_id: userOrder._id,
                order_type: userCart["items"][item]["order_type"],
              });
            }
            await debitAmount(
              userData._id,
              userCart["total"],
              currentBalance,
              orders
            );
            userCart["items"] = [];
            userCart["coupon_code"] = "";
            userCart["sub_total"] = 0;
            userCart["gst"] = 0;
            userCart["discount"] = 0;
            userCart["total"] = 0;
            await userCart.save();
            return res.status(200).json({
              status: "success",
              message: "Checkout successful.",
              data: null,
            });
          } else {
            return res.status(401).json({
              status: "failure",
              message: "Insufficient balance.",
              data: null,
            });
          }
        } else {
          return res.status(400).json({
            status: "failure",
            message: "No item in cart.",
            data: null,
          });
        }
      } else {
        return res.status(404).json({
          status: "failure",
          message: "Cart not found.",
          data: null,
        });
      }
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

module.exports.getAllOrders = async (req, res) => {
  try {
    const query = req.query.orderType;
    var allOrders;
    if (query === "buy") {
      allOrders = await Order.find({ order_type: "buy" });
    } else if (query === "trial") {
      allOrders = await Order.find({ order_type: "trial" }).populate([
        "trial_id",
      ]);
    } else if (query === "subscribe") {
      allOrders = await Order.find({ order_type: "subscribe" }).populate([
        "subscribe_id",
      ]);
    } else {
      allOrders = await Order.find();
    }
    if (allOrders.length > 0) {
      return res.status(200).json({
        status: "success",
        message: "All orders found.",
        data: allOrders,
      });
    }
    return res.status(200).json({
      status: "success",
      message: "No orders yet.",
      data: null,
    });
  } catch (err) {
    return res.status(401).json({
      status: "failure",
      message: err.message,
    });
  }
};

module.exports.getOrder = async (req, res) => {
  try {
    const orderID = req.params.orderID;
    const order = await Order.findById(orderID);
    if (order) {
      return res.status(200).json({
        status: "success",
        message: "Order found successfully.",
        data: order,
      });
    }
    return res.status(404).json({
      status: "failure",
      message: "Order not found.",
      data: null,
    });
  } catch (err) {
    return res.status(401).json({
      status: "failure",
      message: err.message,
    });
  }
};

module.exports.getOrdersOfUser = async (req, res) => {
  try {
    const userFireId = req.user.user_id;
    const userData = await User.findOne({ user_firebase_id: userFireId });
    if (userData) {
      const query = req.query.orderType;
      var allOrders;
      if (query === "buy") {
        allOrders = await Order.find({
          user_id: userData._id,
          order_type: "buy",
        });
      } else if (query === "trial") {
        allOrders = await Order.find({
          user_id: userData._id,
          order_type: "trial",
        }).populate(["trial_id"]);
      } else if (query === "subscribe") {
        allOrders = await Order.find({
          user_id: userData._id,
          order_type: "subscribe",
        }).populate(["subscribe_id"]);
      } else {
        allOrders = await Order.find({ user_id: userData._id });
      }
      if (allOrders.length > 0) {
        return res.status(200).json({
          status: "success",
          message: "All orders found.",
          data: allOrders,
        });
      }
      return res.status(200).json({
        status: "success",
        message: "No orders yet.",
        data: null,
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

module.exports.getActiveServices = async (req, res) => {
  try {
    const userFireId = req.user.user_id;
    const userData = await User.findOne({ user_firebase_id: userFireId });
    if (userData) {
      const userID = userData._id;
      const activeServices = { trials: "", subscribes: "" };
      activeServices["trials"] = await Trial.find({
        user_id: userID,
        status: "ongoing",
      }).populate(["product"]);
      activeServices["subscribes"] = await Subscribe.find({
        user_id: userID,
        status: "ongoing",
      }).populate(["product"]);
      return res.status(200).json({
        status: "success",
        message: "All services found.",
        data: activeServices,
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
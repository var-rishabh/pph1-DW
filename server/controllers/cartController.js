const User = require("../models/userModel");
const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

module.exports.getCart = async (req, res) => {
  try {
    const userFireId = req.user.user_id;
    const userData = await User.findOne({ user_firebase_id: userFireId });
    if (userData) {
      const userCart = await Cart.findOne({ user_id: userData._id });
      if (userCart) {
        for (let x in userCart["items"]) {
          userCart["items"][x]["product_id"] = await Product.findOne({
            _id: userCart["items"][x]["product_id"],
          });
        }
        return res.status(200).json({
          status: "success",
          message: "Cart found successfully.",
          data: userCart,
        });
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

module.exports.addToCart = async (req, res) => {
  try {
    const userFireId = req.user.user_id;
    const productId = req.body.product_id;
    const quantity = req.body.quantity;
    const userData = await User.findOne({ user_firebase_id: userFireId });
    if (userData) {
      const product = await Product.findOne({ _id: productId });
      if (product) {
        const userCart = await Cart.findOne({ user_id: userData._id });
        if (userCart) {
          for (let x in userCart["items"]) {
            if ((userCart["items"][x]["product_id"]).equals(productId)) {
              return res.status(200).json({
                status: "success",
                message: "Product already added.",
                data: null,
              });
            }
          }
          userCart["items"].push({
            product_id: productId,
            quantity: quantity,
          });
          userCart["total"] += quantity * product.price;
          await userCart.save();
        } else {
          return res.status(404).json({
            status: "failure",
            message: "Cart not found.",
            data: null,
          });
        }
        return res.status(200).json({
          status: "success",
          message: "Product added to cart successfully.",
        });
      } else {
        return res.status(404).json({
          status: "failure",
          message: "Product not found.",
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

module.exports.removeFromCart = async (req, res) => {
  try {
    const userFireId = req.user.user_id;
    const productId = req.body.product_id;
    const userData = await User.findOne({ user_firebase_id: userFireId });
    if (userData) {
      const userCart = await Cart.findOne({ user_id: userData._id });
      if (userCart) {
        const product = await Product.findOne({ _id: productId });
        if (product) {
          const itemIndex = userCart["items"].findIndex(
            (item) => item.product_id == productId
          );
          if (itemIndex === -1) {
            return res.status(404).json({
              status: "failure",
              message: "Product not found in cart.",
              data: null,
            });
          }
          userCart["total"] -=
            userCart["items"][itemIndex].quantity * product.price;
          userCart["items"].splice(itemIndex, 1);
          await userCart.save();
          return res.status(200).json({
            status: "success",
            message: "Product removed from cart successfully.",
          });
        } else {
          return res.status(404).json({
            status: "failure",
            message: "Product not found.",
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

module.exports.getQuantity = async (productList, cartList) => {
  const allProducts = [];
  const quantityLookup = {};
  cartList["items"].forEach((quantity) => {
    quantityLookup[quantity.product_id] = quantity.quantity;
  });
  productList.forEach((product) => {
    const quantity = quantityLookup[product.id] || 0;
    const mergedObject = { ...product["_doc"], quantity };
    allProducts.push(mergedObject);
  });

  return allProducts;
};
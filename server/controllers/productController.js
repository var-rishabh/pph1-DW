const Product = require("../models/productModel");
const User = require("../models/userModel");
const Cart = require("../models/cartModel");

const cartController = require("../controllers/cartController");

module.exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product();
    if (req.body.title) newProduct["title"] = req.body.title;
    if (req.body.image) newProduct["image"] = req.body.image;
    if (req.body.description) newProduct["description"] = req.body.description;
    if (req.body.price) newProduct["price"] = req.body.price;
    if (req.body.size) newProduct["size"] = req.body.size;
    if (req.body.in_stock) newProduct["in_stock"] = req.body.in_stock;
    if (req.body.brand_name) newProduct["brand_name"] = req.body.brand_name;
    if (req.body.category) newProduct["category"] = req.body.category;
    if (req.body.benefits) newProduct["benefits"] = req.body.benefits;
    await newProduct.save();

    return res.status(200).json({
      status: "success",
      message: "Product added successfully.",
      data: newProduct,
    });
  } catch (err) {
    return res.status(401).json({
      status: "failure",
      message: err.message,
    });
  }
};

module.exports.getAllProducts = async (req, res) => {
  try {
    var allProducts = [];
    const products = await Product.find();
    if (req.user) {
      const userData = await User.findOne({
        user_firebase_id: req.user.user_id,
      });
      const userCart = await Cart.findOne({ user_id: userData._id });
      allProducts = await cartController.getQuantity(products, userCart);
    } else {
      allProducts = products;
    }
    return res.status(200).json({
      status: "success",
      message: "All products found.",
      data: allProducts,
    });
  } catch (err) {
    return res.status(401).json({
      status: "failure",
      message: err.message,
    });
  }
};

module.exports.getProductByID = async (req, res) => {
  try {
    var allProducts = [];
    const product_id = req.params.productID;
    const product = await Product.findById(product_id);
    const product_info = [product];
    if (product) {
      if (req.user) {
        const userData = await User.findOne({
          user_firebase_id: req.user.user_id,
        });
        const userCart = await Cart.findOne({ user_id: userData._id });
        allProducts = await cartController.getQuantity(product_info, userCart);
      } else {
        allProducts = product_info;
      }
      return res.status(200).json({
        status: "success",
        message: "Product found successfully.",
        data: allProducts,
      });
    } else {
      return res.status(404).json({
        status: "failure",
        message: "Product not found.",
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

module.exports.getProductsByCategory = async (req, res) => {
  try {
    var allProducts = [];
    const category = req.query.category;
    const products = await Product.find({ category: category });
    if (products.length > 0) {
      if (req.user) {
        const userData = await User.findOne({
          user_firebase_id: req.user.user_id,
        });
        const userCart = await Cart.findOne({ user_id: userData._id });
        allProducts = await cartController.getQuantity(products, userCart);
      } else {
        allProducts = products;
      }
      return res.status(200).json({
        status: "success",
        message: "Products found successfully.",
        data: allProducts,
      });
    } else {
      return res.status(404).json({
        status: "failure",
        message: "Products not found.",
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

module.exports.updateProduct = async (req, res) => {
  try {
    const product_id = req.params.productID;
    const product = await Product.findById(product_id);
    if (product) {
      if (req.body.name) product["name"] = req.body.name;
      if (req.body.brand_name) product["brand_name"] = req.body.brand_name;
      if (req.body.price) product["price"] = req.body.price;
      if (req.body.description) product["description"] = req.body.description;
      if (req.body.sizes) product["sizes"] = req.body.sizes;
      if (req.body.in_stock) product["in_stock"] = req.body.in_stock;
      await product.save();
      return res.status(200).json({
        status: "success",
        message: "Product updated successfully.",
        data: product,
      });
    } else {
      return res.status(404).json({
        status: "failure",
        message: "Product not found.",
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

module.exports.deleteProduct = async (req, res) => {
  try {
    const product_id = req.params.productID;
    await Product.deleteOne({ _id: product_id });
    return res.status(200).json({
      status: "success",
      message: "Product deleted successfully.",
      data: null,
    });
  } catch (err) {
    return res.status(401).json({
      status: "failure",
      message: err.message,
    });
  }
};

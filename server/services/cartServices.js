const Product = require("../models/productModel");

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

module.exports.getOrderType = async (productList, cartList) => {
  const allProducts = [];
  const orderTypeLookup = {};
  cartList["items"].forEach((orderType) => {
    orderTypeLookup[orderType.product_id] = orderType.order_type;
  });
  productList.forEach((product) => {
    const orderType = orderTypeLookup[product.id] || 0;
    const mergedObject = { ...product["_doc"], orderType };
    allProducts.push(mergedObject);
  });

  return allProducts;
};

module.exports.getOrderTypeAndQuantity = async (productList, cartList) => {
  const allProducts = [];

  const quantityLookup = {};
  cartList["items"].forEach((quantity) => {
    quantityLookup[quantity.product_id] = quantity.quantity;
  });

  const orderTypeLookup = {};
  cartList["items"].forEach((orderType) => {
    orderTypeLookup[orderType.product_id] = orderType.order_type;
  });

  productList.forEach((product) => {
    const quantity = quantityLookup[product.id] || 0;
    const orderType = orderTypeLookup[product.id] || "Unknown";
    const mergedObject = { ...product["_doc"], quantity, orderType };
    allProducts.push(mergedObject);
  });

  return allProducts;
};

module.exports.getProductTotal = async (cartList) => {
  cartList["items"].forEach((product) => {
    const price = product["product_id"]["price"];
    if (product["order_type"] === "buy" || product["order_type"] === "trial") {
      product["_doc"]["total_amount"] = product["quantity"] * price;
    } else if (product["order_type"] === "subscribe") {
      product["_doc"]["total_amount"] = product["quantity"] * 30 * price;
    }
  });

  return cartList;
};

module.exports.getCartTotal = async (cartList) => {
  var totalAmountOfCart = 0;
  for (const item of cartList["items"]) {
    const { price } = await Product.findById(item.product_id);

    if (item["order_type"] === "buy" || item["order_type"] === "trial") {
      totalAmountOfCart += item.quantity * price;
    } else if (item["order_type"] === "subscribe") {
      totalAmountOfCart += item.quantity * 30 * price;
    }
  }
  return totalAmountOfCart;
};

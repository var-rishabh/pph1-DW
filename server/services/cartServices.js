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

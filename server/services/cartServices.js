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

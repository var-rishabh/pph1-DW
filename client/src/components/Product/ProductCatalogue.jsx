import React from 'react';
import "./ProductCatalogue.css";
import ProductCard from './ProductCard';
import { products } from '../../SampleData/products';

const ProductCatalogue = () => {
  
  return (
    <div className="product-catalogue">
      <div className="product-catalogue__hero">
        <div className="product-catalogue__hero--content">
          <div className="product-catalogue__hero--title">
            Our Premium Products
          </div>
          <div className="product-catalogue__hero--text">
            We are a Premium D2C Fresh Food Brand, with a strong focus on purity,
            freshness & convenience. At Happy Nature, we produce Pure,
            Local & Wholesome Indian food products like fresh cow milk,
            ghee, paneer, honey, and other authentic products.
          </div>
        </div>
      </div>
      <div className="product-catalogue__products">
        {
          products.map((product) => {
            return (
              <ProductCard
                {...product}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductCatalogue;
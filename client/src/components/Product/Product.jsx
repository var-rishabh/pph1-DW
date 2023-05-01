import React from 'react';
import "./Product.css";
import { products } from '../../SampleData/products';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
const Product = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const handleTry = () => {
    const item = {
      id: product.id,
      orderType: "Try",
    }
    console.log(item);
  }
  const handleBuy = () => {
    const item = {
      id: product.id,
      orderType: "Buy",
    }
    console.log(item);
  }
  const handleSubscribe = () => {
    const item = {
      id: product.id,
      orderType: "Subscribe",
    }
    console.log(item);
  }
  return (
    <div className="product">
      <div className="product__info">
        <div className="product__info--left">
          <div className="product__info--left--image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product__info--left--title">
            {product.title}
          </div>
          <div className="product__info--left--buttons">
            <button className="product__info--left--buttons--try" onClick={handleTry}>Try</button>
            <button className="product__info--left--buttons--buy" onClick={handleBuy}>Buy</button>
            <button className="product__info--left--buttons--subscribe" onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div>
        <div className="product__info--right">
          <div className="product__info--right--title">
            {product.title}
          </div>
          <div className="product__info--right--info">
            Rs {product.price}
          </div>
          <div className="product__info--right--info">
            Size : {product.size}
          </div>
          <div className="product__info--right--info">
            Brand Name : {product.brandName}
          </div>
          <div className="product__info--right--info">
            Category : {product.category}
          </div>
          <div className="product__info--right--info">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </div>
          <div className="product__info--right--description">
            <div className="product__info--right--description--title">
              Description
            </div>
            <div className="product__info--right--description--content">
              {product.description}
            </div>
          </div>
          <div className="product__info--right--benefits">
            <div className="product__info--right--benefits--title">
              {product.title} Benefits
            </div>
            <ul className="product__info--right--benefits--list">
              {product.benefits.map((benefit) => (
                <li className="product__info--right--benefits--list--item" key={benefit}>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="product__mayAlsoLike">
        <div className="product__mayAlsoLike--title">
          Product You may like
        </div>
        <div className="product__mayAlsoLike--list">
          {products.map((product) => (
            <ProductCard
              {...product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product;
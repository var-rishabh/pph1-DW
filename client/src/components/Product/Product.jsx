import React, { useEffect } from 'react';
import "./Product.css";
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProductDetails } from '../../Actions/Product';
const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, products, product } = useSelector(state => state.productReducer);
  const user = useSelector(state => state.userReducer.user);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getProductDetails(id));
  }, [user, dispatch, id]);

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
  return (loading) ? (<div className="loading"><div className='loading__circle'></div></div>) :
    (
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
              Brand Name : {product.brand_name}
            </div>
            <div className="product__info--right--info">
              Category : {product.category}
            </div>
            <div className="product__info--right--info">
              {product.in_stock? "In Stock" : "Out of Stock"}
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
                { product.benefits?.map((benefit) => (
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
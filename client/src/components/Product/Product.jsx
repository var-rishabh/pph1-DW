import React, { useEffect } from 'react';
import "./Product.css";
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProductDetails } from '../../Actions/Product';
import TryModal from '../TryModal/TryModal';
import BuyModal from '../BuyModal/BuyModal';
import SubscribeModal from '../SubscribeModal/SubscribeModal';
import trashSolid from '../../Assets/trash-solid.svg';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, products, product } = useSelector(state => state.productReducer);
  const user = useSelector(state => state.userReducer.user);
  const [showTryModal, setShowTryModal] = React.useState(false);
  const [showBuyModal, setShowBuyModal] = React.useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = React.useState(false);
  const handleDelete = () => {
    console.log("delete");
  }
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getProductDetails(id));
  }, [user, dispatch, id]);

  return (loading) ? (<div className="loading"><div className='loading__circle'></div></div>) :
    (
      <>
        <div className="product">
          <div className="product__info">
            <div className="product__info--left">
              <div className="product__info--left--image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product__info--left--title">
                {product.title}
              </div>
              {(product.quantity > 0) ?
                <div className="product__content--item">
                  <div className="product__content--item-type">
                    Type: {product.type}
                  </div>
                  <div className="product__content--item-quantity">
                    {(product.type === "buy") ? "Quantity: " + (product.quantity) : "Months: " + (product.quantity)}
                  </div>
                  <button className="product__content--item-button" onClick={handleDelete}>
                    <img src={trashSolid} alt="Delete" />
                  </button>
                </div> :
                <div className="product__info--left--buttons">
                  <button className="product__info--left--buttons--try" onClick={() => { setShowTryModal(true) }}>Try</button>
                  <button className="product__info--left--buttons--buy" onClick={() => { setShowBuyModal(true) }}>Buy</button>
                  <button className="product__info--left--buttons--subscribe" onClick={() => { setShowSubscribeModal(true) }}>Subscribe</button>
                </div>
              }
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
                {product.in_stock ? "In Stock" : "Out of Stock"}
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
                  {product.benefits?.map((benefit) => (
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
                  key={product._id}
                  {...product}
                />
              ))}
            </div>
          </div>
        </div>
        <TryModal open={showTryModal} setOpen={setShowTryModal} product={product} />
        <BuyModal open={showBuyModal} setOpen={setShowBuyModal} product={product} />
        <SubscribeModal open={showSubscribeModal} setOpen={setShowSubscribeModal} product={product} />
      </>
    )
}

export default Product;
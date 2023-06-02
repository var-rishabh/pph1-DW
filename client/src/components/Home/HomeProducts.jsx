import React, { useEffect } from 'react';
import './HomeProducts.css';
import HomeProductCard from './HomeProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByCategory } from '../../Actions/Product';

const HomeProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);
    useEffect(() => {
        dispatch(getProductByCategory("Dairy"));
    }, [dispatch]);
    return (
        <div className='home-products'>
            {/* Raw Milk */}
            <div className='home-products__list'>
                <div className='home-products__list--title'>
                    Dairy
                </div>
                <div className='home-products__list--items'>
                    {products.map((product) => {
                        return (
                            <div className='home-products__list--items--item' key={product._id}>
                                <HomeProductCard product={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomeProducts

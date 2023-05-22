import React from 'react';
import './HomeProducts.css';
import { products } from '../../SampleData/products';
import HomeProductCard from './HomeProductCard';

const HomeProducts = () => {
    return (
        <div className='home-products'>
            {/* Raw Milk */}
            <div className='home-products__list'>
                <div className='home-products__list--title'>
                    Dairy
                </div>
                <div className='home-products__list--items'>
                    {products.slice(0, 3).map((product) => {
                        return (
                            <div className='home-products__list--items--item' key={product.id}>
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

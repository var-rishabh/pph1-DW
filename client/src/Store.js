import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './Reducers/User';
import { productReducer } from './Reducers/Product';
import { walletReducer } from './Reducers/Wallet';
import { orderReducer } from './Reducers/Order';
import { cartReducer } from './Reducers/Cart';

const store = configureStore({
    reducer: {
        // Add reducers here
        userReducer: userReducer,
        productReducer: productReducer,
        walletReducer: walletReducer,
        orderReducer: orderReducer,
        cartReducer: cartReducer,
    },
});

export default store;
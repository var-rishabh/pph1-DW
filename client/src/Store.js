import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './Reducers/User';
import { productReducer } from './Reducers/Product';
import { walletReducer } from './Reducers/Wallet';
import { orderReducer } from './Reducers/Order';
import { cartReducer } from './Reducers/Cart';
import { contactReducer } from './Reducers/Contact';

const store = configureStore({
    reducer: {
        // Add reducers here
        userReducer: userReducer,
        productReducer: productReducer,
        walletReducer: walletReducer,
        orderReducer: orderReducer,
        cartReducer: cartReducer,
        contactReducer: contactReducer,
    },
});

export default store;
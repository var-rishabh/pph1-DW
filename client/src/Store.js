import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './Reducers/User';
import { productReducer } from './Reducers/Product';

const store = configureStore({
    reducer: {
        // Add reducers here
        userReducer: userReducer,
        productReducer: productReducer,
    },
});

export default store;
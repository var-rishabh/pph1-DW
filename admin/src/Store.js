import { configureStore } from '@reduxjs/toolkit';
import {authReducer} from './Reducers/Auth';
import { couponReducer } from './Reducers/Coupons';
import { orderReducer } from './Reducers/Orders';
import { paymentReducer } from './Reducers/Payments';
import { productReducer } from './Reducers/Products';
import { userReducer } from './Reducers/Users';
import { messageReducer } from './Reducers/Messages';

const store = configureStore({
    reducer: {
        authReducer: authReducer,
        userReducer: userReducer,
        productReducer: productReducer,
        paymentReducer: paymentReducer,
        orderReducer: orderReducer,
        couponReducer: couponReducer,
        messageReducer: messageReducer,

    },
});

export default store;
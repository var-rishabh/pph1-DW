import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './Reducers/User';

const store = configureStore({
    reducer: {
        // Add reducers here
        userReducer: userReducer,
    },
});

export default store;
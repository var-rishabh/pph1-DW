import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    product: {},
    loading: false,
    error: null,
    productsCount: 0,
    resPerPage: 6,
}

export const productReducer = createReducer(initialState, {

    AllProductsRequest: (state) => {
        state.loading = true;
    },
    AllProductsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    AllProductsSuccess: (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.productsCount = action.payload.productsCount;
        state.error = null;
    },
    MoreProductsRequest: (state) => {
        state.loading = true;
    },
    MoreProductsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    MoreProductsSuccess: (state, action) => {
        state.loading = false;
        state.products = state.products.concat(action.payload.products);
        state.error = null;
    },
    ProductDetailsRequest: (state) => {
        state.loading = true;
    },
    ProductDetailsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    ProductDetailsSuccess: (state, action) => {
        state.loading = false;
        state.product = action.payload;
        state.error = null;
    },
    ClearErrors: (state) => {
        state.error = null;
    },
});


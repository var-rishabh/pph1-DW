import { createReducer } from "@reduxjs/toolkit";

const initialState = { 
    loading: false,
    error: null,
    message: "",
    cart: []
}


export const cartReducer = createReducer(initialState, (builder) => {

    builder
        .addCase("GetCartRequest", (state) => {
            state.loading = true;
        })
        .addCase("GetCartFailure", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase("GetCartSuccess", (state, action) => {
            state.loading = false;
            state.cart = action.payload;
            state.error = null;
        })
        .addCase("AddToCartRequest", (state) => {
            state.loading = true;
        })
        .addCase("AddToCartFailure", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase("AddToCartSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = null;
        })
        .addCase("RemoveFromCartRequest", (state) => {
            state.loading = true;
        })
        .addCase("RemoveFromCartFailure", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase("RemoveFromCartSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = null;
        })
});
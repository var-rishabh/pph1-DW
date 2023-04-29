import { createReducer } from "@reduxjs/toolkit";

const initialState = {
}

export const userReducer = createReducer(initialState, {

    LoginRequest: (state) => {
        state.loading = true;
    },
    LoginFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },
    LoginSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isAuthenticated = true;
    },
    RegisterRequest: (state) => {
        state.loading = true;
    },
    RegisterFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },
    RegisterSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isAuthenticated = true;
    },
    LoadUserRequest: (state, action) => {
        state.loading = true;
    },
    LoadUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },
    LoadUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isAuthenticated = true;
    },
    LogoutRequest: (state) => {
        state.loading = true;
    },
    LogoutFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },
    LogoutSuccess: (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = null;
        state.isAuthenticated = false;
    },
    ForgotPasswordRequest: (state) => {
        state.loading = true;
    },
    ForgotPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    ForgotPasswordSuccess: (state, action) => {
        state.loading = false;
        state.error = null;
    },
    ClearErrors: (state) => {
        state.error = null;
    }
});
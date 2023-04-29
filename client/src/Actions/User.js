// Use Firbase to login, load and register user via email password, google and phone

import { auth } from "../firebase";
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPhoneNumber,
    signInWithPopup,
    sendPasswordResetEmail,
    RecaptchaVerifier,
} from "firebase/auth";

import { toast } from 'react-toastify';





// Login user via Google OAuth and redirect to home page after login which is /
export const loginWithGoogle = () => async (dispatch) => {
    dispatch({ type: "LoginRequest" });
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // Redirect to home page after login
            window.location.href = "/";
            dispatch({
                type: "LoginSuccess",
                payload: result.user
            });
            toast.success("Login Successful");
        }).catch((error) => {
            dispatch({
                type: "LoginFailure",
                payload: error.message
            });
            toast.error(error.message);
        });
};

// Login user via phone number and ask for OTP and redirect to home page after login which is /
// Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'settings')
// Fix for above error
// https://stackoverflow.com/questions/68485741/firebase-auth-uncaught-in-promise-typeerror-cannot-read-properties-of-undef

export const loginWithPhone = (phone) => async (dispatch) => {
    const appVerifier = new RecaptchaVerifier('recaptcha-container',{
        'size': 'invisible',
    }, auth);
    signInWithPhoneNumber(auth, phone, appVerifier)
        .then((result) => {
            // Redirect to /verify-phone page after login
            window.confirmationResult = result;

        }).catch((error) => {
            dispatch({
                type: "LoginFailure",
                payload: error.message
            });
            toast.error(error.message);
        });
}

// Verify OTP and redirect to home page after login which is / dont have confirmationResult
// Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'confirm')
// Fix for above error

export const verifyOTP = (otp) => async (dispatch) => {
    const confirmationResult = window.confirmationResult;
    confirmationResult.confirm(otp)
        .then((result) => {
            // Redirect to home page after login
            window.location.href = "/";
            dispatch({
                type: "LoginSuccess",
                payload: result.user
            });
            toast.success("Login Successful");
        }).catch((error) => {
            dispatch({
                type: "LoginFailure",
                payload: error.message
            });
            toast.error(error.message);
        });
}

export const loginWithEmail = (email, password) => async (dispatch) => {
    dispatch({ type: "LoginRequest" });
    signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Redirect to home page after login
            window.location.href = "/";
            dispatch({
                type: "LoginSuccess",
                payload: result.user
            });
            toast.success("Login Successful");
        }).catch((error) => {
            dispatch({
                type: "LoginFailure",
                payload: error.message
            });
            toast.error(error.message);
        });
}

// Register user via email and password and redirect to home page after login which is /

export const registerWithEmail = (email, password, city, area) => async (dispatch) => {
    dispatch({ type: "RegisterRequest" });
    createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Redirect to home page after login
            window.location.href = "/";
            dispatch({
                type: "RegisterSuccess",
                payload: result.user
            });
            toast.success("Register Successful");
        }).catch((error) => {
            dispatch({
                type: "RegisterFailure",
                payload: error.message
            });
            toast.error(error.message);
        });
}

// Load user from firebase and redirect to home page after login which is /

export const loadUser = () => async (dispatch) => {
    dispatch({ type: "LoadUserRequest" });
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch({
                type: "LoadUserSuccess",
                payload: user && user.reloadUserInfo
            });
        } else {
            dispatch({
                type: "LoadUserFailure",
                payload: "Logged out"
            });
        }
    });
}

// Logout user from firebase and redirect to home page after login which is /

export const logout = () => async (dispatch) => {
    dispatch({ type: "LogoutRequest" });
    signOut(auth).then(() => {
        dispatch({
            type: "LogoutSuccess",
        });
        // Redirect to home page after logout
        window.location.href = "/";
        toast.success("Logout Successful");
    }).catch((error) => {
        dispatch({
            type: "LogoutFailure",
            payload: error.message
        });
        toast.error(error.message);
    });
}

//Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
    dispatch({ type: "ForgotPasswordRequest" });
    sendPasswordResetEmail(auth, email)
        .then(() => {
            dispatch({
                type: "ForgotPasswordSuccess",
            });
            toast.success("Password reset link sent to email");
        }).catch((error) => {
            dispatch({
                type: "ForgotPasswordFailure",
                payload: error.message
            });
            toast.error(error.message);
        });
}
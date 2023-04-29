// Use Firbase to login, load and register user via email password, google and phone

import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPhoneNumber,
    signInWithPopup
} from "firebase/auth";

import { toast } from 'react-toastify';


const firebaseConfig = {
    apiKey: "AIzaSyDuIDBnXIkmjsyS1hVY2747l8lCpX6PlyE",
    authDomain: "dudhwala-34f58.firebaseapp.com",
    projectId: "dudhwala-34f58",
    storageBucket: "dudhwala-34f58.appspot.com",
    messagingSenderId: "718474174092",
    appId: "1:718474174092:web:e8a89c7cb9d0c4d6df25a9",
    measurementId: "G-B42FG3YHEJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


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

// Login user via phone number dont ask for phone number or recaptcha with popup and redirect to home page after login which is /

export const loginWithPhone = (phoneNumber, appVerifier) => async (dispatch) => {
    dispatch({ type: "LoginRequest" });
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
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
    createUserWithEmailAndPassword(auth, email, password, city, area)
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
                payload: user
            });
        } else {
            dispatch({
                type: "LoadUserFailure",
                payload: "User not found"
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


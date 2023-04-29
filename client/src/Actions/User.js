// Use Firbase to login, load and register user via email password, google and phone

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { toast } from 'react-toastify';

// Login with email and password
export const loginWithEmail = (email, password) => async (dispatch) => {
    try {
        dispatch({type: 'LoginRequest'});
        const res = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
        const { user } = res;
        const token = await user.getIdTokenResult();
        dispatch({
            type: 'LoginSuccess',
            payload: {
                ...user,
                token: token.token,
            },
        });
    } catch (error) {
        toast.error(error.message);
        dispatch({
            type: 'LoginFailure',
            payload: error.message 
        });
    }
}

//Make single function for login and register with google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const loginWithGoogle = () => async (dispatch) => {
    try {
        dispatch({type: 'LoginRequest'});
        const res = await firebase
            .auth()
            .signInWithPopup(googleAuthProvider);
        const { user } = res;
        const token = await user.getIdTokenResult();
        dispatch({
            type: 'LoginSuccess',
            payload: {
                ...user,
                token: token.token,
            },
        });
    } catch (error) {
        toast.error(error.message);
        dispatch({
            type: 'LoginFailure',
            payload: error.message 
        });
    }
}

// Make single function for login and register with phone with popup
const phoneAuthProvider = new firebase.auth.PhoneAuthProvider();

export const loginWithPhone = (phoneNumber, recaptcha) => async (dispatch) => {
    try {
        dispatch({type: 'LoginRequest'});
        const res = await firebase
            .auth()
            .signInWithPopup(phoneAuthProvider);
        const { user } = res;
        const token = await user.getIdTokenResult();
        dispatch({
            type: 'LoginSuccess',
            payload: {
                ...user,
                token: token.token,
            },
        });
    } catch (error) {
        toast.error(error.message);
        dispatch({
            type: 'LoginFailure',
            payload: error.message 
        });
    }
}

// Register with email and password
export const registerWithEmail = (email, password) => async (dispatch) => {
    try {
        dispatch({type: 'RegisterRequest'});
        const res = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
        const { user } = res;
        const token = await user.getIdTokenResult();
        dispatch({
            type: 'RegisterSuccess',
            payload: {
                ...user,
                token: token.token,
            },
        });
    } catch (error) {
        toast.error(error.message);
        dispatch({
            type: 'RegisterFailure',
            payload: error.message 
        });
    }
}

// Load user
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({type: 'LoadUserRequest'});
        const res = await firebase
            .auth()
            .currentUser;
        const token = await res.getIdTokenResult();
        dispatch({
            type: 'LoadUserSuccess',
            payload: {
                ...res,
                token: token.token,
            },
        });
    } catch (error) {
        toast.error(error.message);
        dispatch({
            type: 'LoadUserFailure',
            payload: error.message 
        });
    }
}

// Logout user
export const logoutUser = () => async (dispatch) => {
    try {
        await firebase
            .auth()
            .signOut();
        dispatch({
            type: 'LogoutSuccess',
        });
    } catch (error) {
        toast.error(error.message);
        dispatch({
            type: 'LogoutFailure',
            payload: error.message 
        });
    }
}
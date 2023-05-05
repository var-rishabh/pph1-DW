// Use Firbase to login, load and register user via email password, google and phone

import { auth, store } from "../firebase";
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPhoneNumber,
    signInWithPopup,
    sendPasswordResetEmail,
    RecaptchaVerifier
} from "firebase/auth";

//import firestore
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";

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
    const appVerifier = new RecaptchaVerifier('recaptcha-container', {
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


export const register = (email, password, city, area) => async (dispatch) => {
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
// Register user via email, add city and state and password and redirect to home page after login which is / 
export const registerWithEmail = (email, password, city, area) => async (dispatch) => {
    dispatch({ type: "RegisterRequest" });
    createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // add city and area to firestore
            const db = store;
            const payload = {
                city: city,
                area: area
            }
            addDoc(collection(db, "users"), payload).then((snapshot) => {
                const userData = {
                    ...result.user,
                }
                window.location.href = "/";
                dispatch({
                    type: "RegisterSuccess",
                    payload: userData
                });
                toast.success("Register Successful");
            }).then((snapshot) => {
                const userData = {
                    ...result.user,
                    ...snapshot.data()
                }
                window.location.href = "/";
                dispatch({
                    type: "RegisterSuccess",
                    payload: userData
                });
                toast.success("Register Successful");
            }).catch((error) => {
                dispatch({
                    type: "RegisterFailure",
                    payload: error.message
                });
                toast.error(error.message);
            });
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
            // Retrive user info from firestore
            const db = store;
            const docRef = doc(db, "users", user.uid);

            getDoc(docRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const userData = {
                        ...user.reloadedUserInfo,
                        ...snapshot.data()
                    }
                    dispatch({
                        type: "LoadUserSuccess",
                        payload: userData
                    });
                } else {
                    const userData = {
                        ...user.reloadedUserInfo,
                    }
                    dispatch({
                        type: "LoadUserSuccess",
                        payload: userData
                    });
                }
            }).catch((error) => {
                dispatch({
                    type: "LoadUserFailure",
                    payload: error.message
                });
                toast.error(error.message);
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

export const updateUserProfile = (data) => async (dispatch) => {
    const {name, photoUrl, address, altAddress, phone, alternatePhone, city, area} = data
    dispatch({ type: "UpdateProfileRequest" });
    const user = auth.currentUser;
    user.updateProfile({
        displayName: name,
        photoURL: photoUrl
    }).then(() => {
        // Update user info in firestore
        const db = store;
        const docRef = doc(db, "users", user.uid);
        if (docRef.exists()) {
            updateDoc(docRef, {
                address: address,
                altAddress: altAddress,
                phone: phone,
                alternatePhone: alternatePhone,
                city: city,
                area: area
            }).then((snapshot) => {
                const userData = {
                    ...user,
                    ...snapshot.data()
                }
                dispatch({
                    type: "UpdateProfileSuccess",
                    payload: userData
                });
                toast.success("Profile Updated");
            }).catch((error) => {
                dispatch({
                    type: "UpdateProfileFailure",
                    payload: error.message
                });
                toast.error(error.message);
            });
        } else {
            addDoc(collection(db, "users"), {
                address: address,
                altAddress: altAddress,
                phone: phone,
                alternatePhone: alternatePhone,
                city: city,
                area: area
            }).then((snapshot) => {
                console.log(snapshot);
                const userData = {
                    ...user,
                    ...snapshot.data()
                }
                dispatch({
                    type: "UpdateProfileSuccess",
                    payload: userData
                });
                toast.success("Profile Updated");
            }
            ).catch((error) => {
                dispatch({
                    type: "UpdateProfileFailure",
                    payload: error.message
                });
                toast.error(error.message);
            });
        }
    }).catch((error) => {
        dispatch({
            type: "UpdateProfileFailure",
            payload: error.message
        });
        toast.error(error.message);
    });
}
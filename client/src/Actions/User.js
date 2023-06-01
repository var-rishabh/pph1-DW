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
    RecaptchaVerifier,
    getIdToken
} from "firebase/auth";

//import firestore
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";

import { toast } from 'react-toastify';

const addUser = async () => {
    getIdToken(auth.currentUser).then((idToken) => {
        console.log(auth.currentUser)
        console.log(idToken)
        fetch(`${process.env.REACT_APP_SERVER_URL}/user/addUser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${idToken}`
            },
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }).catch((error) => {
        throw error;
    });
}

// Login user via Google OAuth and redirect to home page after login which is /
export const loginWithGoogle = () => async (dispatch) => {
    dispatch({ type: "LoginRequest" });
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(async (result) => {
            // Redirect to home page after login
            await addUser();
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

export const verifyOTP = (otp) => async (dispatch) => {
    const confirmationResult = window.confirmationResult;
    confirmationResult.confirm(otp)
        .then(async (result) => {
            // Redirect to home page after login
            await addUser();
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
            const uid = result.user.uid;
            setDoc(doc(db, "users", uid), payload).then(async () => {
                const userData = {
                    ...result.user,
                }
                await addUser();
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
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // Retrive user info from firestore
            const db = store;
            const docRef = doc(db, "users", user.uid);
            getDoc(docRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const userInfo = user.reloadUserInfo;
                    const userData = {
                        ...userInfo,
                        ...snapshot.data()
                    }
                    dispatch({
                        type: "LoadUserSuccess",
                        payload: userData
                    });
                } else {
                    dispatch({
                        type: "LoadUserSuccess",
                        payload: user.reloadUserInfo
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
    dispatch({ type: "UpdateProfileRequest" });
    const user = auth.currentUser;
    const userDetails = user.reloadUserInfo;
    try {
        // Update user info in firestore
        const db = store;
        const docRef = doc(db, "users", user.uid);
        getDoc(docRef).then((snapshot) => {
            if (snapshot.exists()) {
                updateDoc(docRef, {
                    ...data,
                }).then(() => {
                    const userData = {
                        ...userDetails,
                        ...data
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
                console.log("else")
                setDoc(doc(db, "users", user.uid), {
                    ...data,
                }).then(() => {
                    const userData = {
                        ...userDetails,
                        ...data
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
            }
        });
    } catch (error) {
        dispatch({
            type: "UpdateProfileFailure",
            payload: error.message
        });
        toast.error(error.message);
    }
}
import { initializeApp } from 'firebase/app';
import {
    getAuth,
} from "firebase/auth";

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
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
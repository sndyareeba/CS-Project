// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADi6uoTAUhjX_qapCzqYDDyAEzz87otMA",
    authDomain: "fatma--sam-s-realtors.firebaseapp.com",
    projectId: "fatma--sam-s-realtors",
    storageBucket: "fatma--sam-s-realtors.appspot.com",
    messagingSenderId: "919758668969",
    appId: "1:919758668969:web:b4644199849961cb6895b8",
    measurementId: "G-4B2JWWGMZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
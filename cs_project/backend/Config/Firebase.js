// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';



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
const Auth = firebase.auth()
const Db = firebase.firestore();
const Storage = firebase.storage();


export {Auth, Db, Storage};


// Configuration //

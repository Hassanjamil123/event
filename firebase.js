// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTmDtW_6sW0Lmr9pmRRtQhKKYP7qeJCxw",
  authDomain: "shop-8fe7c.firebaseapp.com",
  databaseURL: "https://shop-8fe7c-default-rtdb.firebaseio.com",
  projectId: "shop-8fe7c",
  storageBucket: "shop-8fe7c.appspot.com",
  messagingSenderId: "405122172812",
  appId: "1:405122172812:web:2d2b8fb2b7f9beff87b8a9",
  measurementId: "G-NSPDY5FLC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


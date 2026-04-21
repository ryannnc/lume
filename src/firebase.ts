// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcSBHjDs04DBNBCTHn6gjuo0s20TO8apQ",
  authDomain: "lume-8f683.firebaseapp.com",
  projectId: "lume-8f683",
  storageBucket: "lume-8f683.firebasestorage.app",
  messagingSenderId: "275372556695",
  appId: "1:275372556695:web:804f1b4a5c537c8f3e44d2",
  measurementId: "G-586WWF0B6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
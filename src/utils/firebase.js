// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgGSk2fHFSKsH7pQHYjN3H_2dMbwI8syE",
  authDomain: "netflixgpt-63e93.firebaseapp.com",
  projectId: "netflixgpt-63e93",
  storageBucket: "netflixgpt-63e93.firebasestorage.app",
  messagingSenderId: "92910369126",
  appId: "1:92910369126:web:5140b1b4194f2c9ac170a7",
  measurementId: "G-00RJDLKXL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
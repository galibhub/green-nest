// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz5ZONCqMx-QcXDMoYxCJTC0GS4Js2ZDk",
  authDomain: "green-plant-3e72f.firebaseapp.com",
  projectId: "green-plant-3e72f",
  storageBucket: "green-plant-3e72f.firebasestorage.app",
  messagingSenderId: "1077256447613",
  appId: "1:1077256447613:web:f9182683f7b93a47173314",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

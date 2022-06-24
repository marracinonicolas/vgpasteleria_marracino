// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkGfm6YaREaAhPHhrOZ366WQ-jqBsO7yQ",
  authDomain: "vg-pasteleria.firebaseapp.com",
  projectId: "vg-pasteleria",
  storageBucket: "vg-pasteleria.appspot.com",
  messagingSenderId: "389274631832",
  appId: "1:389274631832:web:12f0f3c1546f05c6e6daed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
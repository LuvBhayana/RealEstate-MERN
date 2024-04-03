// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-42223.firebaseapp.com",
  projectId: "mern-42223",
  storageBucket: "mern-42223.appspot.com",
  messagingSenderId: "563095711136",
  appId: "1:563095711136:web:581372cf0ff9b4eca308c5"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
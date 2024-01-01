// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-de772.firebaseapp.com",
  projectId: "mern-estate-de772",
  storageBucket: "mern-estate-de772.appspot.com",
  messagingSenderId: "677516748276",
  appId: "1:677516748276:web:382cad255709d6fa0085a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
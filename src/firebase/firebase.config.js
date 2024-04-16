// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,




  // apiKey: "AIzaSyC9-ZxKkr6J3mVpej4qg8_8OFWGHVDOaR4",
  // authDomain: "rent-me-2951f.firebaseapp.com",
  // projectId: "rent-me-2951f",
  // storageBucket: "rent-me-2951f.appspot.com",
  // messagingSenderId: "186265768503",
  // appId: "1:186265768503:web:8dd1a7f2be3826f58525b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

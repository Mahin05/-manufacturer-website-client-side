import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw2IZW9tnj6EMxS7P_okXJ9AQ53SuY61g",
  authDomain: "tools-shop-3124a.firebaseapp.com",
  projectId: "tools-shop-3124a",
  storageBucket: "tools-shop-3124a.appspot.com",
  messagingSenderId: "871852192271",
  appId: "1:871852192271:web:162830b1985d051b11e97a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


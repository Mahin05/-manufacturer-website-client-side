import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_ffoFiLyDQ1OotxDFaFLJl3hFRRdIDWs",
  authDomain: "islams-tools-shop.firebaseapp.com",
  projectId: "islams-tools-shop",
  storageBucket: "islams-tools-shop.appspot.com",
  messagingSenderId: "990424208805",
  appId: "1:990424208805:web:6378df29131dd0b966444c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgMeUKDxlQD0IOH1nIa_MtpXq_st0qn0c",
  authDomain: "voto-480ed.firebaseapp.com",
  projectId: "voto-480ed",
  storageBucket: "voto-480ed.appspot.com",
  messagingSenderId: "69051241572",
  appId: "1:69051241572:web:3d654b0a96c837eb0b7b71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}
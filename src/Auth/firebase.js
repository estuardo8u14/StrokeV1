import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEzI3BdXdAYtvyFvUdUNxk2Ra-SX3G80A",
  authDomain: "stroke-19c84.firebaseapp.com",
  projectId: "stroke-19c84",
  storageBucket: "stroke-19c84.appspot.com",
  messagingSenderId: "1079025209660",
  appId: "1:1079025209660:web:3a179f2905dfb6baa14e39",
  measurementId: "G-5P2L619JF6",
};

// Initialize Firebase
// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };

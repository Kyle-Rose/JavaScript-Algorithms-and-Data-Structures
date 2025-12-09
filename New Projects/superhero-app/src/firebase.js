// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo708hqXX2_roZwNEYaigprjEh4rl4rW4",
  authDomain: "superhero-application-form.firebaseapp.com",
  projectId: "superhero-application-form",
  storageBucket: "superhero-application-form.firebasestorage.app",
  messagingSenderId: "640606389580",
  appId: "1:640606389580:web:63b1096e437012e3cbbbe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //
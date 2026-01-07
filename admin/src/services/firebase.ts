// src/services/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔐 replace with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDuIbCM8ekh1CjBzq7NntPtLekU71skw6Q",
    authDomain: "rs-rwanda-prod.firebaseapp.com",
    projectId: "rs-rwanda-prod",
    storageBucket: "rs-rwanda-prod.firebasestorage.app",
    messagingSenderId: "565764668411",
    appId: "1:565764668411:web:2b0dfdaddc24c091ece95e",
    measurementId: "G-SYD0SYTZ5F"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

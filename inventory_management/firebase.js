// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA1IICmSkZp982eUL-FaoUgLUd4tl3ofc",
  authDomain: "inventory-management-6e49f.firebaseapp.com",
  projectId: "inventory-management-6e49f",
  storageBucket: "inventory-management-6e49f.appspot.com",
  messagingSenderId: "439369803213",
  appId: "1:439369803213:web:50695ffde87b8dbdf51084",
  measurementId: "G-BKV921QJ9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

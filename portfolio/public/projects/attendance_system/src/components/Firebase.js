// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_7luJedD4q8FJLgOonXB_opQcu3XxKr0",
  authDomain: "attendance-2813f.firebaseapp.com",
  projectId: "attendance-2813f",
  storageBucket: "attendance-2813f.appspot.com",
  messagingSenderId: "830371387713",
  appId: "1:830371387713:web:86adb928b2781d00fea9c0",
  measurementId: "G-SN2L4MS9EK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);
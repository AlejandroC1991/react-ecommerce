// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNA5Ct_5tdvQwrQoVzrqeIp3NKRxr3H64",
  authDomain: "ecommerce-react-2772d.firebaseapp.com",
  projectId: "ecommerce-react-2772d",
  storageBucket: "ecommerce-react-2772d.appspot.com",
  messagingSenderId: "892332492524",
  appId: "1:892332492524:web:c52f9a8fe742a9df11c7c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

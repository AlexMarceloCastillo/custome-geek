// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ_ZGxsZq_mb4AgvI0hq7rIS227iwGOIQ",
  authDomain: "geek-ecommerce.firebaseapp.com",
  projectId: "geek-ecommerce",
  storageBucket: "geek-ecommerce.appspot.com",
  messagingSenderId: "650099143241",
  appId: "1:650099143241:web:e9136853bf2d7ec6bec598"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(params) {
    return app
}
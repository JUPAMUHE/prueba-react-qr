// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDX3aGJr8WWa7smtvPGKlYR45tbNwF8Knc",
  authDomain: "tienda-de-libros-48fb4.firebaseapp.com",
  databaseURL: "https://tienda-de-libros-48fb4.firebaseio.com",
  projectId: "tienda-de-libros-48fb4",
  storageBucket: "tienda-de-libros-48fb4.appspot.com",
  messagingSenderId: "283995201853",
  appId: "1:283995201853:web:27305cb787b040cf2fe554"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
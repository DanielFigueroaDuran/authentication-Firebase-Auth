import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
//import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/database";
// import "firebase/compat/firestore";

// import {
//   getStorage,
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   getBytes,
// } from "firebase/firestore";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
//   doc,
//   getDoc,
//   query,
//   where,
//   setDoc,
//   deleteDoc,
// } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
//const db = getFirestore(app);

export default appfirebase;

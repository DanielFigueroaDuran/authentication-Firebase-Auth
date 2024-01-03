import Firebase from "firebase/compat/app";
import firebase from "firebase/compat/auth";
import firebase from "firebase/compat/database";

const firebaseConfig = {
      apiKey: "AIzaSyCkcKY-4zNgXUcvqty213ZU6YSVU5Wd9Ck",
      authDomain: "autenticando-practica.firebaseapp.com",
      projectId: "autenticando-practica",
      storageBucket: "autenticando-practica.appspot.com",
      messagingSenderId: "798290527350",
      appId: "1:798290527350:web:d4dbd3f5baf03dfaef0b57"
    };

    export const app = firebase.initializeApp(firebaseConfig);
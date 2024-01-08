import appfirebase from "../firebase/firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // con esto se encarga para saber el estado si esta logeado o no de nuestra aplicación 
import { useState } from "react";
import Store from "./Store.jsx";
import Login from "./Login.jsx";

const auth = getAuth(appfirebase);
const Home = () => {
    const [registerUser, setRegisterUser] = useState(null);

    onAuthStateChanged(auth, (userFirebase) => {
        if (userFirebase) {
            setRegisterUser(userFirebase);
        } else {
            setRegisterUser(null);
        }
    });


    return (
        <div>
            {registerUser ? <Store emailUser={registerUser.email} /> : <Login />}
        </div>
    )
}

export default Home
import appFirebase from "../firebase/firebase.js";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(appFirebase);

const Store = ({ emailUser }) => {
    return (
        <div className="flex items-center justify-center p-4 gap-4">
            <h2 className="text-center">Bienvenido usuario {emailUser}</h2>
            <button
                className="bg-[#0D6EFD] text-white border border-[slategray]  p-2 rounded-lg"
                onClick={()=>signOut(auth)}
            >
                Logaut
            </button>
        </div>
    )
}

export default Store
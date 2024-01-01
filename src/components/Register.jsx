import {FaLock} from "react-icons/fa";

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-full  h-screen">
            <div className="flex flex-col justify-center items-center bg-[#fff] p-8 w-96  rounded-lg  shadow-lg shadow-black">
                <h2>Register</h2>
                <div className="icon ">
                    <FaLock/>
                </div>
                <div className="form">
                    <div className="box">
                        <input type="text" placeholder="full Name" />
                    </div>
                    <div className="box">
                        <input type="email" placeholder="E-mail" />
                    </div>
                    <div className="box">
                        <input type="text" placeholder="Country Name" />
                    </div>
                    <div className="box">
                        <input type="text" placeholder="Phone Number" />
                    </div>
                    <div className="box">
                        <input type="text" placeholder="Password" />
                    </div>
                    <button>Register</button>
                </div>            
            </div>
        </div>
    )
}

export default Register
import { FaLock } from "react-icons/fa";
// import { firebase}  from "../firebase/firebase";
import { useState } from "react";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [Phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex items-center justify-center min-h-full  h-screen">
            <div className="flex flex-col justify-center items-center bg-[#fff] p-8 w-96  rounded-lg  shadow-lg shadow-black">
                <h2 className="text-[#2196f3] mb-5">Register</h2>
                <div className="flex items-center justify-center text-2xl text-white p-4 w-[20%] rounded-[50%] mb-5 bg-[#2196f3] ">
                    <FaLock />
                </div>
                <div className="flex flex-col mt-5">
                    <div className="mb-5">
                        <input
                            className="w-full outline-none border border-[#bdbdbd] p-[12px]"
                            type="text"
                            placeholder="full Name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            className="w-full outline-none border border-[#bdbdbd] p-[12px]"
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />

                    </div>
                    <div className="mb-5">
                        <input
                            className="w-full outline-none border border-[#bdbdbd] p-[12px]"
                            type="text"
                            placeholder="Country Name"
                            value={country}
                            onChange={(e)=>{setCountry(e.target.value)}}
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            className="w-full outline-none border border-[#bdbdbd] p-[12px]"
                            type="text"
                            placeholder="Phone Number"
                            value={Phone}
                            onChange={(e)=>{setPhone(e.target.value)}}
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            className="w-full outline-none border border-[#bdbdbd] p-[12px]"
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                    <button className="bg-[#ffd54f] p-3 text-[#212121] rounded-md outline-none cursor-pointer transition-all duration-300 hover:bg-[#ffc107]">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register
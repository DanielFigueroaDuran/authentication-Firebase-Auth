import { FaLock } from "react-icons/fa";

const Register = () => {
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
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            className="w-full outline-none border border-[#bdbdbd] p-[12px]"
                            type="email"
                            placeholder="E-mail" />

                    </div>
                    <div className="mb-5">
                        <input
                            className="w-full outline-none border border-[#bdbdbd] p-[12px]"
                            type="text"
                            placeholder="Country Nam
                         e" />
                    </div>
                    <div className="mb-5">
                        <input
                            className="w-full outline-none border border-[#bdbdbd] p-[12px]"
                            type="text"
                            placeholder="Phone Numbe
                         r" />
                    </div>
                    <div className="mb-5">
                        <input
                            className="w-full outline-none border border-[#bdbdbd] p-[12px]"
                            type="text"
                            placeholder="Password" /
                        >
                    </div>
                    <button className="bg-[#ffd54f] ">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register
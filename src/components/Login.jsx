
import LoginPhoto from "../assets/img/Login.jpg";
import Retrato from "../assets/img/Retrato.jpg";

const Login = () => {

    return (
        <div className="container mx-auto mt-4 flex items-center justify-center p-10 ">
            <div className="">
                <div className="flex items-center h-full">
                    <div className="border border-black p-4 rounded-lg">
                        <img src={Retrato} alt="" className="w-[120px] h-[120px] m-auto rounded-[50%] mt-5 mb-5 " />
                        <form>
                            <input
                                className="bg-[#cccccc40  border border-[slategray] rounded-[30px] w-full p-4 mb-5
                                 focus:border-[cornflowerblue] shadow-xl"
                                type="text"
                                placeholder="Ingresar Email"
                            />
                            <input
                                className="bg-[#cccccc40  border border-[slategray] rounded-[30px] w-full p-4 mb-5
                                 focus:border-[cornflowerblue]  shadow-[cornflowerblue]"
                                type="text"
                                placeholder="Ingresar Contraseña"
                            />
                            <button>Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="">
                <img src={LoginPhoto} alt="" className="w-full h-[800px] mt-[100px]" />
            </div>
        </div>
    )
}

export default Login
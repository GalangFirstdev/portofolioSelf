import React, { Suspense, useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import LoginImage from "@eli/assets/assetPortofolio/LoginImage.png";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";





const Login = () => {

    const Swals = withReactContent(Swal)
    const navigate = useNavigate();

    const {  user ,  login  , message } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const loginUser = async (e) => {

        e.preventDefault()

        const response = await login({ email , password})

        if (!email || !password) {
            
            const Toast = Swals.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swals.stopTimer;
                  toast.onmouseleave = Swals.resumeTimer;
                }
              });
              Toast.fire({
                icon: response ? "success" : "error" ,
                title: response ? message : message,
              });
          
        } 

        if (!user) {
            const Toast = Swals.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swals.stopTimer;
                  toast.onmouseleave = Swals.resumeTimer;
                }
              });
              Toast.fire({
                icon: response ? "success" : "error" ,
                title: response ? message : message,
              });
        }

    }

    

    return (
        // <div className="w-full min-h-screen bg-gray-300">
        //     <div className="max-w-screen-lg mx-auto p-9 flex flex-col items-center justify-center">
        //         <div className="text-center">
        //             <p>
        //                 <span className="text-xl text-violet-900">Login</span>{" "}
        //                <span className="text-bold text-gray-700"> Here</span> 
        //             </p>
        //         </div>
        //         {/* Login Form */}
        //         <form className="mt-6" onSubmit={loginUser}>
        //             <div className="mb-4">
        //                 <label
        //                     htmlFor="email"
        //                     className="block text-gray-700 text-sm font-bold mb-2"
        //                 >
        //                     Email:
        //                 </label>
        //                 <input
        //                     type="email"
        //                     id="email"
        //                     name="email"
        //                     value={email}
        //                     onChange={(e) => setEmail(e.target.value)}
        //                     className="border rounded w-full py-2 px-3"
        //                     placeholder="Enter your email"
        //                 />
        //             </div>
        //             <div className="mb-4">
        //                 <label
        //                     htmlFor="password"
        //                     className="block text-gray-700 text-sm font-bold mb-2"
        //                 >
        //                     Password:
        //                 </label>
        //                 <input
        //                     type="password"
        //                     id="password"
        //                     name="password"
        //                     value={password}
        //                     onChange={(e) => setPassword(e.target.value)}
        //                     className="border rounded w-full py-2 px-3"
        //                     placeholder="Enter your password"
        //                 />
        //             </div>

        //             <button
        //                 type="submit" 
        //                // onClick={handleLogin}
        //                 className="bg-gray-600 text-white py-2 px-4 rounded m-5"
        //             >
        //                 Login
        //             </button>
        //             <button
        //                 type="button" 
        //                 onClick={() => navigate("/")}
        //                 className="bg-gray-600 m-5 text-white py-2 px-4 rounded"
        //             >
        //                 Back
        //             </button>
        //         </form>
        //     </div>

        //     {/* Register Link */}
        //     <div className="text-center mt-4">
        //         <p className="text-center text-bold text-gray-700">
        //             You don't have an account yet? please    
        //             <br />
        //             <Link to="/register" className="text-violet-900">
        //                 Register
        //             </Link>
        //         </p>
        //     </div>
        //     {/* img */}
        //     <div className="flex justify-center items-center ">
        //         <img src={LoginImage} alt="" className="mix-blend-luminosity" />
        //     </div>

        //     <div className="mt-7">
        //         <p className="text-center text-black text-xs ">
        //             Create Website by Muhammad Galang Miftah Riziq &copy; 2023
        //         </p>
        //     </div>
        // </div>
        <div className=" bg-gray-100   flex flex-col md:flex-row lg:h-screen">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-white flex justify-center items-center">
          <div className="">
          <div className="w-full">

          <div className="flex justify-center items-center h-full">
            <img src={LoginImage} alt="Registration" className="h-auto max-h-[900px]" />
          </div>
         
        </div>
      
          
      
          </div>
        </div>
      
        {/* Right Section */}
      
        <div className="max-w-screen-lg mx-auto p-9 flex flex-col items-center justify-center">
          <h3 className="text-xl text-violet-900">Login</h3> <span className="text-gray-700">Here</span> 

        <form className="w-full max-w-md" onSubmit={loginUser}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter your email"
                />
              </div>
      
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter your name"
                />
              </div>
              <button type="submit" className="bg-gray-600 text-white py-2 px-4 rounded w-full mt-4">Login</button>
            </form>

              <div className="text-center mb-6">
              <p>
                     <p className="text-center mt-4 text-gray-700">Already have an account? <button onClick={() => navigate("/register")} className="text-violet-900">Register</button></p>
              </p>
            </div>
        </div>
                     <p className="text-center text-gray text-xs mt-4">&copy; CreateWebsite by Muhammad Galang Miftah Riziq 2023</p>
      </div>
    );
};

export default Login;

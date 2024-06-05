import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrasiImage from '../../../assets/assetPortofolio/registerImage.png'
import axios from "axios"
import useAuth from "../../../hooks/useAuth";
import withReactContent from "sweetalert2-react-content";

import Swal from "sweetalert2";

const Register = () => {
    
  const Swals = withReactContent(Swal)

    const Navigate = useNavigate();
    
    
    const { Register , message } = useAuth()

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [role, setRole] = useState("");



    axios.defaults.withCredentials = true

    const RegisterUser = async (e) => {
        e.preventDefault()
      const response = await Register({  username , 
                    email , 
                    password , 
                    confirmpassword , 
                    role  })

    if (!username || !email || !password || !confirmpassword || !role) {
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
        <div className=" bg-gray-100   flex flex-col md:flex-row lg:h-screen ">
        {/* Left Section */}
        <div className="w-full md:w-1/1 bg-white flex justify-center items-center">
          <div className="max-w-screen-lg mx-auto p-9 flex flex-col items-center justify-center">
            <div className="text-center mb-6">
              <p>
                <span className="text-xl text-violet-900">Register</span> <span className="text-gray-700">Here</span> 
              </p>
            </div>
      
            <form className="w-full max-w-md" onSubmit={RegisterUser}>
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
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter your name"
                />
              </div>
      
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter your password"
                />
              </div>
      
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmpassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Confirm your password"
                />
              </div>
      
              <div className="mb-4">
                <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Role:</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter your role"
                />
              </div>
      
              <button type="submit" className="bg-gray-600 text-white py-2 px-4 rounded w-full mt-4">Register</button>
            </form>
      
            <p className="text-center mt-4 text-gray-700">Already have an account? <button onClick={() => Navigate("/Login")} className="text-violet-900">Login</button></p>
          </div>
        </div>
      
        {/* Right Section */}
        <div className="w-full">
          <div className="flex justify-center items-center h-full">
            <img src={RegistrasiImage} alt="Registration" className="h-auto max-h-[900px]" />
          </div>
        </div>
        <div>

        </div>
        <p className="text-center text-gray text-xs mt-4">&copy; CreateWebsite by Muhammad Galang Miftah Riziq 2023</p>
      </div>
      
    
      
    );
};

export default Register;

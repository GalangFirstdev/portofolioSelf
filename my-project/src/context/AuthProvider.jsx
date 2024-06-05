// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

axios.defaults.withCredentials = true

export const AuthProvider = ({ children }) => {
  
  const navigate = useNavigate()
  
  // const [loading , setloading] = useState(false)
  const [user, setUser] = useState(null);
  const [message, setmessage] = useState("");
  



  const login = async ({ email , password }) => {
    try {
      const response = await axios.post('http://localhost:8000/LoginUser', {
          email,
          password
      });
      setloading(true)
      setUser(response.data.msg);
      navigate("/TodoApps")
      console.log(response);

    } catch (error) {
      setmessage(error.response.data.msg)
      console.error('Error logging in:', error);
    }
  };


  const Register = async ({ username , email , password , confirmpassword , role }) => {
      try {
        const response = await axios.post("http://localhost:8000/users" , {
          username,
          email, 
          password,
          confirmpassword,
          role
        }) 
        navigate("/login")
        setUser(response.data.msg)
        console.log(response);
        
      } catch (error) {
        setmessage(error.response.data.msg)
        console.log(error);
      }
  } 

  const CheckSession = async () => {
    try {
      const response = await axios.get("http://localhost:8000/auth")
      
      if (response.data.user) {
        setUser(response.data.user)
      } else {
        setUser(null);
      }

    } catch (error) {
      console.log(error);
    }
  }


  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider value={{  user, 
                                    message , 
                                    login, 
                                    CheckSession,
                                    Register, 
                                    isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => useContext(AuthContext);

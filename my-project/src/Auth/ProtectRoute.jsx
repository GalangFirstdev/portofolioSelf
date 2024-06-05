import { useEffect } from 'react';
import { useNavigate , Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth(); // Ambil fungsi isAuthenticated dari konteks
  
    useEffect(() => {
      if (!isAuthenticated()) {
        navigate("/login", { replace: true });
      } 
    }, [isAuthenticated, navigate]);
  
    return isAuthenticated() ? (children ? children : <Outlet />) : null;
  };
  
  export default ProtectedRoute;

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
const [token, setToken] = useState(localStorage.getItem("token"));
//for check token is avalible in localstorage
  const handleProfile = () => {
    if (!token) {
      navigate("/");
    }
  };

  // call function when token changed
  useEffect(() => {
    handleProfile();
  }, [token]);
  return (
   <> {children}</>
  )
}

export default ProtectedRoute

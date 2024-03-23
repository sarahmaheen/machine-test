import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // In case if the token is not found then redirecting to login page
  if (!token){
    return <Navigate to="/" />;
  }

 // redirecting to protected (children) routes
  return children;
};

export default ProtectedRoute;


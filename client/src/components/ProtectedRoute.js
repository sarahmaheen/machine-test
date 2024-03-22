
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element, ...props }) {
  const token = localStorage.getItem('token');

  if (!token) {
    // Redirect to login page if token is not present
    return <Navigate to="/" />;
  }

  // Render the provided element if token is present
  return <Route {...props} element={element} />;
}

export default ProtectedRoute;

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If no specific roles are required, allow access
  if (allowedRoles.length === 0) {
    return children;
  }

  // If user role is not in allowed roles, redirect to home
  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
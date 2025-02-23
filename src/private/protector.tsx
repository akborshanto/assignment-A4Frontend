import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/app/hook";
import { useCurrentToken } from "../redux/auth/authSlice";

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  // Get the token from the Redux store using the selector.
  const token = useAppSelector(useCurrentToken);
console.log(token)
  // If the token is not available, redirect to login page.
  if (!token) {
    return <Navigate to="/login" replace={true}/>;
  }

  // Otherwise, render the children (protected route content).
  return <>{children}</>;
};

export default ProtectedRoutes;

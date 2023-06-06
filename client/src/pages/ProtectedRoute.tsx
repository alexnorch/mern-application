import React from "react";
import { useAppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProps> = ({ children }) => {
  const { user } = useAppContext();

  if (!user) {
    return <Navigate replace to="/auth" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

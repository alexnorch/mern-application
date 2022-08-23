import { useAppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();

  if (!user) {
    return <Navigate replace to="/auth" />;
  }

  return children;
};

export default ProtectedRoute;

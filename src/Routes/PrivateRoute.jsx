import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-ring loading-lg text-primary"></span>
          <span className="loading loading-ring loading-lg text-secondary"></span>
          <span className="loading loading-ring loading-lg text-accent"></span>
          <span className="loading loading-ring loading-lg text-neutral"></span>
          <span className="loading loading-ring loading-lg text-info"></span>
          <span className="loading loading-ring loading-lg text-success"></span>
          <span className="loading loading-ring loading-lg text-warning"></span>
          <span className="loading loading-ring loading-lg text-error"></span>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default PrivateRoute;

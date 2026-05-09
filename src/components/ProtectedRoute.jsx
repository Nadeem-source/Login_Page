import React from "react";
/*
  Redux selector import kiya
*/
import { useSelector } from "react-redux";

/*
  Navigate import kiya

  Kyun?
  Redirect karne ke liye
*/
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  /*
    Redux se auth state li
  */
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  /*
    Agar login nahi hai
    to redirect karo
  */
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
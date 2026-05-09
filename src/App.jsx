import React from "react";
/*
  Routes aur Route import kiye

  Kyun?
  Multiple pages handle karne ke liye
*/
import { Routes, Route } from "react-router-dom";

/*
  Login page import kiya
*/
import LoginPage from "./pages/LoginPage";

/*
  Home page import kiya
*/
import HomePage from "./pages/HomePage";

/*
  Protected route import kiya
*/
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/*
        Login route
      */}
      <Route path="/" element={<LoginPage />} />

      {/*
        Protected Home Route

        Kyun?
        Login bina home access block karne ke liye
      */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
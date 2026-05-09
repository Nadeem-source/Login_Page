// React import kiya — JSX aur React features use karne ke liye, nahi hota to component render nahi hota, alternative: React 17+ automatic JSX runtime
import React from "react";
// CSS import ki — component styling apply karne ke liye, nahi hota to plain ugly HTML dikhta, alternative: Tailwind / Styled Components / SCSS
import "./LoginPage.css";
// Redux ka dispatch hook import kiya — Redux actions trigger karne ke liye, nahi hota to state update nahi hoti, alternative: connect()
import { useDispatch } from "react-redux";
// Login action import kiya — authentication state change karne ke liye, nahi hota to login Redux me save nahi hota, alternative: context API auth
import { login } from "../redux/slices/authSlice";
// Router navigation hook import kiya — page redirect karne ke liye, nahi hota to route change nahi hota, alternative: <Navigate />
import { useNavigate } from "react-router-dom";
// useEffect import kiya — component load pe code chalane ke liye, nahi hota to localStorage auto set nahi hota, alternative: custom hooks
import { useEffect } from "react";

// Functional component banaya — reusable UI create karne ke liye, nahi hota to page exist nahi karta, alternative: class component
export default function LoginPage() {
  // Dispatch variable banaya — Redux actions bhejne ke liye, nahi hota to dispatch(login()) error deta, alternative: store.dispatch()
  const dispatch = useDispatch();
  // Navigate function banaya — route redirect karne ke liye, nahi hota to home page redirect nahi hota, alternative: window.location
  const navigate = useNavigate();

  // useEffect use kiya — component mount pe ek baar code run karne ke liye, nahi hota to render render pe localStorage overwrite hota, alternative: custom lifecycle logic
  useEffect(() => {

    /*
      Dummy user save kiya
  
      Kyun?
      Fake database simulate karne ke liye
    */
    // localStorage.setItem use kiya — browser me fake database save karne ke liye, nahi hota to credentials persist nahi rehte, alternative: sessionStorage / database
    localStorage.setItem(
      // "user" key di — data identify karne ke liye, nahi hota to retrieve nahi kar paate, alternative: any custom key name
      "user",
      // JSON.stringify use kiya — object ko string me convert karne ke liye, nahi hota to localStorage object save nahi kar pata, alternative: manual serialization
      JSON.stringify({
        // Email property save ki — authentication compare karne ke liye, nahi hota to email validation fail hoti, alternative: username
        email: "admin@gmail.com",
        // Password property save ki — login verification ke liye, nahi hota to password check impossible hota, alternative: hashed password backend me
        password: "123456",
      })
      // localStorage.setItem close kiya — function execution complete karne ke liye, nahi hota to syntax error aata
    );

  },
    // Empty dependency array diya — sirf first render pe effect chalane ke liye, nahi hota to har render pe chalega, alternative: dependencies pass karna
    []);
  // Form submit handler banaya — login process handle karne ke liye, nahi hota to form useless hota, alternative: button click handler
  const handleSubmit = (e) => {
    // preventDefault use kiya — page refresh stop karne ke liye, nahi hota to form submit pe reload hota, alternative: return false (old method)
    e.preventDefault();
    // FormData object banaya — form inputs easily fetch karne ke liye, nahi hota to manual state handling karna padta, alternative: useState controlled inputs
    const formData = new FormData(e.target);
    // Email fetch kiya — user entered email lene ke liye, nahi hota to authentication impossible hoti, alternative: useState
    const email = formData.get("email");
    // Password fetch kiya — entered password lene ke liye, nahi hota to password validation nahi hoti, alternative: refs/useState
    const password = formData.get("password");
    // localStorage data parse kiya — saved user retrieve karne ke liye, nahi hota to saved credentials access nahi hote, alternative: API/database
    const savedUser = JSON.parse(
      // localStorage.getItem use kiya — saved value fetch karne ke liye, nahi hota to data unavailable hota, alternative: sessionStorage.getItem
      localStorage.getItem("user")
    );

    // Empty validation lagayi — blank login stop karne ke liye, nahi hota to empty credentials se login try hota, alternative: required attribute
    if (!email || !password) {
// Alert diya — user ko warning dene ke liye, nahi hota to user confuse hota, alternative: toast/snackbar/modal
      alert("Please fill all fields");
// return use kiya — niche wala code stop karne ke liye, nahi hota to invalid login bhi continue hota, alternative: else block
      return;
    }

    /*
      User exists ya nahi
    */
    if (!savedUser) {

      alert("No user found");

      return;
    }

    /*
      Dynamic credential validation
    */
    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {

      dispatch(login());

      navigate("/home");
    }

    else {

      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="login-container">
        <div className="left-panel">
          <div className="brand">
            <h1>LoginHere</h1>
            <p>Pro Business Experience</p>
          </div>

          <div className="left-content">
            <h2>
              Welcome Back <span>Professional</span>
            </h2>

            <p>
              Securely access your dashboard with a next-generation premium
              authentication experience.
            </p>

            <div className="stats">
              <div className="stat-box">
                <h3>99.9%</h3>
                <span>Security</span>
              </div>

              <div className="stat-box">
                <h3>24/7</h3>
                <span>Support</span>
              </div>

              <div className="stat-box">
                <h3>10K+</h3>
                <span>Clients</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="login-card">
            <h2>Sign In</h2>
            <p className="subtitle">
              Enter your credentials to continue
            </p>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" name="email" />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" name="password" />
              </div>

              <div className="options">
                <label className="remember">
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="/">Forgot Password?</a>
              </div>

              <button type="submit" className="login-btn">
                Login Now
              </button>
            </form>

            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>

            <div className="social-login">
              <button>Google</button>
              <button>GitHub</button>
            </div>

            <p className="signup-text">
              Don’t have an account? <a href="/">Create Account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
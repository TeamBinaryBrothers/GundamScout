import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-button-container">
      <Link to="/" className="back-button">
        <button>Back to Home Page</button>
      </Link>
    </div>
  );
};

export default Login;

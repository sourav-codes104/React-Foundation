import React from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const isLoggedIn = false;
  if(isLoggedIn){
    return <Navigate to="/"></Navigate>
  }
  return <div>Login Page</div>
}

export default Login;

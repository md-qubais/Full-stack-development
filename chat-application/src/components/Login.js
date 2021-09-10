import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/auth"
import { auth } from "../firebase";
import firebase from "firebase";
const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to chats!</h2>
        <div className="login-button google" onClick={()=>{
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        }}>
          {<GoogleOutlined></GoogleOutlined>}
          Login with Google
        </div>
      </div>
    </div>
  );
};
export default Login;

import React from "react";
import { auth, provider } from "../firebase-config";

function Login() {
  const SignInWithGoogle = () => {};
  return (
    <div>
      <p>Sign in with Google too continue</p>
      <button onclick={SignInWithGoogle}>Login</button>
    </div>
  );
}

export default Login;

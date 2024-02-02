import React, { useState } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const [userDetails, setUserDetails] = useState(null);

  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      setUserDetails(user);
      console.log("User signed in", user);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen">
      <p className="text-lg mb-4">Sign in with Google to continue</p>
      {userDetails ? (
        <div className="mb-4">
          <p>Signed in as: {userDetails.displayName}</p>
          <p>Email: {userDetails.email}</p>
          <img
            src={userDetails.photoURL}
            alt="Profile"
            className="rounded-full absolute top-4 left-4 w-16 h-16 mt-2"
          />
        </div>
      ) : null}
      <button
        onClick={SignInWithGoogle}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login with Google
      </button>
    </div>
  );
}

export default Login;

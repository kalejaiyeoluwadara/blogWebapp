import React from "react";
import { useGlobal } from "../context";
function Nav() {
  const { setPage } = useGlobal();
  return (
    <div className="w-screen nav fixed top-0 left-0 h-[10vh] flex gap-10 bg-black text-white items-center justify-center ">
      <p
        onClick={() => {
          setPage("home");
        }}
      >
        Home
      </p>
      <p
        onClick={() => {
          setPage("login");
        }}
      >
        Login
      </p>
      <p
        onClick={() => {
          setPage("post");
        }}
      >
        CreatePost
      </p>
    </div>
  );
}

export default Nav;

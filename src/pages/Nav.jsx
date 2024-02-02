import React from "react";
import { useGlobal } from "../context";

function Nav() {
  const { setPage } = useGlobal();

  return (
    <nav className="bg-gray-800 text-white h-[10vh] p-4">
      <div className="container mx-auto flex items-center justify-center font-[600]">
        <div className="flex space-x-4">
          <button
            className="hover:text-gray-300"
            onClick={() => setPage("home")}
          >
            Home
          </button>
          <button
            className="hover:text-gray-300"
            onClick={() => setPage("login")}
          >
            Login
          </button>
          <button
            className="hover:text-gray-300"
            onClick={() => setPage("post")}
          >
            Create Post
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

// export default App
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Nav from "./pages/Nav";
import { useGlobal } from "./context";
const App = () => {
  const { active } = useGlobal();
  return (
    <>
      <Nav />
      <div className="mt-20 px-2 ">
        {active === "home" && <Home />}
        {active === "login" && <Login />}
        {active === "post" && <CreatePost />}
      </div>
    </>
  );
};
export default App;

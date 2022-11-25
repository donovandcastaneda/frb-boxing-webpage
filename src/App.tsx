import { useState } from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Join } from "./pages/Join";


const App = () => {
 
  return ( 
    <>
    <NavBar/>
    <div className="App">
      <Routes>
        <Route path = "/home" element = {<Home/>} />
        <Route path = "/join" element = {<Join/>} />
      </Routes>
      
    </div>
    </>
  );
};

export default App;

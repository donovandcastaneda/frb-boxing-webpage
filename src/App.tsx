import { useState } from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Join } from "./pages/Join";
import { Boxers } from "./pages/Boxers";
import { Coaches } from "./pages/Coaches";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { GymInfo } from "./components/Footer";
import { ImageSlides } from "./components/ImageSlides";


const App = () => {
  return (
    <>
      <NavBar />
      <div className="App">
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/boxers" element={<Boxers />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <GymInfo />
    </>
  );
};

export default App;

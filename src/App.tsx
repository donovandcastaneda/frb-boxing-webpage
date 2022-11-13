import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ImageSlides } from "./components/ImageSlides";
import { GymInfo } from "./components/HomeFooter";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ImageSlides />
      <GymInfo />
    </div>
  );
};

export default App;

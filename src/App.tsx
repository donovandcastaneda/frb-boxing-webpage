import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ImageSlides } from "./components/ImageSlides";


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ImageSlides/>
   
    </div>
   
  );
};

export default App;

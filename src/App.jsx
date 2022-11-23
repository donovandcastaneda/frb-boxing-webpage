import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home"
import { createRoot } from "react-dom/client";


const App = () => {
  return (
    <div className="App">
      <Home/>
    </div>
  );
};

export default App;

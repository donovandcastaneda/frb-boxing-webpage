import "./App.css";
import { NavBar } from "./components/NavBar";
import { Route, Routes, Router } from "react-router-dom";
import { Join } from "./pages/Join";
import { Boxers } from "./pages/Boxers";
import { Coaches } from "./pages/Coaches";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { GymInfo } from "./components/Footer";
import { Events } from "./pages/Events";
import  { Login }  from "./pages/Login";
import { CrudEvents } from "./pages/CrudEvents";
import { CrudCoaches } from "./pages/CrudCoaches";
import { CrudBoxers } from "./pages/CrudBoxers";

const App = () => {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/boxers" element={<Boxers />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/crudBoxers" element={<CrudBoxers/>}/>
        <Route path="/crudCoaches" element={<CrudCoaches/>}/>
        <Route path="/crudEvents" element={<CrudEvents/>}/>
      </Routes>
      <GymInfo />
    </>
  );
};

export default App;
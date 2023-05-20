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
import { Login } from "./pages/Login";
import { AddBoxers } from "./pages/AddBoxers";
import AddCoaches from "./pages/AddCoaches";
import AddEvents from "./pages/AddEvents";
import UpdateBoxers from "./pages/UpdateBoxer";

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
        <Route path="/login" element={<Login />} />
        <Route path="/AddBoxers" element={<AddBoxers />} />
        <Route path="/AddCoaches" element={<AddCoaches />} />
        <Route path="/AddEvents" element={<AddEvents />} />
        <Route path="/UpdateBoxers/:id" element={<UpdateBoxers />} />
      </Routes>
      <GymInfo />
    </>
  );
};

export default App;

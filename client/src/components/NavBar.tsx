import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost normal-case text-base md:text-2xl navbar">
            <img src="./favicon.ico" className="pr-3" alt="favicon" />
            Flaco Ramirez Boxing
          </NavLink>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal p-4 text-2xl hidden w-full md:flex">
            <li className="pr-4">
              <NavLink to="/join" className="navbar-join">Join</NavLink>
            </li>
            <li className="pr-4">
              <NavLink to="/boxers" className="navbar-boxers">Boxers</NavLink>
            </li>
            <li className="pr-4">
              <NavLink to="/coaches" className="navbar-coaches">Coaches</NavLink>
            </li>
            <li className="pr-4">
              <NavLink to="/events" className="navbar-events">Events</NavLink>
            </li>
            <li className="pr-4">
              <NavLink to="/about" className="navbar-about">About</NavLink>
            </li>
          </ul>
          <div className="dropdown dropdown-bottom dropdown-end  outline-white">
            <div className="md:hidden">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className={`dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52 ${
                  menuOpen ? "" : "hidden"
                }`}
              >
                <li>
                  <NavLink to="/" className="navbar-home" onClick={toggleMenu}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/join" className="navbar-join" onClick={toggleMenu}>
                    Join
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/boxers" className="navbar-boxers" onClick={toggleMenu}>
                    Boxers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/coaches" className="navbar-coaches" onClick={toggleMenu}>
                    Coaches
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/events" className="navbar-events" onClick={toggleMenu}>
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="navbar-about" onClick={toggleMenu}>
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

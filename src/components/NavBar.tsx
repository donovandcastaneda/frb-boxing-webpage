import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    
    <nav>
      <div className="navbar bg-base-100    ">
        <div className="flex-1">
          <NavLink to="/" className="navbar-join">
            <a className="btn btn-ghost normal-case text-base md:text-2xl ">
              Flaco Ramirez Boxing
            </a>
          </NavLink>
        </div>
        <div className="flex-none ">
          <ul className=" menu menu-horizontal p-4 text-2xl hidden w-full md:flex    ">
            <NavLink to="/join" className="navbar-join">
              <li>
                <a href="">Join</a>
              </li>
            </NavLink>
            <NavLink to="/boxers" className="navbar-boxers">
              <li>
                <a>Boxers</a>
              </li>
            </NavLink>
            <NavLink to="/coaches" className="navbar-coaches">
              <li>
                <a>Coaches</a>
              </li>
            </NavLink>
            <NavLink to="/about" className="navbar-about">
              <li>
                <a>About</a>
              </li>
            </NavLink>
          </ul>
          <div className="dropdown dropdown-bottom dropdown-end  outline-white">
            <div className="md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
              className=" dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52 "
            >
              <NavLink to="/" className="navbar-home">
              <li>
                <a>Home</a>
              </li>
            </NavLink>
              <NavLink to="/join" className="navbar-join">
              <li>
                <a>Join</a>
              </li>
            </NavLink>
            <NavLink to="/boxers" className="navbar-boxers">
              <li>
                <a>Boxers</a>
              </li>
            </NavLink>
            <NavLink to="/coaches" className="navbar-coaches">
              <li>
                <a>Coaches</a>
              </li>
            </NavLink>
            <NavLink to="/about" className="navbar-about">
              <li>
                <a>About</a>
              </li>
            </NavLink>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

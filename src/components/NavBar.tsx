import React from "react";
import { NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <nav>
      <div className="navbar bg-base-100 px-7 py-3 text-2xl">
        <div className="flex-1">
          <NavLink to="/home" className="navbar-join">
            <a className="btn btn-ghost normal-case text-2xl">
              Flaco Ramirez Boxing
            </a>
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-2">
            <NavLink to="/join" className="navbar-join">
              <li>
                <a href="">Join</a>
              </li>
            </NavLink>
            <NavLink to="/boxers" className="navbar-join">
              <li>
                <a>Boxers</a>
              </li>
            </NavLink>
            <NavLink to="/coaches" className="navbar-join">
              <li>
                <a>Coaches</a>
              </li>
            </NavLink>
            <NavLink to="/about" className="navbar-join">
              <li>
                <a>About</a>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

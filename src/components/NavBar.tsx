import React from "react";

export function NavBar() {
  return (
    <nav>
      <div className="navbar bg-base-100 px-7 py-3 text-2xl">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl">
            Flaco Ramirez Boxing
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-2">
            <li>
              <a href="">Join</a>
            </li>
            <li>
              <a>Boxers</a>
            </li>
            <li>
              <a>Coaches</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

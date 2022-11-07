import React from "react";

export function NavBar() {
  return (
    <nav className="bg-zinc-900">
      <div className="px-10 mx-auto  ">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="#" className=" text-white flex items-center py-6 px-4">
                <span>FRB Boxing</span>
              </a>
            </div>
          </div>
          <div className=" text-white flex items-center space-x-9 mx-4">
            <a href="#">Home</a>
            <a href="#">Join</a>
            <a href="#">Boxers</a>
            <a href="#">Coaches</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

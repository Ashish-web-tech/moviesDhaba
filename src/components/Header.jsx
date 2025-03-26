import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const [hidden, setHidden] = useState(true)

  return (
    <div className="bg-red-500 flex rounded-2xl flex-col text-white items-center px-6 py-4 gap-3">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl font-extrabold leading-none">
          Movies <span className="text-emerald-500">Dhaba</span>
        </h1>

        <nav className="flex items-center gap-4">
          <button
          onClick={()=>setHidden(!hidden)}
          className="text-2xl md:hidden">
            <IoMenu />
          </button>

          <ul className="hidden md:flex gap-6 font-bold">
            <li className="hover:scale-105 transition-transform">
              <a href="#">Home</a>
            </li>
            <li className="hover:scale-105 transition-transform">
              <a href="#about">About Us</a>
            </li>
            <li className="hover:scale-105 transition-transform">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      
      <ul className={`text-center text-lg ${hidden===true && "hidden"}`} >
        <li className="hover:scale-105 transition-transform">
          <a href="#">Home</a>
        </li>
        <li className="hover:scale-105 transition-transform">
          <a href="#">About Us</a>
        </li>
        <li className="hover:scale-105 transition-transform">
          <a href="#">Contact</a>
        </li>
        
      </ul>
    </div>
  );
};

export default Header;

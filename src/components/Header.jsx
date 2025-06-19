import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="flex rounded-2xl flex-col text-white items-center">
      <div className="flex w-full justify-between">
        <img src="/img/logo.png" alt="" className="w-[100px]" />
        <nav className="flex items-center gap-4">
          <button
            onClick={() => setHidden(!hidden)}
            className="text-2xl md:hidden"
          >
            <IoMenu />
          </button>
          <ul className="hidden md:flex gap-6 font-bold">
            <li className="hover:scale-105 transition-transform">
              <a href="">Home</a>
            </li>
            <li className="hover:scale-105 transition-transform">
              <a href="">About Us</a>
            </li>
            <li className="hover:scale-105 transition-transform">
              <a
                href="https://www.linkedin.com/in/ashish-mishra-59a36325a/"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <ul className={`text-center text-lg ${hidden === true && "hidden"}`}>
        <li className="hover:scale-105 transition-transform">
          <a href="">Home</a>
        </li>
        <li className="hover:scale-105 transition-transform">
          <a href="">About Us</a>
        </li>
        <li className="hover:scale-105 transition-transform">
          <a
            href="https://www.linkedin.com/in/ashish-mishra-59a36325a/"
            target="_blank"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

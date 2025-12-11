import React, { useState } from "react";
import logo from "../assets/7781507.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus()
  const handleLogin = () => {
    loginbtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
  };
  return (
    <>
      <header className="flex items-center justify-between px-5 h-18 bg-gray-900 shadow-2xl">
        <img src={logo} alt="Logo" className="h-17 rounded-2xl" />
        <ul className=" hidden md:flex space-x-4 font-medium text-gray-700 cursor-pointer">
        <li className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer">Online: {onlineStatus ? "True" : "False"}  </li>
          <Link to="/">
            <button
              type="button"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer"
            >
              Home
            </button>
          </Link>
          <Link to="/about">
            <button
              type="button"
              className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer"
            >
              About
            </button>
          </Link>
          <Link to="/contact">
            <button
              type="button"
              className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer"
            >
              Contact
            </button>
          </Link>
           <Link to="/grocery">
            <button
              type="button"
              className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer"
            >
              Grocery
            </button>
          </Link>
          <button
            onClick={handleLogin}
            type="button"
            className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer"
          >
            {loginbtn}
          </button>
        </ul>
      </header>
    </>
  );
};

export default Header;

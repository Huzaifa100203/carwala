import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={"/"}>
              <span className="text-2xl font-bold text-emerald-500">
                CARWALA
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-500 transition-colors"
            >
              Home
            </Link>
            <a
              href="#"
              className="text-gray-700 hover:text-emerald-500 transition-colors"
            >
              Cars
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-emerald-500 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-emerald-500 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-emerald-500 transition-colors"
            >
              Contact
            </a>
            <Link
              to={"/login"}
              className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition-colors"
            >
              Login
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-gray-700">
              <i className="bx bx-menu text-3xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

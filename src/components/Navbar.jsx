import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex items-center">
            <Link to={"/"}>
              <span className="text-2xl font-bold text-emerald-500">
                CARWALA
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            {user ? (
              <>
                <p className="text-sm md:text-base text-gray-700 hover:text-emerald-500 transition-colors uppercase">
                  Welcome {user?.name}
                </p>
                <button
                  onClick={handleLogOut}
                  className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to={"/login"}
                className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition-colors"
              >
                Login
              </Link>
            )}
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

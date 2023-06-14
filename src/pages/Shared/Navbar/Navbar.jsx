import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/dashboard/selectedClasses">Dashboard</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-black opacity-80">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-2 p-4 shadow bg-base-300 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img className="w-12 lg:w-20" src={logo} alt="" />
        <Link className="btn btn-ghost normal-case text-xl lg:text-5xl font-semibold text-white">
          Athleti Camp
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar online mr-2 md:mr-5">
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} alt="User Avatar" />
              </div>
            </div>
            <button onClick={handleLogout} className="btn btn-info btn-outline btn-sm md:btn-md">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-info btn-outline btn-sm md:btn-md">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

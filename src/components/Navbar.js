import React from "react";
import toast from "react-hot-toast";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
const Navbar = (props) => {
  const { isLoggedIn, setIsLoggedIn, setAccountData } = props;
  const logOutHandler = () => {
    setIsLoggedIn(false);
    setAccountData({});
    toast.success("Logged out");
  };
  return (
    <div className="flex justify-between items-center py-4 w-11/12 mx-auto max-w-[1160px]">
      <Link to="/ ">
        <img src={Logo} alt="Logo" loading="lazy" width={160} height={32} />
      </Link>
      <nav className="hidden md:block text-xl">
        <ul className="flex gap-x-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="hidden md:flex items-center gap-x-4 text-lg">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-zinc-600 py-2 px-3 rounded-lg border text-zinc-300 border-zinc-500">
              Log In
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/sign-up">
            <button className="bg-zinc-600 py-2 px-3 rounded-lg border text-zinc-300 border-zinc-500">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/login" className="">
            <button
              className="bg-zinc-600 py-2 px-3 rounded-lg border text-zinc-300 border-zinc-500"
              onClick={logOutHandler}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard" className="">
            <button className="bg-zinc-600 py-2 px-3 rounded-lg border text-zinc-300 border-zinc-500">
              Dashboard{" "}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

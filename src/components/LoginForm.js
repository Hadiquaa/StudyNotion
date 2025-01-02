import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  };
  return (
    <form
      className="mt-6 flex flex-col w-full gap-y-1"
      onSubmit={submitHandler}
    >
      <div>
        <label htmlFor="email" className="text-sm leading-5 ">
          Email Address <sup className="text-red-500 ">*</sup>
        </label>

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          placeholder="Enter email address"
          className="p-3 bg-zinc-600 w-full rounded-lg text-zinc-300 shadow-sm shadow-zinc-100"
        />
      </div>
      <br />
      <div className="relative">
        <label htmlFor="password" className="text-sm leading-5 ">
          Password <sup className="text-red-500">*</sup>
        </label>

        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
          placeholder="Enter password"
          className="p-3 bg-zinc-600 w-full rounded-lg text-zinc-300 shadow-sm shadow-zinc-100"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-9 right-4 text-gray-400 cursor-pointer border-none outline-none"
        >
          {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
        </span>
        <a
          className="text-blue-500  text-sm ml-[21rem] mt-2 max-w-max "
          href="/"
        >
          Forgot Password
        </a>
      </div>

      <br />
      <button
        type="submit"
        className="bg-yellow-300 py-2 px-3 rounded-lg mt-6 font-medium text-black"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;

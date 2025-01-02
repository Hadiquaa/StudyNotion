import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpForm = (props) => {
  const { setIsLoggedIn, setAccountData } = props;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const accountData = {
      ...formData,
      accountType,
    };
    setIsLoggedIn(true);
    toast.success("Logged In");
    setAccountData(accountData);
    navigate("/dashboard");
  };
  return (
    <div>
      <div className="flex bg-zinc-600 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student" ? "bg-zinc-800" : "bg-zinc-600"
          }  py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor" ? "bg-zinc-800" : "bg-zinc-600"
          }  py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>
      <form
        className="mt-6 flex flex-col w-full gap-y-4"
        onSubmit={submitHandler}
      >
        <div className="flex gap-x-4">
          <div>
            <label htmlFor="firstName" className="text-sm leading-5 ">
              First Name: <sup className="text-red-500 ">*</sup>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              placeholder="Enter First Name"
              className="p-3 bg-zinc-600 w-full rounded-lg text-zinc-300 shadow-sm shadow-zinc-100"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-sm leading-5 ">
              Last Name: <sup className="text-red-500 ">*</sup>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="p-3 bg-zinc-600 w-full rounded-lg text-zinc-300 shadow-sm shadow-zinc-100"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-sm leading-5 ">
            Email: <sup className="text-red-500 ">*</sup>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            value={formData.email}
            className="p-3 bg-zinc-600 w-full rounded-lg text-zinc-300 shadow-sm shadow-zinc-100"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="flex gap-x-4">
          <div className="relative">
            <label htmlFor="password" className="text-sm leading-5 ">
              Create Password: <sup className="text-red-500 ">*</sup>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter password"
              value={formData.password}
              className="p-3 bg-zinc-600 w-full rounded-lg text-zinc-300 shadow-sm shadow-zinc-100"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-9 right-4 text-gray-400 cursor-pointer border-none outline-none"
            >
              {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
            </span>
          </div>
          <div className="relative ">
            <label htmlFor="confirmPassword" className="text-sm leading-5 ">
              Confirm Password: <sup className="text-red-500 ">*</sup>
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirm-password"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              className="p-3 bg-zinc-600 w-full rounded-lg text-zinc-300 shadow-sm shadow-zinc-100"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute top-9 right-4 text-gray-400 cursor-pointer border-none outline-none"
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={24} />
              ) : (
                <FaEye size={24} />
              )}
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="bg-yellow-300 py-2 px-3 rounded-lg mt-6 font-medium text-black"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

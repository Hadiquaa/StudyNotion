import React from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { FcGoogle } from "react-icons/fc";
import frame from "../assets/frame.png";

const Template = (props) => {
  const {
    title,
    desc1,
    desc2,
    image,
    formType,
    setIsLoggedIn,
    setAccountData,
  } = props;
  return (
    <div className="flex justify-between mx-auto w-11/12 max-w-[1160px] py-12 flex-col-reverse gap-y-12 md:gap-y-0 md:flex-row">
      <div className="w-11/12 max-w-[450px] mx-auto md:mx-0">
        <h1 className="font-semibold text-3xl leading-9">{title} </h1>

        <p className="mt-4 text-lg leading-6 text-zinc-300">
          <span>{desc1}</span>
          <br />
          <span className="text-blue-500 italic">{desc2}</span>
        </p>

        {formType === "signup" ? (
          <SignUpForm
            setIsLoggedIn={setIsLoggedIn}
            setAccountData={setAccountData}
          />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex w-full items-center gap-x-2 my-4">
          <div className="h-[1px] flex-1 bg-zinc-600 "></div>
          <p className="text-zinc-300">OR</p>
          <div className="h-[1px] flex-1 bg-zinc-600 "></div>
        </div>
        <button className="flex w-full items-center justify-center border-zinc-400 border py-2 rounded-md text-zinc-300">
          <FcGoogle size={24} className="text-yellow-300 mr-2" />
          <p>Sign In with Google</p>
        </button>
      </div>
      <div className="relative w-11/12 max-w-[450px] mx-auto md:mx-0">
        <img
          src={image}
          className="absolute z-10 -top-4 right-4"
          alt="main-img"
          width={558}
          height={504}
          loading="lazy"
        />
        <img src={frame} width={558} height={504} loading="lazy" alt="frame" />
      </div>
    </div>
  );
};

export default Template;

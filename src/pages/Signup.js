import React from "react";
import signupimage from "../assets/signup.png";
import Template from "../components/Template";

const Signup = ({ setIsLoggedIn, setAccountData }) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupimage}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
      setAccountData={setAccountData}
    />
  );
};

export default Signup;

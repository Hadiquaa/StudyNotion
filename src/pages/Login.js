import React from "react";
import loginPic from "../assets/login.png";
import Template from "../components/Template";

const Login = (props) => {
  const { setIsLoggedIn } = props;
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginPic}
      formType="login"
      setIsLoggedIn={setIsLoggedIn} // Passing down the setter function to Template component to update the state of isLoggedIn in App component.  // This is a common pattern in React where we pass down state and methods as props to child components.  // This makes the child components reusable and decoupled from the parent component.  // In this case, the child component is Template, and the parent component is App.  // This pattern is called "prop drilling".
    />
  );
};

export default Login;

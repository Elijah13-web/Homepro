

// AuthForm.js
import React, { useState } from "react";
import Register from "./Resgister";
import Login from "./Login";

const AuthForm = ({ loading }) => {
  const [isLogin, setIsLogin] = useState(false);

  // Function to toggle form
  const handleToggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div className="">
      {isLogin ? (
        <Login  toggleModal={handleToggleForm} /> 
      ) : (
        <Register toggleModal={handleToggleForm} /> 
      )}
    </div>
  );
};

export default AuthForm;

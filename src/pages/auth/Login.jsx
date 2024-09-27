import React, { useState } from 'react';
import imglogo2 from "../../assets/icons/flat-color-icons_google.png";
import eyeOpen from "../../assets/icons/Component 47.png"
import eyeClosed from "../../assets/icons/Component 47.png"
import Wrapper from '../../components/reasurable/Wrapper';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false); // State for checkbox
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe); // Toggle remember me state
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const [formData, setFormDate] = useState({
    username: "hotman",
    password: "",
  });
  
  // handleInputchange
  const handleInputChange = (e) => {
    setFormDate({...formData, [e.target.name]: e.target.value });
  };
  
  const apiUrl ="https://homepro-backend-y4t5.onrender.com/api/auth/login"
  
  //   Function to submit form data to backend 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(apiUrl, {
        userName: formData.username,
        password: formData.password,
      });
      console.log(res);
      alert("Login Successful!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <div className="w-full lg:w-[628px] mx-auto">
        <div className="justify-center items-center">
          <div className="py-3">
            <h1 className="mt-32 text-center text-4xl font-bold">WELCOME BACK!</h1>
            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/register" className="cursor-pointer text-custom-green px-1">
                Sign Up
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full border box-content rounded-3xl shadow-lg lg:p-5">
            {/* Username Field */}
            <div className="mb-4">
            <label className="block text-gray-700 mb-2">UserName*</label>
            <input
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              required
              placeholder="username"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
          </div>

            {/* Password Field */}
            <div className="mb-3 relative">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password*</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
              <img
                src={showPassword ? eyeOpen : eyeClosed} // Change icon based on state
                alt="Toggle password visibility"
                className="absolute right-3  transform top-12 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>

            {/* Remember me and Forgot password */}
            <div className="py-3 flex justify-between">
              <div className="flex items-center">
                {/* Clickable checkbox */}
                <div
                  className={`w-6 h-6 border-2 rounded-md cursor-pointer flex items-center justify-center mr-2 ${rememberMe ? 'bg-blue-500' : 'bg-gray-200'}`}
                  onClick={handleCheckboxChange}
                >
                  {rememberMe && (
                    <span className="text-white font-bold">&#10003;</span> // Check mark when active
                  )}
                </div>
                <h1 className="text-[#000000] text-xl">Remember me</h1>
              </div>

              {/* Forgot password */}
              <h1 className="text-[#000000] text-xl mx-2 cursor-pointer">
                Forgot password?
              </h1>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-4 px-4 bg-[#9FA007] text-white rounded-full hover:bg-[rgb(128,128,33)]"
            >
              Sign In
            </button>

            {/* Or Section */}
            <div className="my-4 flex items-center justify-between p-3">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500">Or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google Sign-In */}
            <div className="flex items-center justify-center border-2 p-4 rounded-lg">
              <img src={imglogo2} alt="Google logo" className="w-6 h-6 mr-2" />
              <span>
                <a href="/#">Sign In with Google</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
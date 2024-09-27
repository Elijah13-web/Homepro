import React, {useState, useEffect} from 'react'
import imglogo2 from "../../assets/icons/flat-color-icons_google.png"
import Wrapper from '../../components/reasurable/Wrapper'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
// state
const [formData, setFormDate] = useState({
  firstname: "ELIJAH",
  lastname: "fire",
  username: "hotman",
  email: "hott@email.com",
  password: "",
});

// handleInputchange
const handleInputChange = (e) => {
  setFormDate({...formData, [e.target.name]: e.target.value });
};

const apiUrl ="https://homepro-backend-y4t5.onrender.com/api/auth/register"

//   Function to submit form data to backend 
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(apiUrl, {
      firstName: formData.firstname,
      lastName: formData.lastname,
      userName: formData.username,
      email: formData.email,
      password: formData.password,
    });
    console.log(res);
    alert("Registration Successful!");
  } catch (err) {
    console.error(err);
  }
};

// console.log(formData.firstname);

  return (
  <Wrapper>
     <div className="w-full lg:w-[628px] mx-auto ">
     <div className='items-center justify-center'>
 <div className='py-3 '>
        <h1 className='mt-32 text-center text-4xl font-bold'>REGISTER!</h1>
        <p className='text-center'>Already have an account? <Link to="/login" className="cursor-pointer text-custom-green  hover px-1  ">Log In </Link></p>
    </div>

    <form onSubmit={handleSubmit} className=" w-full border box-content rounded-3xl shadow-lg lg:p-5">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">First Name*</label>
            <input
              name="firstname"
              type="text"
              value={formData.firstname}
              onChange={handleInputChange}
              required
              placeholder="first name"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
          </div>
          <div className="mb-4">
            <label  className="block text-gray-700 mb-2">Last Name*</label>
            <input
              name="lastname"
              type="text"
              value={formData.lastname}
              onChange={handleInputChange}
              required
              placeholder="last name"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
          </div>
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

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email address*</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              required
              placeholder="parfman@gmail.com"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password*</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              required
              placeholder="Enter your password"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
          </div>

          <div className="mb-7 text-center lg:text-start">
            <p className="text-gray-600">
              By clicking on the "Sign Up" button, you agree to the{' '}
              <span className="text-[#9FA007]">Terms</span> and{' '}
              <span className="text-[#9FA007]">Privacy Policy</span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-4 bg-[#9FA007] text-white rounded-full hover:bg-[rgb(128,128,33)]"
          >
            Sign Up
          </button>

          <div className="my-4 flex items-center justify-between p-3">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex items-center justify-center border-2 p-4 rounded-lg">
            <img src={imglogo2} alt="Google logo" className="w-6 h-6 mr-2" />
            <span>
              <a href="/#">Sign Up with Google</a>
            </span>
          </div>
        </form>
   </div>
     </div>
  </Wrapper>
  )
}

export default Register
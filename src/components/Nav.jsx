import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "../assets/icons/Homepro.png";
import home from "../assets/icons/Vector (5).png";

const Menu = () => {
  return (
    <div className='w-full bg-[#F8F3DD]'>
      <nav className=' flex max-w-[90%] mx-auto'>
        <nav className="flex  w-full py-10 ">
        <NavLink to="/" className='flex'>
        <img src={home} alt="home" />
      <img src={logo} alt='logo' />
        </NavLink>
        </nav>
        
        <div className="flex flex-col lg:flex-row justify-between   items-center min-w-[70%] text-xl">
          <ul className="min-w-[60%] flex flex-col lg:flex-row justify-between items-center" >
          <li className="hover:text-custom-green hover:border-b-2 border-custom-green">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-custom-green hover:border-b-2 border-custom-green">
            <NavLink to="/aboutus">About us</NavLink>
          </li>
          <li className="hover:text-custom-green hover:border-b-2 border-custom-green">
            <NavLink to="/listings">Listings</NavLink>
          </li>
          <li className="hover:text-custom-green hover:border-b-2 border-custom-green">
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className="hover:text-custom-green hover:border-b-2 border-custom-green"  >
            <NavLink to="/contact">Contact</NavLink>
          </li>
          </ul>

          <div className="  ">
          <button className=" text-custom-green px-4 py-1 rounded-full hover:bg   outline">
            Get Started 
          </button>
          </div>
        </div>
    </nav>
    </div>
  );
};

export default Menu;
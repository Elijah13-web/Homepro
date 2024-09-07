import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/icons/Frame 4.png"
import { Link, NavLink } from "react-router-dom";
import Wrapper from "./reasurable/Wrapper";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50  bg-[#F8F3DD]">
      <Wrapper className="bg-hero ">
        <nav className="flex  justify-between items-center md:h-[8rem]">
          <Link to="/" className="flex items-baseline text-primary">
            <img className=" cursor-pointer" src={logo} alt="logo" />
            <b className="text-bold ml-2 font-pacifico"></b>
          </Link>
          <div
            onMouseLeave={onCloseMenu}
            className={`duration-500 md:static absolute top-0 left-80 w-full ${
              menuOpen ? "block top-[100%]  bg-hero" : "hidden top-[12%]"
            } md:flex md:items-center md:w-auto min-h-fit flex-col md:flex-row`}
          >
            <ul className="flex md:flex-row flex-col md:items-center  gap-8 md:gap-5 lg:gap-8 font-bold text-neutral-grey-300  md:pl-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:border-b border-custom-green hover:text-custom-green py-2 transition-all duration-300 ${
                      isActive ? " text-white md:text-black border-b-primary border-b-2" : "text-white md:text-black"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    `hover:border-b border-custom-green hover:text-custom-green py-2 transition-all duration-300 ${
                      isActive ? "text-white md:text-black border-b-primary border-b-2" : "text-white md:text-black"
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listings"
                  className={({ isActive }) =>
                    `hover:border-b border-custom-green hover:text-custom-green py-2 transition-all duration-300 ${
                      isActive ? "text-white md:text-black border-b-primary border-b-2" : "text-white md:text-black"
                    }`
                  }
                >
                  Listings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `hover:border-b border-custom-green hover:text-custom-green py-2 transition-all duration-300 ${
                      isActive ? "text-white md:text-black border-b-primary border-b-2" : "text-white md:text-black"
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:border-b border-b-primary hover:text-custom-green py-2 transition-all duration-300 ${
                      isActive ? "text-white md:text-black border-custom-green border-b-2" : "text-white md:text-black"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              {/* <div className="md:hidden flex gap-5 mb-8">
                <button className="md:block text-custom-green px-4 py-2 rounded-full border border-primary hover:text-secondary hover:bg-primary font-medium text-sm transition-all ease-in-out duration-300">
                  Get Started
                </button>
              </div> */}
            </ul>
          </div>
          <div className="flex items-center">
            <Link to="/register" className="hidden md:block  px-4 py-2 rounded-full border border-custom-green hover:text-custom-green font-medium text-sm">
              Get Started
            </Link>
            <div
              onClick={onToggleMenu}
              className="text-2xl cursor-pointer text-primary md:hidden"
            >
              {menuOpen ? <IoMdClose  className="text-3xl"/> : <GiHamburgerMenu className="text-3xl"/>}
            </div>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Menu;
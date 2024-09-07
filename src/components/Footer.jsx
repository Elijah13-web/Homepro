import React from 'react'
import Wrapper from './reasurable/Wrapper'
import home from "../assets/icons/Vector (5).png"
import pro from "../assets/icons/Homepro.png"
import face from "../assets/icons/logos_facebook.png"
import ig from "../assets/icons/skill-icons_instagram.png"
import x from "../assets/icons/mage_x.png"

const Footer = () => {
  return (
    <div className='bg-[#1F1F1F]'>
      <Wrapper>
        <div className=' flex py-20 gap-8 flex-col lg:flex-row justify-center text-center'>
          <div className='flex-col lg:flex-row justify-center items-center'>
            <div className='flex items-center justify-center'>
              <div className="flex items-baseline">
                <img src={home} alt='home' />
                <img src={pro} alt='pro' />
              </div>
            </div>
            <h1 className='text-[#FFFFFF] text-1xl py-3'>Best place to find properties <br /> that suits your person.</h1>
            <div className='flex gap-4 py-3 items-center justify-center'>
              <img src={face} alt='face' className='bg-[#FFFFFF] py-1 px-1 rounded-full hover:border' />
              <img src={ig} alt='ig' className='bg-[#FFFFFF] py-1 px-1 rounded-full hover:border' />
              <img src={x} alt='x' className='bg-[#FFFFFF] py-1 px-1 rounded-full hover:border' />
            </div>
          </div>
          <div className='text-[#FFFFFF] text-1xl mx-10'>
            <h1>About Us</h1>
            <h1 className='py-4'>Contact Information</h1>
          </div>
          <div className='text-[#FFFFFF] text-1xl mx-10'>
            <h1>Privacy Policy</h1>
            <h1 className='py-4'>Terms of service</h1>
          </div>
          <div className='text-[#FFFFFF] text-1xl font-bold'>
            <h1 className=''>Subscribe to Our Newsletter for latest updates</h1>
            <form action="/submit-email" method="post" className="max-w-[90%] mx-auto py-6">
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className=" flex-1 py-3 px-3 border border-gray-300 text-black rounded-l-xl shadow-sm sm:text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#9FA007] text-white  px-4 border border-transparent rounded-r-xl shadow-sm text-sm font-medium hover:bg-[#8a8b05] focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
      <div className="w-full bg-inherit border-t border-t-slate-400 text-sm">
        <div className="bg-inherit flex flex-col justify-center items-center">
          <p className="text-center text-sm bg-inherit text-slate-300">
            Copyright&copy;2024&nbsp;&nbsp;|&nbsp;&nbsp;All rights reserved.
          </p>
          <small className="text-center text-xs bg-inherit text-slate-400 mt-3">
            Designed by Maryam 
            | Coded by @Elijah
          </small>
        </div>
      </div>






    </div>



  )
}

export default Footer
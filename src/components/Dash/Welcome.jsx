
import React from 'react';
import pana from "../assets/images/pana.png"

const Welcome = () => {
    return (
        <div className="bg-white lg:rounded-3xl shadow-lg w-full h-full  lg:p-1 flex relative overflow-hidden lg:overflow-auto scrollbar-none items-center ">
            <div className="flex flex-col space-y-2 lg:p-1 relative w-[70%]">
                <h1 className="relative text-xl lg:text-2xl font-bold">
                    Welcome Maryam Moyo
                </h1>
                <p className='lg:p-5 text-xl lg:text-start text-center   '>
                    Manage your property searches, saved listings, and more from your personalized dashboard. Whether you're actively looking for or just browsing, we've got everything you need to stay organized and make informed decisions.
                </p>
            </div>
            <div className='w-[30%] '>
                <div>
                  <img src={pana} alt="" className='hidden md:block'/>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
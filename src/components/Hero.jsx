import React from 'react'
import house from "../assets/images/Rectangle 1.png"
import Wrapper from './Wrapper';
const Hero = () => {
    return (
        <div className="w-full bg-[#F8F3DD]">
            <Wrapper>
            <div className='flex justify-between'>
            <div className='w-[45%] py-24 '>
                <h1 className='text-[2.5rem] font-semibold '>Find Your Dream <br />Home Today!</h1>
                <div className='font-[Avenir LT Std] w-[600px] size-[28px] text-2xl h-[40px] text-[#1F1F1F] font-medium  py-6'>Your journey to a new home starts here. <br />Let's find the perfect place for you.</div>
                <div className='py-24 w-[600px]'>
                    <button className=' font-[Avenir LT Std] text-[#FFFFFF] bg-[#9DA008] px-7 py-4 font-medium hover:  rounded-full border text-xl'>Browse Properties </button>
                </div>
            </div>
            <div className=' lg:w-[639px]  top-[21px] radius-[80px] py-10 '>
                <img src={house} alt='house' className='  h-[402px]' />
            </div>
        </div>
            </Wrapper>
        </div>
    )
}

export default Hero;
import React from 'react'
import fam from "../assets/images/Vector (6).png"
import Wrapper from './reasurable/Wrapper'

const Banners = () => {
  return (
       <div className='py-20'>
 <div className=' bg-[#9DA008]'>
        <Wrapper>
        <div className=' flex gap-6 text-[#9DA008] flex-col lg:flex-row justify-center'>
        <img src={fam} alt='fam' className='py-5'/>
    <div className='text-[#FFFFFF] py-24 text-center lg:text-start '>
        <h1 className='font-bold text-4xl'>Ready to Find Your Dream Home?</h1>
        <h1 className='text-xl font-medium py-6'>Start your search today and find the property of your dreams</h1>
        <div className=''>       
          <button className='font-[Avenir LT Std] bg-[#FFFFFF]  text-[#9DA008] text-2xl py-3 px-5  hover:border rounded-full  '>Browse Properties</button>
        </div>
    </div>
    </div>
        </Wrapper>
        </div>

       </div> 
        )
}

export default Banners
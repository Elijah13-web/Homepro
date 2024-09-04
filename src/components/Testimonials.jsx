import React from 'react'
import Wrapper from './Wrapper'
import { TestimonialsDb } from './db'

const Testimonials = () => {
  return (
    <Wrapper>
      <div className='py-5'>
      <h1 className='text-3xl md:text-5xl font-bold py-5 text-center lg:text-start'>Customer Testimonials</h1>
    </div>
    <div className="flex lg:justify-between flex-wrap lg:flex-nowrap gap-16 justify-center py-5 ">
        {TestimonialsDb && TestimonialsDb.map((item, index)=>{
            return (
                <div className='w-[500px] h-[205px] bg-[#9DA00826] rounded-3xl relative' key={index}>
                    <div className=' absolute -top-10 left-40'>
                    <img src={item.image} alt="icon1" className=' w-24 h-24'/>  
                    </div>
                    <div className='py-20 text-center '>
                        <p className='text-sm font-semibold px-4'>{item.description}</p>
                        <h1 className='text-sm font-bold py-5'>{item.title}</h1>
                    </div>
                </div>
            )
        })}
        </div>
    </Wrapper>
  )
}

export default Testimonials
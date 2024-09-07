import React from 'react'
import Wrapper from './reasurable/Wrapper'
import { agentsDb } from './db'
import bg from "../assets/icons/Line 6.png"



const Agents = () => {
  return (
    <Wrapper>
        <div className="md:bg-cover md:bg-no-repeat" style={{ backgroundImage: `url(${bg})`}}>    
        <div className='bg-transparent'>
            <h1 className='text-3xl text-center lg:text-start md:text-4xl font-bold py-8'>Meet Our Agents</h1>
        </div>
        <div className="flex justify-center items-center md:justify-around lg:justify-between flex-wrap lg:flex-nowrap gap-4 text-center">
        {agentsDb && agentsDb.map((item, index)=>{
            return (
                <div className='flex flex-col items-center justify-center lg:text-start w-full bg-transparent' key={index}>
                    <div className='flex items-center justify-center mt-2 md:mt-0 w-24 md:w-full bg-transparent'>
                        <img src={item.image} alt="icon1" className=' bg-transparent' />
                    </div>
                    <div className='py-4 text-center bg-transparent'>
                        <h2 className='text-2xl font-bold bg-transparent'>{item.title}</h2>
                        <p className='text-2xl font-bold bg-transparent'>{item.description}</p>
                        <h2 className='text-2xl font-bold bg-transparent'>{item.number}</h2>
                        
                    </div>
                </div>
            )
        })}
        </div>
        </div>
    </Wrapper>
  )
}

export default Agents
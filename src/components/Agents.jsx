import React from 'react'
import Wrapper from '../components/Wrapper'
import { agentsDb } from './db'


const Agents = () => {
  return (
    <Wrapper>
        <div>
            <h1 className='text-3xl md:text-5xl font-bold py-10 text-center  lg:text-start'>Meet Our Agents</h1>
        </div>
        <div className="flex justify-center items-center md:justify-around lg:justify-between flex-wrap lg:flex-nowrap gap-4 text-center">
        {agentsDb && agentsDb.map((item, index)=>{
            return (
                <div className='w-[300px] py-4' key={index}>
                    <div className=' flex flex-col justify-center'>
                        <img src={item.image} alt="icon1" className='' />
                    </div>
                    <div className='py-4'>
                        <h2 className='text-4xl font-semibold py-2 px-5'>{item.title}</h2>
                        <p className='text-xl font-semibold '>{item.description}</p>
                        <h2 className='text-2xl font-semibold py-2'>{item.number}</h2>
                        
                    </div>
                </div>
            )
        })}
        </div>
    </Wrapper>
  )
}

export default Agents
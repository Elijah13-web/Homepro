import React from 'react'
import Wrapper from './Wrapper'
import icon1 from '../assets/icons/Frame 71.png'
import { howitworksDb } from './db'

const Howitworks = () => {
  return (
    <Wrapper>
        <div>
            <h1 className='text-4xl font-bold py-8'>How It Works</h1>
        </div>
        <div className="flex justify-around lg:justify-between flex-wrap lg:flex-nowrap gap-4">
        {howitworksDb && howitworksDb.map((item, index)=>{
            return (
                <div className='w-[300px]' key={index}>
                    <div className=''>
                        <img src={item.icon} alt="icon1" className='' />
                    </div>
                    <div className='py-4'>
                        <h2 className='text-2xl font-semibold py-2'>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
            )
        })}
        </div>
    </Wrapper>
  )
}
export default Howitworks
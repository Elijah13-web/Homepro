import React from 'react'
import { listingsDb } from './db'
import Wrapper from '../components/Wrapper'
import PropertyCard from '../components/cards/PropertyCard'

const Listings = () => {
  return (
        <Wrapper className="">
      <h1 className='text-4xl font-bold py-8'>Our Listings</h1>
      <div className='flex md:justify-around lg:justify-between flex-wrap md:gap-8 lg:gap-4'>
      { listingsDb && listingsDb.length > 0 && listingsDb.map((property)=>{
        return(
          <div className="" key={property._id}>
            <PropertyCard {...property} key={property._id}/>
          </div>
        )

      })

      }
        
    </div>
    </Wrapper>
  )
}

export default Listings
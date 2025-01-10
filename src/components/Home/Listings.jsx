import React from 'react'
import { listingsDb } from "../../components/db"
import Wrapper from "../../components/reasurable/Wrapper"
import PropertyCard from "../../components/cards/PropertyCard"

const Listings = () => {
  return (
        <Wrapper className="">
      <h1 className=' text-3xl md:text-5xl font-bold py-10 text-center  lg:text-start'>Our Listings</h1>
      <div className='md:justify-around lg:justify-between grid lg:grid-cols-3 md:grid-cols-2 md:gap-8 lg:gap-10'>
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
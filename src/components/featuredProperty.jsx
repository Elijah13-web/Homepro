import React from 'react'
import { featureDb } from './db'
import PropertyCard from '../components/cards/PropertyCard';
import Wrapper from '../components/Wrapper';

const FeaturedProperty = () => {
  return (
    <Wrapper className="">
      <h1 className='text-5xl font-bold py-10'>Featured Properties</h1>
      <div className='flex justify-between flex-wrap gap-4'>
      { featureDb && featureDb.length > 0 && featureDb.map((property)=>{
        return(
          <div className=""key={property._id}>
            <PropertyCard {...property} key={property._id}/>
          </div>
        )

      })

      }
        
    </div>
    </Wrapper>
  )
}

export default FeaturedProperty
import React from 'react'
import { SectionDb } from './db'
import PropertyCard from './cards/PropertyCard'

const Section = () => {
  return (
    <div className=''>
        <div className='w-full grid grid-cols-2 gap-8 min-h-[100vh]'>
      { SectionDb && SectionDb.length > 0 && SectionDb.map((property)=>{
        return(
          <div className=""key={property._id}>
            <PropertyCard {...property} key={property._id}/>
          </div>
        )

      })

      }
        
    </div>
    </div>
  )
}

export default Section
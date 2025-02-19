import React from 'react'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotrun'
import Properites from "../components/Listing/Properites"
import { Pagination } from '../components/Pagination'

const Listings = () => {
  return (
    <div className='mx-auto container'>
     <div className='md:pt-32 pt-10 '>
     <Jumbotron title="Find the Best Properties" description="Discover a wide range of exclusive properties tailored to your unique preferences."/>
     </div>
      <Properites/>
      <Pagination/>
      <Footer/>
    </div>
  )
}

export default Listings
import React from 'react'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotrun'
import Properites from '../components/Properites'
import { Pagination } from '../components/Pagination'

const Listings = () => {
  return (
    <div>
      <Jumbotron title="Find the Best Properties" description="Discover a wide range of exclusive properties tailored to your unique preferences."/>
      <Properites/>
      <Pagination/>
      <Footer/>
    </div>
  )
}

export default Listings
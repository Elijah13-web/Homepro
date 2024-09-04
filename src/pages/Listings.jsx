import React from 'react'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotrun'
import Properites from '../components/Properites'

const Listings = () => {
  return (
    <div>
      <Jumbotron title="Find the Best Properties" description="Discover a wide range of exclusive properties tailored to your unique preferences."/>
      <Properites/>
    </div>
  )
}

export default Listings
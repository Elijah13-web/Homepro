import React from 'react'
import Hero from '../components/Hero'
import FeaturedProperty from '../components/featuredProperty'
import Howitworks from '../components/Howitworks'
import Listings from '../components/Listings'


const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProperty/>
      <Howitworks/>
      <Listings/>
    </div>
  )
}

export default Home
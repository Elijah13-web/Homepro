import React from 'react'
import Hero from '../components/Hero'
import FeaturedProperty from '../components/featuredProperty'
import Howitworks from '../components/Howitworks'
import Listings from '../components/Listings'
import Agents from '../components/Agents'
import LastestNews from '../components/lastestNews'
import Testimonials from '../components/Testimonials'
import Banners from '../components/Banners'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProperty/>
      <Howitworks/>
      <Listings/>
      <Agents/>
      <LastestNews/>
      <Testimonials/>
      <Banners/>
      <Footer/>
    </div>
  )
}

export default Home
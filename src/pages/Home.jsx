import React from 'react'
import Hero from '../components/Home/Hero'
import FeaturedProperty from '../components/Home/featuredProperty'
import Howitworks from '../components/Home/Howitworks'
import Listings from "../components/Home/Listings"
import Agents from '../components/Home/Agents'
import LastestNews from '../components/Home/lastestNews'
import Testimonials from '../components/Home/Testimonials'
import Banners from "../components/Home/Banners"
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
     <div className="md:mt-32 mt-14">
     <Hero/>
     </div>
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
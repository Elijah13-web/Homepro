import React from 'react'
import HeroAbout from '../components/About/heroAbout'
import WhoweAre from '../components/About/whoweAre'
import OurStory from '../components/About/ourStory'
import OurMission from '../components/About/ourMission'
import OurValues from '../components/About/ourValues'
import TheTeam from '../components/About/theTeam'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div className=' mx-auto container'>
      <div className='md:pt-32 pt-10'>
      <HeroAbout/>
      </div>
      <WhoweAre/>
      <OurStory/>
      <OurMission/>
      <OurValues/>
      <TheTeam/>
      <Footer/>
    </div>
  )
}

export default AboutUs
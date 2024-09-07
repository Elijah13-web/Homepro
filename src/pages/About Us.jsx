import React from 'react'
import WhoweAre from '../components/whoweAre'
import Footer from '../components/Footer'
import HeroAbout from '../components/heroAbout'
import OurStory from '../components/ourStory'
import OurMission from '../components/ourMission'
import OurValues from '../components/ourValues'
import TheTeam from '../components/theTeam'

const AboutUs = () => {
  return (
    <div>
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
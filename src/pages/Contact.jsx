import React from 'react'
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotrun'

const Contact = () => {
  return (
    <div>
      <div className='md:pt-32 pt-10'>
      <Jumbotron title="Have any Questions?" description="We are available, contact us"/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;
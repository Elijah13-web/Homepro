import React from 'react'
import Wrapper from '../components/Wrapper'
import Section from '../components/Section'
import SectionB from '../components/sectionB'


const Properites = () => {
  return (
    <Wrapper>
      <div className='grid lg:grid-cols-3 gap-10 py-14'>
        <div className="border border-slate-200 rounded-2xl p-4">
        <SectionB />
        </div>
       <div className="md:col-span-2">
       <Section />
       </div>
      </div>
    </Wrapper>
  )
}

export default Properites
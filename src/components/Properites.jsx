import React from 'react'
import Wrapper from './reasurable/Wrapper'
import Section from '../components/Section'
import SectionB from '../components/sectionB'


const Properites = () => {
  return (
    <Wrapper>
      <div className='grid lg:grid-cols-3 gap-10 py-14'>
        <div className="w-full overflow-x-hidden border border-slate-200 rounded-2xl">
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
import React from 'react'
import Section from "../../components/Listing/Section"
import SectionB from "../../components/Listing/sectionB"
import Wrapper from "../reasurable/Wrapper"


const Properites = () => {
  return (
    <Wrapper>
      <div className='grid lg:grid-cols-3 gap-10 py-14 w-full overflow-hidden'>
        <div className=" border border-slate-200 rounded-2xl">
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
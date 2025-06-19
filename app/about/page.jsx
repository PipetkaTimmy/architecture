import React from 'react'
import DescAbout from '@/components/About/DescAbout'
import AboutComponent from '@/components/About/AboutComponent'
import Advantages from '@/components/About/Advantages'
import MissonAbout from '@/components/About/MissonAbout'

const page = () => {
  return (
    <div>
      <section className="hero2Section">
        <div className="heroComponents containerCustom">
          <DescAbout />
        </div>
      </section>
      <div className="containerCustom p-21">
        <AboutComponent />
        <Advantages/>
        <MissonAbout/>
      </div>
    </div>
  )
}

export default page
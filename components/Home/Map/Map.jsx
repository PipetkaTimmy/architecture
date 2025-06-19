import React from 'react'
import InteractiveMap from './InteractiveMap'
import MapDesc from './MapDesc'

const Map = () => {
  return (
    <section className='containerCustom p-21'>
      <div className='map'>
        <InteractiveMap/>
        <MapDesc/>
      </div>
    </section>
  )
}

export default Map
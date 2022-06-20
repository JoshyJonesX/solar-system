import React from 'react'
import Planet from './Planet'
import planets from '../API/planets'

const Planets = () => {
  return (
    <div className='planets--container'>
      {planets.map((planet) => (
        <div className='planets--planet'>
          <Planet key={planet.diameter} />
        </div>
      ))}
    </div>
  )
}

export default Planets

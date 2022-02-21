import React from 'react'
import CardAuto from './CardAuto'

function Autos() {
  return (
    <div className='autos'>
        <div className="autos-content container">
          <header className='header-autos'>
            <div className='title-autos'>
              <h2 className='title-section'>Nuestros Autos</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className='btn-viewall' >Ver todos</button>
          </header>

          <div className='cards-autos'>
            <CardAuto />
            <CardAuto />
            <CardAuto />
          </div>

        </div>
    </div>
  )
}

export default Autos
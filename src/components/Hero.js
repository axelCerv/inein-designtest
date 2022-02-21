import React from 'react'
import car1 from '../img/car-1.png'

function Hero() {
  return (
    <div className='Hero'>
        <div className='hero-content container'>
            <div className='hero-head'>
                <div className='head'>
                    <h1 className='hero-title'>Renta el auto<br /> perfecto para tí </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt debitis mollitia fugit saepe commodi eius?</p>
                </div>
                <div className='car'>
                    <img src={car1} alt="car" />
                </div>
            </div>
            <div className='book-car'>
                <div className='inp'>
                    <label htmlFor="">Lugar de recolección:</label>
                    <input type="text" name="" id="" className='inp-book lugar' placeholder='Escriba la dirección'/>
                </div>
                <div className='fechas'>
                    <div className='inp fecha-in'>
                        <label htmlFor="">Fecha de Recolección:</label>
                        <span className='label-date'>
                            <input type="date" name="" id="" className='inp-book'/>
                            <input type="time" name="" id="" className='inp-book'/>
                        </span>
                    </div>
                    <div className='inp fecha-out'>
                        <label htmlFor="">Fecha de devolución:</label>
                        <span className='label-date'>
                            <input type="date" name="" id="" className='inp-book'/>
                            <input type="time" name="" id="" className='inp-book'/>
                        </span>
                    </div>
                </div>
                <div className='search-book'>
                    <button className='search-btn' >Buscar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
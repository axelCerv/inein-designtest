import React from 'react'
import car from '../img/car-card.jpg'

function CardAuto() {
  return (
    <div className='card-auto'>
        <div className='imagen-auto'>
            <span className='calificacion'>
                <box-icon name='star' type='solid' color='var(--primary-color)' ></box-icon>
                4.9 
            </span>
            <img src={car} alt="" />
        </div>

        <div className='info-card'>
            <header className='head-info'>
                <p className='title-car'>Mazda 3</p>
                <p className="details-car">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </header>
            <div className='data-card'>
                <span className='price-data'>
                    <p className='price'>$234</p>
                    <p className='tag-price'>/por día</p>
                </span>
                <button className='btn-reservar'>Reservar</button>
            </div>
        </div>
    </div>
  )
}

export default CardAuto
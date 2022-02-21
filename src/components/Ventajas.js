import React from 'react'

function Ventajas() {
  return (
    <div className='ventajas' >
        <div className='ventajas-content container'>
            <div className='item-ventajas'>
                <span className='icon-ventajas'>
                    <box-icon type='solid' name='car-mechanic'  size="60px" color="var(--primary-color)" ></box-icon>
                </span>
                <p className='text-ventajas'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aspernatur ipsa voluptatibus! Ipsa, expedita dolore.
                </p>
            </div>
            <div className='item-ventajas'>
                <span className='icon-ventajas'>
                    <box-icon name='ev-station' type='solid' size="60px" color="var(--primary-color)" ></box-icon>
                </span>
                <p className='text-ventajas'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aspernatur ipsa voluptatibus! Ipsa, expedita dolore.
                </p>
            </div>
            <div className='item-ventajas'>
                <span className='icon-ventajas'>
                    <box-icon name='trip' size="60px" color="var(--primary-color)"  ></box-icon>
                </span>
                <p className='text-ventajas'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aspernatur ipsa voluptatibus! Ipsa, expedita dolore.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Ventajas
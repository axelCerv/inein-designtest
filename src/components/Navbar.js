import React, { useState } from 'react'

function Navbar() {

    const [activeMenu, setActiveMenu] = useState(false)

  return (
    <div className='navbar'>
        <nav className='nav-content container'>
            <div className='logo-search'>
                <span className='logo'>
                    <box-icon name='car-garage' type='solid' color='var(--primary-dark)'></box-icon>
                    RENTCAR 
                </span>
                <div className='searchBar'>
                    <span className='search-icon'>
                        <box-icon name='search-alt' color='#b7b7b7' size='20px' ></box-icon>
                    </span>
                    <input type="text" name="" id="" className='search' placeholder='Buscar' />
                </div>
            </div>
            <div className={activeMenu ? 'links active' : 'links'}>
                <div className='close-btn' onClick={()=>setActiveMenu(!activeMenu)} >
                    <box-icon name='x' color='var(--primary-color)' size='40px'></box-icon>
                </div>
                <a href="">Autos</a>
                <a href="">Rentar</a>
                <a href="">Sobre Nosotros</a>
                <p className='rastrear'>
                    <box-icon name='car' color='#00a4d6'></box-icon>
                    Rastrear
                </p>
            </div>
            <div className='menu-btn'  onClick={()=>setActiveMenu(!activeMenu)} >
                <box-icon name='menu' color='var(--primary-color)' size='30px' ></box-icon>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
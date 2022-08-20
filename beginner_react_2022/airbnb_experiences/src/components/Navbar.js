import React from 'react'
import airbnb_logo from '../img/airbnb_logo.svg'

const Navbar = () => {
  return (
    <nav className='px-6 py-4 shadow-md flex'>
        <img src={airbnb_logo} alt="AirBnB logo" className='h-6' />
    </nav>
  )
}

export default Navbar
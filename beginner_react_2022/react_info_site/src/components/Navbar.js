import React from 'react'
import logo from '../logo.svg'

const Navbar = () => {
    return (
        <nav className='p-4 flex items-center w-full bg-zinc-900 text-white'>
            <img src={logo} alt="React logo" className='w-16' />
            <h3 className='text-cyan-400'>ReactFacts</h3>
            <p className='ml-auto font-semibold'>React Course - Project 1</p>
        </nav>
    )
}

export default Navbar
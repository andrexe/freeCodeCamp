import React from 'react'
import trollface from '../img/trollface.png'

const Header = () => {
  return (
    <header className='flex items-center gap-2 w-full p-4 text-white bg-gradient-to-r from-purple-900 to-purple-600'>
      <img src={trollface} alt="" className='w-8' />
      <h2 className='font-bold text-xl'>MemeGenerator</h2>
      <h4 className='ml-auto'>React Course - Project 3</h4>
    </header>
  )
}

export default Header
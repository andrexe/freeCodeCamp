import { useState } from 'react'
import Header from './components/Header.jsx'
import Meme from './components/Meme.jsx'

function App() {

  return (
    <div>
      <Header />
      <Meme />
      <h1 className='font-bold text-4xl'>Hello world</h1>
    </div>
  )
}

export default App

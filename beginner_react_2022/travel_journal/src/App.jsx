import { useState } from 'react'
import Card from './components/card'
import data from './data'

function App() {
  const cards = data.map(item => {
    return <Card
      {...item}
    />
  })

  return (
    <div className='p-6 flex flex-col gap-10'>
      {cards}
    </div>
  )
}

export default App

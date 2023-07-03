import React from 'react'
import memesData from '../memesData.js'

const Meme = () => {

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        console.log(url);

    }

    return (
        <main className='p-4 max-w-lg mx-auto'>
            <div action="" className='grid grid-cols-2 gap-4'>
                <input type="text" className='p-2 border-2 rounded-md col-span-1' placeholder='TOP TEXT' />
                <input type="text" className='p-2 border-2 rounded-md col-span-1' placeholder='BOTTOM TEXT' />
                <button onClick={getMemeImage} className='px-4 py-2 bg-gradient-to-r from-purple-900 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white rounded-md col-span-2'>Get a new meme image 🖼️</button>
            </div>
        </main>
    )
}

export default Meme
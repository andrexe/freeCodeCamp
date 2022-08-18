import React from 'react'

const Main = () => {
    return (
        <main className='h-full px-8 py-16 bg-zinc-800 text-white bg-react'>
            <h1 className='tracking-tighter'>Fun facts about React</h1>
            <ul className='list-disc list-outside px-6 mt-8 child:py-2 marker:text-cyan-400 marker:text-2xl'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default Main
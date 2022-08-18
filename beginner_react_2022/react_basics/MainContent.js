import React from 'react'

const MainContent = () => {
    return (
        <main className="container mx-auto px-4 flex flex-col gap-4">
            <h1 className="font-bold text-4xl">Fun facts about React</h1>
            <ol>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ol>
        </main>
    )
}

export default MainContent
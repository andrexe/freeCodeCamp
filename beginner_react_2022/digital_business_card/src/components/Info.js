import React from 'react'
import Andrei from '../img/andrei.jpg'
import email_icon from '../img/mail_icon.png'

const Info = () => {
    return (
        <section className='max-w-sm text-center mx-auto'>
            <img src={Andrei} alt="Andrei Alexe - frontend developer" className='w-full rounded-t-xl' />
            <section className='bg-gray-200 dark:bg-gray-800 dark:text-white p-10'>
                <h1>Andrei Alexe</h1>
                <p className="text-orange-600 dark:text-orange-300">Frontend Developer</p>
                <a href='https://andrei.click' className='underline'>andrei.click</a>
                <a href='#' className='flex items-center gap-2 w-full bg-white text-black justify-center mt-8 py-2 rounded-md border border-gray-400'><img src={email_icon} alt="mail" />Email</a>
            </section>
        </section>
    )
}

export default Info
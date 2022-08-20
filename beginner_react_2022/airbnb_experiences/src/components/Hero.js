import React from 'react'
import hero_image from '../img/photo_grid.png'

const Hero = () => {
    return (
        <section className='prose mx-auto p-6'>
            <img src={hero_image} alt="Experiences available on AirBnB" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}

export default Hero
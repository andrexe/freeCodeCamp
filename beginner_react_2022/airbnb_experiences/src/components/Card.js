import React from 'react'
import star from '../img/star.png'

const Card = (props) => {
    return (
        <section className='w-44 flex flex-col text-sm gap-1'>
            <small className='absolute bg-white py-1 px-2 rounded-sm mt-1 ml-1'>SOLD OUT</small>
            <img src={props.img} alt="" className='rounded-lg object-cover max-h-60'  />
            <div className="flex items-baseline gap-1">
                <img src={star} alt="" />
                <p className=''>{props.rating} <span className='text-zinc-500'>(6)</span></p>
                <p className='text-zinc-500'> &#9679; USA</p>
            </div>
            <h2 className=''>{props.title}</h2>
            <p><span className='font-bold'>From ${props.price}</span> / person</p>
        </section>
    )
}

export default Card
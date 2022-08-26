import React from 'react'
import star from '../img/star.png'

const Card = (props) => {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }

    return (
        <section className='shrink-0 w-44 flex flex-col text-sm gap-1'>
            {badgeText && <small className='absolute bg-white py-1 px-2 rounded-sm mt-1 ml-1 whitespace-nowrap font-bold'>{badgeText}</small>}
            <img src={props.img} alt="" className='rounded-lg object-cover max-h-60' />
            <div className="flex items-baseline gap-1">
                <img src={star} alt="" />
                <p className=''>{props.rating} <span className='text-zinc-500'>(6)</span></p>
                <p className='text-zinc-500'> &#9679; {props.location}</p>
            </div>
            <h2 className=''>{props.title}</h2>
            <p><span className='font-bold'>From ${props.price}</span> / person</p>
        </section>
    )
}

export default Card
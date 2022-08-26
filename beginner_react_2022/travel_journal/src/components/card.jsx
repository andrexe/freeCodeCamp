import React from 'react'
import pin from '../img/pin.png'

const card = (props) => {
    return (
        <section className='max-w-xl flex flex-col sm:flex-row mx-auto'>
            <img className='rounded-lg object-cover aspect-[2/1] sm:aspect-[11/16] sm:max-h-60' src={props.imageUrl} alt="" />
            <section className='flex flex-col gap-1 pt-2 sm:px-6'>
                <div className='flex gap-2 items-center'>
                    <img src={pin} alt="" className='w-3' />
                    <small className='uppercase tracking-widest'>{props.location}</small>
                    <a className='text-sm underline text-gray-500' target="_blank" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className='font-bold text-3xl pb-2'>{props.title}</h2>
                <small className='font-bold'>{props.startDate} - {props.endDate}</small>
                <p>{props.description}</p>
            </section>
        </section>
    )
}

export default card
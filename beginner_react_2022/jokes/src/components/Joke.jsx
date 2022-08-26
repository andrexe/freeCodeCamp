import React from 'react'

const Joke = (props) => {
    // console.log(props);
    return (
        <section>
            <details open>
                <summary className='text-2xl font-bold'>{props.setup ? props.setup : props.punchline}</summary>
                {props.setup && <p className='text-xl'>{props.punchline}</p>}
            </details>
            <section className='p-2'>
                <h3 className='text-lg'>Comments</h3>
                {props.comments.map(comment => {
                    console.log(comment.title);
                    return <section className='p-2'>
                        <small>{comment.author}</small>
                        <h5 className='font-bold'>{comment.title}</h5>
                        <p>{comment.body}</p>
                    </section>
                })}
            </section>
        </section>
    )
}

export default Joke
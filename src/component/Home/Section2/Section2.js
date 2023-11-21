import React from 'react'
import './Section2.css'
import { Link } from 'react-router-dom'

const Section2 = () => {
    return (
        <section className='ingredients'>
            <div className='container'>
                <h2>We make everything by hand whith the best possible ingredients</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi cum beatae vel laudantium enim nulla velit eligendi non culpa.</p>
                <ul>
                    <li>dolor as diam volutpat</li>
                    <li> Erat volutpat aliquet imperdiet</li>
                    <li> Purus a odio finibus bibnedom</li>
                </ul>
                <button className='btn bm' ><Link to='/review'> Learn More </Link></button>
            </div>
        </section >
    )
}

export default Section2

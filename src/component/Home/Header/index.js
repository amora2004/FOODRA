import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const index = () => {
    return (
        <header>
            <div className='Container'>
                <div className='row align-items-center'>
                    <div className='col-md-8 lift'>
                        <h2>Good food choises are good investments</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa repellendus quos!</p>
                        <div className='d-flex gap-5 justify-content-center'>
                            <button className='btn' ><Link to='/about'> Learn More </Link></button>
                            <button className='btn lm'><Link to='/food'> Order Now</Link></button>
                        </div>
                    </div>
                    <div className='col-md-4 right'></div>
                </div>
            </div>
        </header>
    )
}

export default index

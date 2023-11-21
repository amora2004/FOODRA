import React from 'react'
import Slider from '../Home/Slider/Slider'
import './About.css'
const About = () => {
    return (
        <div className='about '>
            <div className='text '>
                <h3>Our EcoSystem</h3>

                <p>
                    foodora operates across Austria, Czechia, Denmark, Finland, Hungary, Norway, Slovakia and Sweden, together with a wide range of restaurants, partners, and riders united behind our shared mission to always deliver an amazing, fast and affordable experience that gives people more time to focus on what matters most to them.
                    We’re committed to making a difference in our community, and we can’t do it alone. That’s why we’re committed to growing alongside our ecosystem – from our partners to our riders and customers, to the teams who make all of this happen.
                </p>
            </div>
            <Slider />
        </div>
    )
}

export default About

import React from 'react'
import "./Section.css"
import image from '../../../assets/pngtree-delicious-pizza-creative-photography-png-image_6687083.png'
const Section = () => {
    return (
        <div>
            <section className='pride'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img src={image} />
                        </div>
                        <div className='col-lg-6 '>
                            <div className='text'>
                                <h2>We pride our selves on making reel food from the best ingredients</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi cum beatae vel laudantium enim nulla velit eligendi non culpa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section

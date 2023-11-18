import React from 'react'
import "./Reniew.css"
import image from '../../assets/Result (4).PNG'
const Review = () => {
    return (
        <div className='review'>
            <div className='row'>
                <div className='col-lg-6 img'>
                    <div className='sq1'></div>
                    <div className='sq2'><img src={image} /></div>
                </div>
                <div className='col-lg-6 txt' >
                    <h1>Reviews</h1>
                    <span>,,,</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius in adipisci aliquam natus quam recusandae culpa? Sunt, esse impedit! Eum, aliquid ex sed natus ab consectetur nobis dolorem repellendus.</p>
                </div>
            </div>
        </div>
    )
}

export default Review

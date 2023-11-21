import React from 'react'
import './Footer.css'
import { IconName } from "react-icons/fa6";
import { FaSquareFacebook, FaSquareInstagram, FaSquarePhone, FaSquareTwitter, FaSquareWhatsapp } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='text'>
                <ul>
                    <li><a href='/register'>Register</a></li>
                    <li><a href='/forum'>Forum</a></li>
                    <li><a href='/affiliate'>Affiliate</a></li>
                    <li><a href='/faq'>FAQ</a></li>

                </ul>
            </div>
            <ul className='social'>
                <li><FaSquareFacebook /></li>
                <li><FaSquareInstagram /></li>
                <li><FaSquarePhone /></li>
                <li><FaSquareTwitter /></li>
                <li><FaSquareWhatsapp /></li>
            </ul>
            <p> &copy 2023.<span>Foodra</span> .All rights reserved  </p>
        </div>

    )
}

export default Footer

import { useDispatch } from "react-redux"
import "./Card.css"
import React from 'react'
import { addToCart } from "../../../../Redux/cartReducer"

const Card = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="fa">
            <div className='box'>                <img src={props.image} />
                <h4> {props.title}</h4>
                <span> {props.time} </span>
                <h5> {props.price}</h5>
                <button className='btn bt' onClick={() => dispatch(addToCart(
                    {
                        id: props.id,
                        title: props.title,
                        image: props.image,
                        price: props.price,
                        count: props.count,
                    }
                ))} >Order Now</button>
            </div>
        </div>
    )
}

export default Card

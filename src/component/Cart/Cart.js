import { useEffect, useState } from 'react';
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { FaShopify } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { removeCart, resetCart } from '../../Redux/cartReducer';
const Cart = () => {


    const [cartList, setCartList] = useState(false)

    const showCartList = () => {
        cartList ? setCartList(false) : setCartList(true)
    }

    const products = useSelector(state => state.cart.products)

    useEffect(() => products.length > 0 ? setCartList(true) : setCartList(false), [products.length])

    const dispatch = useDispatch()

    return (
        <div>
            <div className='cart'>
                <div className=''>
                    <div className='cart-icon'
                        onClick={showCartList}>
                        <FaShopify />
                    </div>
                    <div className='cart-badge'>{products.length}</div>
                </div>
                {cartList
                    ? (
                        <ul className='cart-list'>
                            {products.map(product => (
                                <li className='cart-item'>
                                    <span className='cart-item-count' ><span className='num' >N:</span>{product.count}</span>
                                    <img className='cart-item-image' src={product.image} />
                                    <span className='cart-item-title'>{product.title}</span>
                                    <span className='cart-item-price'>{product.price}</span>
                                    <span className='cart-item-remove'
                                        onClick={() => dispatch(removeCart({
                                            title: product.title,
                                        }))}
                                    ><FaTrash className='shape' /></span>
                                </li>
                            ))}
                            <li className='removeList'
                                onClick={() => dispatch(resetCart())}
                            ><span className='remove-icon'><FaArrowRotateRight /></span></li>
                        </ul>
                    )
                    : ('')
                }

            </div >
        </div >
    )
}

export default Cart

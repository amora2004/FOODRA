import React from 'react'
import './Cards.css'
import Data from '../../../Data/DataCard'
import Card from './Card/Card'

const Cards = () => {
    const blogitem = Data.map((item) => {

        return (
            <div className="col-lg-4 item">
                <Card image={item.img} title={item.title} time={item.time} price={item.price} />
            </div>
        )
    })
    return (
        <section className='blogs'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2>Explore Our Foods</h2>
                        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit dolores ea, exercitationem praesentium eos libero debitis fugiat reiciendis mollitia, temporibus, adipisci accusantium? Omnis laborum praesentium assumenda ipsam nostrum consectetur</p>
                    </div>
                </div>
                <div className='row'>
                    {blogitem}
                </div>
            </div>
        </section>
    )
}

export default Cards

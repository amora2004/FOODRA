import React from 'react'
import DataFood from '../../../Data/AllFood'
import Card from "../../Home/Cards/Card/Card"

const List = (props) => {
    let items = DataFood.filter(item => (item.type === props.type))
    const list = items.map((item) => {
        return (
            <div className="col-md-6 ">
                <Card className="cd" image={item.img} title={item.title} time={item.time} price={item.price} />
            </div>
        )
    })


    return (

        <div className='row'>
            {list}

        </div>

    )
}

export default List

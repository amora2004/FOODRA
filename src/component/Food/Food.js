import React from 'react'
import './Food.css'

import List from './LIst/List'
import Cart from '../Cart/Cart'

const Food = () => {

  return (
    <>
      <Cart />
      <div className='pg'>
        <div className='items1'>
          <h3>Sandwiches</h3>
          <List type="Sandwiches" />
        </div>
        <div className='items2'>
          <h3>Burgers</h3>
          <List type='Burgers' />
        </div>
        <div className='items1'>
          <h3>Pizza</h3>
          <List type='Pizza' />
        </div>
      </div>
    </>
  )
}

export default Food

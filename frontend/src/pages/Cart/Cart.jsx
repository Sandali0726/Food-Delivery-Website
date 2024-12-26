import { StoreContext } from '../../context/StoreContext'
import './Cart.css'
import React, { useContext, useState } from 'react'

function Cart() {
  const{food_list,
          cartItems,
          removeFromCart} = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="class-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>

        </div>
        <br />
        <hr />
      </div>
      
    </div>
  )
}

export default Cart

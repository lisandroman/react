import React from 'react';
import { Link } from 'react-router-dom';
import cartLogo from '../../assets/bag.png'
import { useCartContext } from '../context/CartContext';

export const CartWidget = () => {
  const { cart, cartLength } = useCartContext();

  return (
    <>
      <Link to='/cart'>
        <img src={ cartLogo } className="bag" alt="Shopping Bag"/>
        {cart.length !== 0 && <span className="cartNumber"> { cartLength } </span> }
      </Link>
    </>
  )
}




    

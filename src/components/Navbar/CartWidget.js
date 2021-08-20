import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { StyledCartWidget } from './CartWidgetStyles';
import cartLogo from '../../assets/bag.png'

export const CartWidget = () => {
  const { cart, cartLength } = useCartContext();

  return (
    <StyledCartWidget>
      { cart.length !== 0 &&
        <Link to='/cart'>
          <img src={ cartLogo } alt="Shopping Bag"/>
          <span className="bgCartLength text-center">{ cartLength }</span> 
        </Link>
      }
    </StyledCartWidget>
  )
}




    

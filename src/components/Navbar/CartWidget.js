import React from 'react';
import cartLogo from '../../assets/bag.png'
import { useCartContext } from '../context/CartContext';

export const CartWidget = () => {
  const { cart } = useCartContext();
  const cartLength = cart.reduce((acc, item) => { return acc + item.quantity}, 0 )
  console.log('Carrito en CartWidget:',cart)
  console.log('Cant de Articulos en carrito:',cartLength)
  /// Revisar {cart} en caso que no llegue la info

  return (
    <>
      {cartLength !== 0 &&
        <div>
          <img src={ cartLogo } className="bag" alt="Shopping Bag"/>
          <span className="cartNumber">{'' + cartLength }</span>
        </div>
      }
    </>
  )
}


  


    

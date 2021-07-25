import React from 'react'
import { Redirect } from 'react-router';
import { useCartContext } from '../context/CartContext';

export const Cart = () => {
  const { cart, clearCart } = useCartContext();

  //Si cart está vacío, voy al inicio.
  if (!cart.length) return <Redirect to='/' />;

  return (
    <div className="container mt-5">
      {cart.map((item) => (
        <p key={item.id}><strong>Artículo en Carrito:</strong> {item.title} - <strong>Cantidad:</strong> {item.quantity}</p>
        ))}
        <hr />
      <button className="btn btn-sm btn-danger" onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

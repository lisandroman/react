import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Buttons, CardCart } from './CartStyles';

export const Cart = () => {
  const { clearCart, removeItemFromCart } = useContext(CartContext);
  const cartContent = useContext(CartContext).cart;
 
   //Si cart tiene contenido lo muestro. Sino muestro "No hay items agregados" y ofrezco volver a Home
  return (
    <>
      {cartContent.length > 0
        ? <div className="container mt-5">
            <h2> Articulos en Carrito:</h2>
            <hr />
            <div className="row row-cols-1 row-cols-md-5">
              {cartContent.map((item) => (
                <div className="col" key={ item.id }>
                  <CardCart>
                    <div className="card">
                      <div className="card-header"><strong>{ item.title }</strong> - Precio: ${ item.price }</div>
                      <img src={ item.pictureUrl } alt={ item.alt } />
                      <div className="card-body">
                        <p className="card-text">Cantidad: { item.quantity }</p>
                        <p className="card-text">Subtotal: ${ item.price * item.quantity }</p>
                        <span
                          className="btn btn-sm btn-dark bi bi-cart-x"
                          onClick={ () => removeItemFromCart(item.id) }>
                            Remover
                        </span>
                      </div>
                    </div>
                  </CardCart>
                </div>
              ))}
            </div>
            <hr />
            <h2>Precio Total: ${cartContent.reduce((acc, { quantity, price }) => acc + quantity * price, 0) }</h2>
            <hr />
            <Buttons corto grey>
              <button className="btn mb-5" onClick={ clearCart }>Vaciar Carrito</button>
            </Buttons>
            <Buttons lila corto blanco>
              <Link to='/checkout'>
                <button className="btn ml-2 mb-5">Confirmar Compra!</button>
              </Link>
            </Buttons>
          </div>

        : <div className="container mt-5">
            <h5 className="alert alert-info">No hay items agregados</h5>
            <hr />
            <Buttons grey corto >
              <Link to='/'> 
                <button className="btn">Volver a Home</button>
              </Link>
            </Buttons>
          </div>
      }
    </>
  )
};


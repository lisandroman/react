import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext, useCartContext } from '../context/CartContext';

export const Cart = () => {
  const { clearCart, removeItemFromCart } = useCartContext();
  const cartContent = useContext(CartContext).cart;
 
   //Si cart tiene contenido lo muestro. Sino muestro "No hay items agregados" y ofrezco volver a home
  return (
    <>
      {cartContent.length > 0
        ? <>
            <div className="container mt-5">
              <h2> Articulos en Carrito:</h2>
              <hr />
              <div className="row row-cols-5">
                {cartContent.map((item) => (
                  <div className="col" key={ item.id }>
                    <div className="card mb-3" style={{ maxWidth: 200 }}>
                      <div className="card-header"><strong>{ item.title }</strong> - Precio: ${ item.price }</div>
                      <img src={ item.pictureUrl } alt={ item.alt } style={{ maxWidth: 200 }}/>
                      <div className="card-body">
                        <h4 className="card-text">Cantidad: { item.quantity }</h4>
                        <h4 className="card-text"> Subtotal: ${ item.price * item.quantity }</h4>
                        <span className="btn btn-dark bi bi-cart-x" onClick={ () => removeItemFromCart(item.id) }> Remover </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <hr />
              <h2>Precio Total: ${cartContent.reduce((acc, { quantity, price }) => acc + quantity * price, 0)  }</h2>
              <hr />
              <button className="btn btn-danger" onClick={ clearCart }>Vaciar Carrito</button>
              <Link to='/checkout'>
                <button className="btn btn-primary ml-2">Confirmar Compra!</button>
              </Link>
            </div>
          </>

        : <> <div className="container mt-5">
              <h3 className="alert alert-info" >No hay items agregados</h3>
              <hr />
              <Link to='/'> <button className="btn btn-danger">Volver a Home</button></Link>
            </div>
          </>
      }
    </>
  )
}
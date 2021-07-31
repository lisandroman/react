import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

export const Cart = () => {
  const { cart, clearCart, removeItemFromCart } = useCartContext();

  // const alertCheckOut = () => { 
  //   alert('Articulos Comprados!');
  //   clearCart();
  //   // tengo que enviarlo al home o una página de agradecimiento por la compra
  // }
 
   //Si cart tiene contenido lo muestro. Sino muestro "No hay items agregados" y ofrezco volver a home
  return (
    <>
      {cart.length > 0
        ? <>
            <div className="container mt-5">
              <h2> Articulos en Carrito:</h2>
              <hr />
              <div className="row row-cols-5">
                {cart.map((item) => (
                  <div className="col" key={item.id}>
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
              <h2>Precio Total: ${cart.reduce((acc, { quantity, price }) => acc + quantity * price, 0)  }</h2>
              <hr />
              <button className="btn btn-danger" onClick={ clearCart }>Vaciar Carrito</button>
              {/* <button className="btn btn-primary ml-3" onClick={ alertCheckOut }>Pagar Compra</button> */}
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
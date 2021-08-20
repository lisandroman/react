import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';

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


const CardCart = styled.div`
  width: 100%;
  padding: 10px 10px;
  background: #ecf0f3;
  border-radius: 10px;
  box-shadow: -3px -3px 7px #ffffff,
               3px 3px 5px #ceced1;
    p {
      color: #31344b;
    }
`;

const Buttons = styled.div `
  width: 10.5rem;
  justify-content: space-between; 
  border: none;
  display: ${ props => props.corto ? "inline-block" : "inline"};

  .clearButtonUnderline {
    text-decoration: none;
  }
    
  button{
    background: #ecf0f3;
    box-shadow: -3px -3px 7px #ffffff,
                3px 3px 5px #ceced1;
    border: none;
    border-radius: 5px;
    background-color: ${ props => props.lila ? "#e2e6f7" : props.rosa ?  "#fadafa" : props.grey ? "#855b8d" : "#aca9fa" };
    color: ${ props => props.blanco ? "#817094" : "#fff" };
    cursor: pointer;
    font-size: 17px;
    font-weight: 400;
    outline: none;
    padding: 12px 6px;
    position: relative;
    width: 100%;
    z-index: 4;
  }

  button:hover:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff,
                inset 3px 3px 5px #ceced1;
    z-index: -1;
    border-radius: 5px;
  }     
`;
import React, { useContext, useEffect, useState } from 'react'
import { database } from '../../firebase/firebase';
import { CartContext } from '../context/CartContext';
import { FormContainer, StyledCheckout, WrapperInput } from './CheckoutStyles';

export const Checkout = ({ sendOrder }) => {

  //Traigo el cartContext con los datos del pedido
  const cartContent = useContext(CartContext).cart;
  const { clearCart } = useContext(CartContext);

  //Detalle de items agregados
  const cartData = cartContent.map((item) => ({
    title: `${item.title}`,
    id: `${item.id}`,
    price: `${item.price}`,
    quantity: `${item.quantity}`,
  }));

  //Total del carrito
  const totalCart = cartContent
    .reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0)
    .toLocaleString("es");

  //Obtengo la fecha del pedido
  const getOrderDate = () => {
    let newDate = new Date();
    return newDate.toLocaleDateString("es");
  };
  const orderDate = getOrderDate();
  
  //Actualizacion de Stock en Firebase
  const updateStock = () => {
    cartContent.forEach((item) => {
      database.doc(item.id).update({
        stock: item.stock - item.quantity,
      });
    });
  };

  // Declaro las variables para la info del cliente
  const [buyer, setBuyer] = useState({
    name: '',
    contact: '',
    email: '',
  });

  // Hago un destructuring para acceder directo a cada propiedad
  const {name, contact, email} = buyer;

  useEffect( () => {})

  // "Escucho" el valor ingresado y lo asigno a setBuyer declarado arriba 
  const handleInputChange = ({ target }) => {
    setBuyer({ 
      ...buyer,
      [ target.name ] : target.value
    });
  };

  // Hago el submit con los valores que posteriormente se cargan en firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    sendOrder({ buyer, cartData, orderDate, totalCart });
    setBuyer({ name, email, contact });
    updateStock();
    clearCart();
  };
  
  return (
    <StyledCheckout>
      <FormContainer>
        <h4>Ingresa tus datos:</h4>
        <form onSubmit={ handleSubmit }>
          <WrapperInput >
            <span className="bi bi-person-fill"></span>
            <input    
              type="text"
              name="name"
              placeholder="Nombre..."
              autoComplete="off"
              value={ name }
              onChange={ handleInputChange }
              required
            />
          </WrapperInput>

          <WrapperInput>
            <span className="bi bi-telephone-fill"></span>
            <input    
              type="tel"
              name="contact"
              className="form-control"
              placeholder="Teléfono..."
              autoComplete="off"
              value={ contact }
              onChange={ handleInputChange }
              required
            />
          </WrapperInput>

          <WrapperInput>
            <input
              type="email"
              name="email"
              placeholder="E-mail..."
              autoComplete="off"
              value={ email }
              onChange={ handleInputChange }
              required
            />
            <span className="bi bi-envelope-fill"></span>
          </WrapperInput>

          <WrapperInput>
            <input
              type="text"
              defaultValue={ getOrderDate() }
              disabled
            />
          </WrapperInput>

          <WrapperInput>
            <input
              type="text"
              defaultValue={ totalCart } 
              disabled
            />
          </WrapperInput>

          <button className="btn" type="submit">
            Comprar
          </button>
        </form>
      </FormContainer>
    </StyledCheckout>
  )
}




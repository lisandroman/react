import React, { useContext, useEffect, useState } from 'react'
import { database } from '../../firebase/firebase';
import { CartContext } from '../context/CartContext';

export const Checkout = ({ sendOrder }) => {

  //Accedo al cartContext y los datos de compra
  const cartContent = useContext(CartContext).cart;
  const { clearCart } = useContext(CartContext);

  //Detalle de compra
  const cartData = cartContent.map((item) => ({
    title: `${item.title}`,
    id: `${item.id}`,
    price: `${item.price}`,
    quantity: `${item.quantity}`,
  }));

  //Precio final en el carrito
  const totalCart = cartContent
    .reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0)
    .toLocaleString("es");

  //Funcion con Fecha del pedido 
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

  //Defino el estado para los datos del cliente
  const [buyer, setBuyer] = useState({
    name: '',
    phone:'',
    email: '',
  });

  // Hago un destructuring para acceder directo a cada propiedad
  const { name, phone, email } = buyer;

  useEffect( () => {})

  // onChange para el form en cada input
  const handleInputChange = ({ target }) => {
    setBuyer({ 
      ...buyer,
      [ target.name ] : target.value
    });
  };

  // onSubmit para el Form. Hago el submit pasandole la info solicitada. Actualizo stock y limpio el carrito cumpliendo las rúbricas
  const handleSubmit = (e) => {
    e.preventDefault();
    sendOrder({ buyer, cartData, orderDate, totalCart });
    setBuyer({ name, phone, email });
    updateStock();
    clearCart();
  };

  return (
    <div className="form-group container mt-4 col-4" >
      <h4>Datos para la compra:</h4>
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <input    
            type="text"
            name="name"
            className="form-control"
            placeholder="Nombre..."
            autoComplete="off"
            value={ name }
            onChange={ handleInputChange }
            required
          />
        </div>

        <div className="form-group">
          <input    
            type="text"
            name="phone"
            className="form-control"
            placeholder="Teléfono..."
            autoComplete="off"
            value={ phone }
            onChange={ handleInputChange }
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="E-mail..."
            autoComplete="off"
            value={ email }
            onChange={ handleInputChange }
            required
          />
        </div>

        <div className="form-group">
        <label>Fecha:</label>
          <input
            type="text"
            defaultValue={ getOrderDate() }
            disabled
          />
        </div>

        <div className="form-group">
          <label>Precio: $ </label>
          <input
            type="text"
            defaultValue={ totalCart }
            disabled
          />
        </div>

      <button className="btn btn-primary" type="submit">
        COMPRAR
      </button>
      </form>
    </div>
  )
}
import React from 'react'
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

export const Done = ({ orderId }) => {
  return (
    <>
      {!orderId ? (
        <Loader />
      ) : (
        <div className="container col-5 mt-4">
          <h3>¡Gracias por tu compra!</h3>
          <p>El ID de tu orden es: { orderId }</p>
          <hr />
          <Link to='/'>
            <button className="btn btn-sm btn-danger">Volver a Home</button>
          </Link>
        </div>
      )}
    </>
  );
}


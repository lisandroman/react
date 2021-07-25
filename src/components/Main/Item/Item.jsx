import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

export const Item = ({ ...item }) => {
  // console.log('Chequeo pasar de Item a Count', price, stock) 
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={ item.pictureUrl } className="card-img-top" alt={ item.alt } />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{ item.title }</h4>
        <p className="card-text text-secondary"> { item.description } </p>
        <h5 className="card-price">Precio: $ { item.price } </h5>
        <h6>Stock: { item.stock } </h6>
        
        <Link to={ `/item/${item.id}`}>
          <button className="btn btn-outline-info">Detalles...</button>
        </Link>

      </div>
    </div>
  )
}

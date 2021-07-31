import React from 'react';
import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-4">
        <NavLink className="navbar-brand" to="/">Wooden Toys</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/disney">Disney</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/ofertas">Ofertas</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/cart" id="linkCarrito">
          <CartWidget />
        </NavLink>    
      </nav>
    </>
  )
}


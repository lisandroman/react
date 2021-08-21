import React from 'react';
import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
          <NavLink to="/" className="navbar-brand"><i className="bi bi-gift"></i> Wooden<strong>TOYS</strong></NavLink>
          
          <button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
          
          <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/disney">Disney</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/animalitos">Animales</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/vehiculos">Vehículos</NavLink>
              </li>
            </ul>

          </div>
          <div>
            <CartWidget />
          </div> 
          
        </div>
      </nav>
    </>
  )
}


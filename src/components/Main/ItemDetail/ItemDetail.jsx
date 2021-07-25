import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import { Loader } from '../../Loader/Loader';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({ selectedItem, loader }) => {

  const [counter, setCounter] = useState(1);
  const [added, setAdded] = useState(false);
  // console.log(cart)
  
  const { cart, addToCart, removeFromCart } = useCartContext();

  const handleAdd = () => setAdded(!added);
  const handleToCart = () => { addToCart({ ...selectedItem, quantity: counter }) }
  const handleRemoveFromCart = () => { removeFromCart(selectedItem) }
  
  useEffect(() => {
    cart.filter((element) => element.id === selectedItem.id).length > 0 &&
    setAdded(true);
  },[cart, selectedItem.id]);

  //Modifico la cantidad de elementos a agregar. 1) Remuevo (se elimina el cart hasta visualmente) y 2) agrego nuevamente con handleAdd
  const handleModifyCounter = () => { 
    handleRemoveFromCart()
    handleAdd()
  }

  // Agrego al carrito y al counter la cantidad
  const handleButtonAddtoCart = () => {
    handleAdd()
    handleToCart()
  }

  // En el return con un ternario pongo el Loader y luego el desarrollo de ItemList
  return (
    <>
      {loader === 'Cargando...' 
      ? <Loader />
      : (
        selectedItem && (
        <div className="container">
          <div className="row mt-5">
            <div className="col-4">
              <img src={selectedItem.pictureUrl} alt={selectedItem.alt} className="img-thumbnail"/>
            </div>

            <div className="col-4">
              <h3>{ selectedItem.title }</h3>
              <p> { selectedItem.description }</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> <b> Precio:</b> ${ selectedItem.price } </li>
                <li className="list-group-item"> <b> Stock: </b> { selectedItem.stock } </li>
              </ul>
              {!added  
                ? ( <>  <ItemCount initial={1} stock={selectedItem.stock} counter={ counter } setCounter={ setCounter }/>
                        <button className="btn btn-danger mt-2" onClick={ handleButtonAddtoCart }> Agregar al Carrito </button>
                    </>) 
                : ( <>  <Link to='/cart' onClick={handleAdd}> 
                          <button className="btn btn-sm btn-danger" onClick={handleAdd}> Terminar Compra </button>
                        </Link>
                        <button className="btn btn-sm btn-info ml-2" onClick={ handleModifyCounter }> Modificar </button>
                    </>)
              }
            <hr />
            
            </div>
          </div>
        </div>
        )
      )}
    </>
  ) 
}

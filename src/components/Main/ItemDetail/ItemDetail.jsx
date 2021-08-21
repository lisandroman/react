import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { Loader } from '../../Loader/Loader';
import { ItemCount } from '../ItemCount/ItemCount';
import { Buttons, Wrapper } from './ItemDetailStyles';

export const ItemDetail = ({ selectedItem, loader }) => {
  const { cart, addToCart, removeFromCart, checkStock } = useCartContext();

  const [counter, setCounter] = useState(1);
  const [added, setAdded] = useState(false);
  
  const stock = checkStock(selectedItem);

  const handleAdd = () => setAdded(!added);
  const handleToCart = () => {
    addToCart({ ...selectedItem, quantity: counter });
  };
  
  const handleRemoveFromCart = () => {
    removeFromCart(selectedItem);
  };

  useEffect(() => {
    cart.filter((element) => element.id === selectedItem.id).length > 0 &&
      setAdded(true);
  }, [cart, selectedItem.id]);

  //Modifico la cantidad de elementos a agregar. 1) Remuevo (se elimina el cart incluso visualmente) y 2) agrego nuevamente con handleAdd
  const handleModifyCounter = () => {
    handleRemoveFromCart();
    handleAdd();
  };

  // Agrego al carrito y al counter la cantidad
  const handleButtonAddtoCart = () => {
    handleAdd();
    handleToCart();
  };

  //Botón return
  let history = useHistory();
  const Return = () => { history.goBack() }

  return (
    <>
      {selectedItem.length <= 0 
      ? ( <Loader /> ) 
      : (
        selectedItem && (
          <div className="container">
            <div className="row mt-5">
              <Wrapper className="col-sm-4 col-10">
                <img
                  src={ selectedItem.pictureUrl }
                  alt={ selectedItem.title }
                  className="img-thumbnail"
                />
              </Wrapper>

              <div className="col-sm-4 col-12 text-center">
                <h3>{ selectedItem.title }</h3>
                <p> { selectedItem.description }</p>
                {stock > 0 ? (
                  <>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <b> Precio:</b> ${ selectedItem.price }
                      </li>
                      <li className="list-group-item">
                        <b>Stock:</b> { stock }
                      </li>
                    </ul>
                    {!added ? (
                      <>
                        <ItemCount initial={ 1 } stock={ selectedItem.stock } counter={ counter } setCounter={ setCounter } />
                        <Buttons bgLila textWhite smSize>
                          <button className="btn mt-2 mr-2" onClick={ handleButtonAddtoCart } > Agregar al Carrito </button>
                        </Buttons>
                        <Buttons bgGrey smSize>
                          <button className="btn mt-2 ml-2" onClick={ Return }>Volver</button>
                        </Buttons>
                      </>
                    ) : (
                      <>
                        <Buttons bgLila textWhite smSize>
                          <Link to="/cart" onClick={ handleAdd } className="clearButtonUnderline">
                            <button className="btn mt-3" onClick={ handleAdd } >Terminar Compra</button>
                          </Link>
                        </Buttons>
                        
                        <Buttons bgPink textWhite smSize>
                          <button className="btn mt-3 ml-2" onClick={ handleModifyCounter }>Modificar</button>
                        </Buttons>
                        <hr />

                        <Buttons >
                          <Link to='/'>
                            <button className="btn">Seguir Comprando</button>
                          </Link>
                        </Buttons>
                      </>
                    )}
                    <hr />
                  </>
                ) : (
                  <>
                    <div className="alert alert-info" role="alert"> Sin Stock! </div>
                      <Buttons bgPink textWhite smSize>
                        <Link to="/">
                          <button className="button btn"> Ir a Home </button>
                        </Link>
                      </Buttons>
                      <Buttons bgLila textWhite smSize>
                        <Link to="/cart">
                          <button className="btn ml-2"> Ir al Carrito </button>
                        </Link>
                      </Buttons>
                  </>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};




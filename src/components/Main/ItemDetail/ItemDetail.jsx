import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { Loader } from '../../Loader/Loader';
import { ItemCount } from '../ItemCount/ItemCount';
import styled from 'styled-components';

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

  //Botón regresa hacia atrás
  let history = useHistory();
  const Return = () => { history.goBack() }

  // En el return con un ternario pongo el Loader y luego el desarrollo de ItemList
  return (
    <>
      {loader === "Cargando..." ? (
        <Loader />
      ) : (
        selectedItem && (
          <div className="container">
            <div className="row mt-5">
              <Wrapper className="col-4">
                <img
                  src={ selectedItem.pictureUrl }
                  alt={ selectedItem.title }
                  className="img-thumbnail"
                />
              </Wrapper>

              <div className="col-4">
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
                        <Buttons lila blanco corto>
                          <button className="btn mt-2" onClick={ handleButtonAddtoCart } > Agregar al Carrito </button>
                        </Buttons>
                        <Buttons grey corto>
                          <button className="btn mt-2 ml-2" onClick={ Return }>Volver</button>
                        </Buttons>
                      </>
                    ) : (
                      <>
                        <Buttons lila blanco corto>
                          <Link to="/cart" onClick={ handleAdd } className="clearButtonUnderline">
                            <button className="btn mt-3" onClick={ handleAdd } >Terminar Compra</button>
                          </Link>
                        </Buttons>
                        
                        <Buttons rosa blanco corto>
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
                      <Buttons rosa blanco corto>
                        <Link to="/">
                          <button className="button btn"> Ir a Home </button>
                        </Link>
                      </Buttons>
                      <Buttons lila blanco corto>
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


const Wrapper = styled.div`
  background: #ecf0f3;
  box-shadow: -3px -3px 7px #ffffff,
              3px 3px 5px #ceced1;
  width: 350px;
  padding: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;

    img{
      border-radius: 10px;
      border: none;
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


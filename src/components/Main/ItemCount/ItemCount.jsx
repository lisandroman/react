import React from 'react'
import './ItemCount.css'
// import styled from 'styled-components'

export const ItemCount = ({ initial, counter, setCounter, stock }) => {

  console.log('Stock recibido en ItemCount:', stock)
  // const ProbandoStyled = styled.h1`
  //     color: pink;
  //     font-weight: bold;
  // `;

  const handleDecrement = () => { counter > initial && setCounter(counter - 1) }
  const handleIncrement = () => { counter < stock && setCounter(counter + 1) }

  return (
    <>
      <div>
        {/* <ProbandoStyled>  
          Soy un H1 Styledeado
        </ProbandoStyled> */}
        <div className="buttonGroup">
          <button className="btn btn-danger btn-circle functionButton" onClick={ handleDecrement } disabled={ counter === initial }> - </button>
          <h3 className="counter"> { counter } </h3>
          <button className="btn btn-danger btn-circle functionButton" onClick={ handleIncrement } disabled={ counter === stock }> + </button>
        </div>
      </div>
      {/* { priceCounter() && <h5 className="mt-3"> Subtotal: ${ total } </h5> }
      { limitStock() && <h5 className="text-danger"> No hay mas stock! </h5> } */}
    </>
  )
}
import React from 'react'
import './ItemCount.css'

export const ItemCount = ({ initial, counter, setCounter, stock }) => {

  const handleDecrement = () => { counter > initial && setCounter(counter - 1) }
  const handleIncrement = () => { counter < stock && setCounter(counter + 1) }

  return (
    <div className="buttonGroup">
      <button className="btn btn-dark btn-circle functionButton" onClick={ handleDecrement } disabled={ counter === initial }> - </button>
      <h3 className="counter"> { counter } </h3>
      <button className="btn btn-dark btn-circle functionButton" onClick={ handleIncrement } disabled={ counter === stock }> + </button>
    <hr />
    </div>
  )
}


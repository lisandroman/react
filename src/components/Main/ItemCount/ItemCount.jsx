import React from 'react';
import { ButtonsCounter } from './ItemCountStyles';

export const ItemCount = ({ initial, counter, setCounter, stock }) => {

  const handleDecrement = () => { counter > initial && setCounter(counter - 1) };
  const handleIncrement = () => { counter < stock && setCounter(counter + 1) };

  return (
    <>
      <ButtonsCounter>
        <div className="buttonGroup col-md-5">
          <button className="btn"
            onClick={handleDecrement}
            disabled={counter === initial}
          >
            -
          </button>
          <h3 className="counter"> {counter} </h3>
          <button className="btn"
            onClick={handleIncrement}
            disabled={counter === stock}
          >
            +
          </button>
        </div>
      </ButtonsCounter>
      <hr />
    </>
  );
};

  
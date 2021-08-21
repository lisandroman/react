import React from 'react'
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import ImgDone from '../../assets/imgForm.jpg';
import { Buttons, TextRight, Wrapper } from './DoneStyles';

export const Done = ({ orderId }) => {
  return (
    <>
      {!orderId ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="row mt-5">
            <Wrapper className="col-sm-4 col-8 mx-auto">
              <img
                src={ ImgDone }
                alt="ImgDone"
                className="img-thumbnail"
              />
            </Wrapper>
            
            <TextRight className="col-sm-4 col-12 text-center">
              <h2>¡Gracias por tu compra!</h2>
              <h5>Pronto estarás disfrutando tus juguetes</h5>
              <hr />
              <p> El ID de tu orden es: <strong>{ orderId }</strong></p>
              <Buttons bgPink textWhite smSize>
                <Link to="/">
                  <button className="button btn mt-4"> Ir a Home </button>
                </Link>
              </Buttons>
            </TextRight>
          </div>
        </div>
      )}
    </>
  );
};




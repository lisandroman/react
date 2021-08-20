import React from 'react'
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import ImgDone from '../../assets/imgForm.jpg';
import styled from 'styled-components'

export const Done = ({ orderId }) => {
  return (
    <>
      {!orderId ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="row mt-5">
            <Wrapper className="col-4">
              <img
                src={ ImgDone }
                alt="ImgDone"
                className="img-thumbnail"
              />
            </Wrapper>
            
            <TextRight className="col-5 mt-4">
              <h2>¡Gracias por tu compra!</h2>
              <h5>Pronto estarás disfrutando tus juguetes</h5>
              <hr />
              <p> El ID de tu orden es: <strong>{ orderId }</strong></p>
              <Buttons rosa blanco corto>
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

const TextRight = styled.div`
  h2, p {
    color: #4a4c63;
  }
  h5 {
    color:#b32635;
  }
 
`;


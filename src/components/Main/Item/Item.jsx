import React from 'react';
import { Link } from 'react-router-dom';
import { ImgArea, InfoArea, InnerArea, Wrapper } from './ItemStyles';

export const Item = ({ pictureUrl, title, price, stock, id }) => {
  
  return (
    <>
      <Wrapper className="mx-auto">
        <ImgArea>
          <InnerArea>
            <div className="overflow">
              <img src={ pictureUrl } className="card-img-top" alt={ title } />
            </div>
          </InnerArea>
        </ImgArea>

        <InfoArea>
          <div className="card-body text-center ">
            <h5 className="card-title">{ title }</h5>
            <h5 className="card-price">$ { price } </h5>
            <p className="card-text text-secondary">Stock: { stock } </p>
          </div>
        </InfoArea>

        <Link to={ `/item/${ id }` } className="buttons">
          <button className="btn">Detalles...</button>
        </Link>
      </Wrapper>
    </>
  )
};



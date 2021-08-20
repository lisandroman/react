import React from 'react';
import { Loader } from '../../Loader/Loader';
import { Item } from '../Item/Item';

export const ItemList = ({ toys }) => {
  
  return (
    <div className="container">
      <div className="row">
        {toys.length === 0 
          ? ( <Loader /> )
          : (
            toys.map((item) => (
              <Item { ...item } key={ item.id} />
            ))
        )}
      </div>
    </div>
  )
}




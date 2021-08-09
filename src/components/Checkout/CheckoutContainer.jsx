import React, { useState } from 'react'
import { dbOrders } from '../../firebase/firebase';
import { Checkout } from './Checkout';
import { Done } from './Done';

export const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState();
  
  //Funcion para enviar los datos a la base
  const sendOrder = async ( order ) => {
    await dbOrders.doc().set(order);
    const orderId = dbOrders.doc(order.id).id;
    setOrderId(orderId);
  };
  
  return (
    <>
      {!orderId ? (
        <div>
          <Checkout sendOrder={ sendOrder } />
        </div>
      ) : (
        <div>
          <Done orderId={ orderId } />
        </div>
      )}
    </>
  )
}

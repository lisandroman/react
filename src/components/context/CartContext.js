import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  
  const clearCart = () => setCart([]);
  const isInCart = (selectedToy) => cart.filter((item) => item.id === selectedToy.id).length === 0;

  // const addToCart = (item, quantity) => {
  //   if (isInCart(item.id)) {
  //     const newCart = cart.map(cartElement => {
  //       if (cartElement.id === item.id) {
  //         return { ...cartElement, quantity: cartElement.quantity + quantity }
  //       } else return cartElement;
  //     })
  //     setCart(newCart);
  //   } else {
  //     setCart(prev => [...prev, { ...item, quantity }]);
  //   }
  // };

  const addToCart = (selectedToy) => {
    if (isInCart(selectedToy)) {
      setCart([...cart, selectedToy])
    } else { return selectedToy }
  }
 
  const removeFromCart = (selectedToy) => {
    let removeFiltered = cart.filter(
      (item) => item.id !== selectedToy.id
    );
    setCart(removeFiltered);
  };

  const cartLength = () =>{
   return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

  return  <CartContext.Provider value={{ cartLength, cart, setCart, clearCart, removeFromCart, addToCart, isInCart }}>
            {children}
          </CartContext.Provider>
}
